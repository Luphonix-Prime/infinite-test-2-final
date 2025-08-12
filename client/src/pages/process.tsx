import { motion } from "framer-motion";
import { ClipboardList, Search, MessageCircle, CheckCircle, Users } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Requirement Gathering",
    icon: ClipboardList,
    description: "We start by deeply understanding your company culture, specific role requirements, technical needs, and growth objectives. This comprehensive analysis ensures we target the right candidates from the outset."
  },
  {
    number: 2,
    title: "Screening", 
    icon: Search,
    description: "Our expert team conducts thorough candidate screening including technical assessments, behavioral interviews, and cultural fit evaluation. We use advanced tools and proven methodologies to identify top performers."
  },
  {
    number: 3,
    title: "Interviewing",
    icon: MessageCircle,
    description: "We facilitate structured interviews between shortlisted candidates and your hiring team. Our consultants provide guidance throughout the process and ensure both parties have all necessary information for informed decisions."
  },
  {
    number: 4,
    title: "Selection",
    icon: CheckCircle,
    description: "We assist in the final selection process by providing detailed candidate evaluations, reference checks, and negotiation support. Our goal is to ensure a smooth transition from interview to job offer acceptance."
  },
  {
    number: 5,
    title: "Onboarding",
    icon: Users,
    description: "Our relationship doesn't end with placement. We provide ongoing support during the onboarding process, ensuring smooth integration and addressing any concerns that arise during the initial employment period."
  }
];

export default function Process() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              A proven, systematic approach to recruitment that ensures we find the perfect match between talent and opportunity, every single time. Our comprehensive 5-step methodology combines human expertise with cutting-edge technology to deliver exceptional results with precision, speed, and reliability.
            </p>
          </motion.div>

          {/* Process Overview Image */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
                alt="Our recruitment process workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Streamlined Excellence</h2>
                  <p className="text-xl text-gray-200 max-w-3xl">
                    From initial consultation to successful onboarding, our process is designed to maximize efficiency while maintaining the highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              const shapes = [
                'rounded-tr-3xl rounded-bl-3xl',
                'rounded-full',
                'rounded-3xl transform rotate-2',
                'rounded-2xl',
                'rounded-tl-3xl rounded-br-3xl'
              ];
              const processImages = [
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                'https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
              ];
              
              return (
                <motion.div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${isEven ? '' : 'md:grid-flow-dense'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'} space-y-6`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#FF006E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-bold flex items-center">
                        <IconComponent className="w-8 h-8 text-[#00D4FF] mr-3" />
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Enhanced descriptions for each step */}
                    <div className="space-y-3">
                      {index === 0 && (
                        <>
                          <p className="text-gray-400 leading-relaxed">
                            Our discovery phase involves comprehensive stakeholder interviews, detailed job analysis, and cultural assessment. We dive deep into your company's DNA, understanding not just what you need, but why you need it and how success will be measured.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Stakeholder Interviews</span>
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Cultural Assessment</span>
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Job Analysis</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <p className="text-gray-400 leading-relaxed">
                            Our multi-layered screening process includes technical assessments, cognitive evaluations, and behavioral interviews. We use AI-powered tools for initial screening while maintaining human expertise for final evaluations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Technical Tests</span>
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">AI Screening</span>
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Behavioral Analysis</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <p className="text-gray-400 leading-relaxed">
                            Structured interview coordination with detailed preparation materials for both parties. We provide interview guides, technical question banks, and cultural fit assessments to ensure productive conversations.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Interview Coordination</span>
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Preparation Materials</span>
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Feedback Loop</span>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <p className="text-gray-400 leading-relaxed">
                            Comprehensive evaluation reports with detailed candidate comparisons, reference verification, and salary negotiation support. We facilitate transparent communication throughout the decision-making process.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Evaluation Reports</span>
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Reference Checks</span>
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">Negotiation Support</span>
                          </div>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <p className="text-gray-400 leading-relaxed">
                            Seamless integration support including pre-boarding preparation, first-day coordination, and 90-day check-ins. We ensure smooth transitions and address any challenges proactively.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Pre-boarding</span>
                            <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] rounded-full text-sm">90-Day Follow-up</span>
                            <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-sm">Integration Support</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                    <motion.div
                      className="glass-effect rounded-3xl p-4 service-card group overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video rounded-2xl overflow-hidden relative">
                        <img 
                          src={processImages[index]} 
                          alt={`${step.title} process`}
                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${shapes[index]}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-white text-sm font-semibold mb-2">Step {step.number}</div>
                            <div className="text-gray-200 text-xs">
                              {index === 0 && "Deep dive consultation and requirement analysis"}
                              {index === 1 && "Multi-layered candidate evaluation and screening"}
                              {index === 2 && "Structured interviews and cultural assessment"}
                              {index === 3 && "Final evaluation and offer negotiation"}
                              {index === 4 && "Seamless onboarding and integration support"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}