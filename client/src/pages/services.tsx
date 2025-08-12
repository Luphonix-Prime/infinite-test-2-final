import { motion } from "framer-motion";
import { CheckCircle, Users, BookOpen, Zap, Code, Building, GraduationCap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "IT Recruitment",
    description: "In today's digital-first world, finding the right technology talent is crucial for business success. Our specialized IT recruitment division understands the rapidly evolving tech landscape and connects you with professionals who don't just meet your requirements, but exceed them. We work with cutting-edge technologies and emerging platforms, ensuring our candidates are at the forefront of innovation.",
    detailedDescription: "Our IT recruitment specialists have deep technical knowledge across multiple domains. We don't just match keywords - we understand the nuances of different programming languages, frameworks, and methodologies. Whether you need a full-stack developer who can architect scalable solutions or a DevOps engineer who can optimize your infrastructure, we ensure cultural and technical alignment.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Full-Stack Development (React, Node.js, Python, Java)",
      "Cloud Architecture & DevOps (AWS, Azure, Docker, Kubernetes)",
      "Data Science & Machine Learning (Python, R, TensorFlow)",
      "Mobile Development (iOS, Android, React Native)",
      "Cybersecurity & Infrastructure (Penetration Testing, Network Security)",
      "AI/ML Engineers & Data Scientists",
      "Product Management & Technical Leadership"
    ],
    color: "#00D4FF"
  },
  {
    icon: Building,
    title: "Non-IT Recruitment",
    description: "Beyond technology, businesses need diverse talent across all functions to thrive. Our comprehensive non-IT recruitment services span every industry vertical, from healthcare and finance to manufacturing and retail. We understand that each industry has unique challenges, compliance requirements, and cultural nuances that impact hiring decisions.",
    detailedDescription: "Our non-IT recruitment team brings decades of combined experience across traditional industries. We maintain extensive networks of professionals and understand the specific certifications, regulatory requirements, and soft skills needed for success in each field. From C-suite executives to entry-level positions, we ensure every placement contributes to your organizational goals.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Executive Leadership & C-Suite Positions",
      "Sales & Business Development (B2B, B2C, Enterprise)",
      "Marketing & Digital Marketing Specialists",
      "Finance & Accounting (CPA, Financial Analysts, Controllers)",
      "Healthcare Professionals (Doctors, Nurses, Healthcare Admin)",
      "Manufacturing & Operations (Quality Control, Supply Chain)",
      "Human Resources & Organizational Development",
      "Legal & Compliance Officers"
    ],
    color: "#FF006E"
  },
  {
    icon: GraduationCap,
    title: "Internship & Graduate Programs",
    description: "Investing in fresh talent is investing in your company's future. Our internship and graduate program division specializes in connecting ambitious students and recent graduates with meaningful opportunities that provide real-world experience while contributing value to your organization. We focus on creating win-win scenarios where interns gain valuable skills and companies access fresh perspectives.",
    detailedDescription: "We partner with leading universities and educational institutions to identify high-potential candidates early in their academic journey. Our programs include comprehensive assessment of academic performance, extracurricular involvement, and career aspirations. We also provide structured onboarding and mentorship frameworks to ensure intern success.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Summer Internship Programs (3-6 months)",
      "Co-op Programs & Academic Credit Internships",
      "Graduate Trainee & Management Development Programs",
      "Industry-Academia Partnership Development",
      "Campus Recruitment Drives & Career Fairs",
      "Technical Training & Certification Programs",
      "Mentorship & Professional Development Frameworks",
      "Conversion Programs (Intern to Full-time)"
    ],
    color: "#00D4FF"
  },
  {
    icon: TrendingUp,
    title: "Bulk & Volume Hiring",
    description: "When your business is scaling rapidly or facing seasonal demand spikes, traditional recruitment methods can't keep pace. Our bulk hiring solutions are designed for companies that need to hire large numbers of qualified candidates quickly without compromising on quality. We leverage technology, streamlined processes, and dedicated teams to deliver volume recruitment at scale.",
    detailedDescription: "Our bulk hiring expertise spans multiple scenarios - from startup scaling to enterprise expansion, seasonal workforce augmentation to new facility launches. We deploy advanced screening technologies, automated assessment tools, and dedicated recruitment teams to maintain quality standards while achieving aggressive timelines. Our process includes comprehensive workforce planning and post-hire integration support.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Rapid Scale Recruitment (50-500+ positions)",
      "Campus Recruitment & Mass Hiring Drives",
      "Seasonal & Project-Based Staffing Solutions",
      "New Facility & Location Launch Hiring",
      "Contract & Temporary Workforce Solutions",
      "Automated Screening & Assessment Tools",
      "End-to-End Onboarding & Integration Support",
      "Workforce Planning & Analytics"
    ],
    color: "#FF006E"
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive recruitment solutions tailored to meet your unique hiring needs across all industries and experience levels. We combine industry expertise, cutting-edge technology, and personalized service to deliver exceptional results.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content Section */}
                  <div className={`${isEven ? 'lg:col-start-1' : 'lg:col-start-2'} space-y-6`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}, ${service.color === "#00D4FF" ? "#FF006E" : "#00D4FF"})`
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <p className="text-gray-400 text-base leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white mb-4">Key Specializations:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: service.color }}
                            ></span>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                    <motion.div
                      className="glass-effect rounded-3xl p-4 service-card group overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect <span className="gradient-text">Talent Match</span>?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your unique hiring needs and create a customized recruitment strategy that delivers results.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#FF006E] rounded-full text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}