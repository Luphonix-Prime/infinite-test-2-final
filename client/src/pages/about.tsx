import { motion } from "framer-motion";
import { Lightbulb, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Infinite Jobs Solutions</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We are a leading recruitment agency dedicated to creating meaningful connections between exceptional talent and forward-thinking companies.
              </p>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
                  alt="Our team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Connecting Dreams with Opportunities</h2>
                    <p className="text-xl text-gray-200 max-w-2xl">
                      For over a decade, we've been the bridge between exceptional talent and visionary companies, creating success stories that transform careers and businesses alike.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                      alt="Mission illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-20 h-20 mx-auto glass-effect rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Lightbulb className="w-10 h-10 text-[#00D4FF]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To revolutionize the recruitment industry by leveraging cutting-edge technology, deep industry expertise, and genuine human insight to create perfect career matches. We believe that when the right talent meets the right opportunity, extraordinary things happen. Our mission extends beyond simple job placement – we're dedicated to fostering long-term career growth, organizational success, and meaningful professional relationships that drive mutual prosperity.
                </p>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FF006E] group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                      alt="Vision illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-20 h-20 mx-auto glass-effect rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Eye className="w-10 h-10 text-[#FF006E]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To become the globally recognized leader in talent acquisition, renowned for our innovative methodologies, exceptional service delivery, and unwavering commitment to creating sustainable career partnerships. We envision a future where every professional finds their perfect career path and every organization discovers the talent that propels them to new heights. Our vision encompasses building a world where work is not just about earning a living, but about finding purpose, growth, and fulfillment.
                </p>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-tr-3xl rounded-bl-3xl overflow-hidden group-hover:-rotate-12 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                      alt="Values illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-20 h-20 mx-auto glass-effect rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Heart className="w-10 h-10 text-[#00D4FF]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                <p className="text-gray-400 leading-relaxed">
                  Integrity, Excellence, Innovation, and Empathy form the cornerstone of everything we do. We believe in conducting business with unwavering honesty, delivering services that exceed expectations, continuously evolving our approaches, and maintaining genuine care for every individual we serve. These values guide our decision-making, shape our relationships, and define our culture. We are committed to building lasting partnerships based on trust, transparency, mutual respect, and shared success.
                </p>
              </motion.div>
            </div>

            

            {/* Remove the entire Team Section and its related code */}
            
          </div>
        </div>
      </section>
    </div>
  );
}