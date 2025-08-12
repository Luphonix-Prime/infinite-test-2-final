import { motion } from "framer-motion";
import { Lightbulb, Eye, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Alexandra Smith",
    role: "CEO & Founder", 
    experience: "15+ years experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Michael Johnson",
    role: "Head of IT Recruitment",
    experience: "12+ years experience", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Emily Chen",
    role: "Senior Recruitment Consultant",
    experience: "8+ years experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "James Williams", 
    role: "Bulk Hiring Specialist",
    experience: "10+ years experience",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

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

            

            {/* Team Section */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our diverse team of recruitment specialists brings years of industry experience and passion for connecting great people with great opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => {
                const shapes = [
                  'rounded-3xl transform rotate-3',
                  'rounded-full border-4 border-[#00D4FF]',
                  'rounded-tr-3xl rounded-bl-3xl',
                  'rounded-2xl transform -rotate-2'
                ];
                
                return (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-full h-full object-cover glass-effect transition-all duration-500 group-hover:scale-105 group-hover:rotate-0 ${shapes[index]}`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${shapes[index]}`}>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-xs leading-relaxed">
                            {index === 0 && "Leading our vision with strategic expertise and industry insights that drive organizational success."}
                            {index === 1 && "Specializing in cutting-edge tech talent acquisition with deep understanding of emerging technologies."}
                            {index === 2 && "Expert in matching candidates with perfect cultural fit and career growth opportunities."}
                            {index === 3 && "Master of large-scale recruitment operations and streamlined hiring processes."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className={`text-sm mb-2 font-medium ${index % 2 === 0 ? 'text-[#FF006E]' : 'text-[#00D4FF]'}`}>{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.experience}</p>
                    <div className="mt-3 flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF006E]"></div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Company Culture Section */}
            <motion.div 
              className="mt-20 grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Our <span className="gradient-text">Culture</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  At Infinite Jobs Solutions, we've cultivated a dynamic work environment that thrives on collaboration, innovation, and continuous learning. Our team is passionate about making a difference in people's careers and lives, and this passion drives everything we do.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-[#00D4FF]"></div>
                    <span className="text-gray-300">Collaborative team environment with open communication</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF006E]"></div>
                    <span className="text-gray-300">Continuous professional development and growth opportunities</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-[#00D4FF]"></div>
                    <span className="text-gray-300">Innovation-driven approach to recruitment challenges</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF006E]"></div>
                    <span className="text-gray-300">Work-life balance with flexible arrangements</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                    alt="Team collaboration"
                    className="w-full h-40 object-cover rounded-tl-3xl rounded-br-3xl"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                    alt="Office environment"
                    className="w-full h-40 object-cover rounded-tr-3xl rounded-bl-3xl transform translate-y-4"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                    alt="Team celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}