import HeroSection from "@/components/hero-section";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Infinite Jobs Solutions</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              We are not just another recruitment agency. We are your strategic talent acquisition partner, committed to understanding your unique needs and delivering exceptional results that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8">Transforming Recruitment Excellence</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At Infinite Jobs Solutions, we believe that exceptional talent deserves exceptional opportunities. Our comprehensive approach combines cutting-edge technology, deep industry expertise, and personalized service to create perfect matches between candidates and companies.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With over a decade of experience in the recruitment industry, we have successfully placed thousands of professionals across various sectors, from startups to Fortune 500 companies. Our comprehensive approach and proven methodologies ensure exceptional results for both candidates and clients.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We pride ourselves on understanding the unique culture and requirements of each organization we work with, allowing us to make precise matches that lead to long-term success and mutual satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-tr-3xl rounded-bl-3xl"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-[#00D4FF]">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                    alt="Professional meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-40 rounded-tl-3xl rounded-br-3xl overflow-hidden border-4 border-[#FF006E]">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300"
                    alt="Office environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Recruitment Solutions</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              From IT specialists to management executives, from fresh graduates to industry veterans, we cover every aspect of talent acquisition with precision and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="group glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-xl bg-[#00D4FF] bg-opacity-20 flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-[#00D4FF]" />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#00D4FF]">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                    alt="IT recruitment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Recruitment</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Specialized in placing top-tier technology professionals including software developers, data scientists, cybersecurity experts, and IT leadership roles across all experience levels.
              </p>
              
            </motion.div>

            <motion.div
              className="group glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-tr-xl rounded-bl-xl bg-[#FF006E] bg-opacity-20 flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-[#FF006E]" />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-20 rounded-tl-2xl rounded-br-2xl overflow-hidden border-2 border-[#FF006E]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120"
                    alt="Executive recruitment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Executive Search</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Executive-level recruitment for C-suite positions, senior management roles, and specialized leadership positions requiring extensive experience and proven track records.
              </p>
              
            </motion.div>

            <motion.div
              className="group glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-[#00FF88] bg-opacity-20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-10 h-10 text-[#00FF88]" />
                </div>
                <div className="absolute -top-2 -right-2 w-20 h-16 rounded-2xl overflow-hidden border-2 border-[#00FF88]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=100"
                    alt="Bulk hiring"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bulk Hiring</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Large-scale recruitment solutions for companies experiencing rapid growth, seasonal demands, or new facility launches. Efficient processes without compromising quality.
              </p>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Proven <span className="gradient-text">5-Step Process</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A systematic approach that ensures we find the perfect match between talent and opportunity every time. Our methodology combines human expertise with cutting-edge technology for exceptional results.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#00D4FF] bg-opacity-20 flex items-center justify-center">
                    <span className="text-[#00D4FF] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Discovery & Analysis</h4>
                    <p className="text-gray-400 text-sm">Deep understanding of client requirements and culture</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF006E] bg-opacity-20 flex items-center justify-center">
                    <span className="text-[#FF006E] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Strategic Sourcing</h4>
                    <p className="text-gray-400 text-sm">Multi-channel candidate identification and engagement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FF88] bg-opacity-20 flex items-center justify-center">
                    <span className="text-[#00FF88] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Rigorous Assessment</h4>
                    <p className="text-gray-400 text-sm">Comprehensive evaluation of skills and cultural fit</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] bg-opacity-20 flex items-center justify-center">
                    <span className="text-[#FFD700] font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Selection & Negotiation</h4>
                    <p className="text-gray-400 text-sm">Final evaluation and offer negotiation support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#9D4EDD] bg-opacity-20 flex items-center justify-center">
                    <span className="text-[#9D4EDD] font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Onboarding Support</h4>
                    <p className="text-gray-400 text-sm">Seamless integration and follow-up support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-full h-32 rounded-tl-3xl rounded-br-3xl overflow-hidden border-2 border-[#00D4FF]">
                      <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                        alt="Interview process"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full h-24 rounded-full overflow-hidden border-2 border-[#FF006E]">
                      <img
                        src="https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150"
                        alt="Assessment process"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="w-full h-24 rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-[#00FF88]">
                      <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150"
                        alt="Team meeting"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full h-32 rounded-2xl overflow-hidden border-2 border-[#FFD700]">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                        alt="Success celebration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}