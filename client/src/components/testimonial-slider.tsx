import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    testimonial: "Infinite Jobs Solutions transformed our hiring process. Their precision in matching candidates to our culture and requirements is unmatched.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b169e7b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    testimonial: "They didn't just find me a job, they found me my dream career. The support throughout the process was exceptional.",
    rating: 5
  },
  {
    name: "David Chen",
    position: "HR Director, GlobalTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    testimonial: "Outstanding service for bulk hiring. They managed to find 50+ qualified candidates within our tight deadline.",
    rating: 5
  }
];

export default function TestimonialSlider() {
  return (
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Success stories from companies and candidates who found their perfect match through our comprehensive recruitment solutions. These testimonials represent the foundation of trust and excellence we've built over years of dedicated service.
          </p>
          
          {/* Visual testimonial preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-[#00D4FF]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-[#FF006E] transform rotate-12">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 mx-auto rounded-tr-2xl rounded-bl-2xl overflow-hidden border-2 border-[#00D4FF]">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden border-2 border-[#FF006E] transform -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 hover-glow service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-5 h-5 text-[#00D4FF] mr-2">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
                <div className="flex text-[#00D4FF]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}