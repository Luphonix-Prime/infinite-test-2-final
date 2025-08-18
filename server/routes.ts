import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

// SMTP Configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // Required for Hostinger
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // Only if you encounter SSL issues
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Add CORS headers
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    console.log('Request Body:', req.body);
    next();
  });

  app.post("/api/submit-inquiry", async (req, res) => {
    // Add content type header
    res.header('Content-Type', 'application/json');
    
    try {
      console.log('Received contact form data:', req.body);
      
      if (!req.body) {
        return res.status(400).json({ 
          success: false, 
          error: "No data received" 
        });
      }

      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);

      // Send email notification
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = createTransporter();
        
        // Email to company
        const companyEmailOptions = {
          from: process.env.SMTP_USER,
          to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
          subject: `New Contact Form Submission - ${validatedData.service || 'General Inquiry'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00D4FF;">New Contact Form Submission</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
                ${validatedData.service ? `<p><strong>Service Interest:</strong> ${validatedData.service}</p>` : ''}
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #666; font-size: 12px;">
                This email was sent from the Infinite Jobs Solutions contact form.
              </p>
            </div>
          `,
        };

        // Confirmation email to user
        const userEmailOptions = {
          from: process.env.SMTP_USER,
          to: validatedData.email,
          subject: 'Thank you for contacting Infinite Jobs Solutions',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00D4FF;">Thank You for Your Message!</h2>
              <p>Dear ${validatedData.firstName},</p>
              <p>Thank you for reaching out to Infinite Jobs Solutions. We have received your message and will get back to you within 24 hours.</p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Your Message Details:</h3>
                <p><strong>Service Interest:</strong> ${validatedData.service || 'General Inquiry'}</p>
                <p><strong>Your Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <p>In the meantime, feel free to explore our services or call us directly at <strong>+1 (555) 123-4567</strong>.</p>
              
              <div style="margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #00D4FF, #FF006E); border-radius: 8px; text-align: center;">
                <p style="color: white; margin: 0; font-weight: bold;">Infinite Jobs Solutions</p>
                <p style="color: white; margin: 5px 0 0 0; font-size: 14px;">Connecting Talent with Opportunity</p>
              </div>

              <p style="color: #666; font-size: 12px;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          `,
        };

        try {
          console.log('Attempting to send emails with config:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            // Don't log the password
          });
          
          await transporter.sendMail(companyEmailOptions);
          console.log('Company email sent successfully');
          
          await transporter.sendMail(userEmailOptions);
          console.log('User email sent successfully');
        } catch (emailError) {
          console.error('Email sending failed:', {
            error: emailError.message,
            stack: emailError.stack,
            code: emailError.code,
            command: emailError.command
          });
        }
          // Log detailed error information
          if (emailError instanceof Error) {
            console.error('Error details:', {
              message: emailError.message,
              stack: emailError.stack,
            });
          }
          // Don't fail the request if email fails
        }
      }

      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contact 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
