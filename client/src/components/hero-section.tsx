import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="gradient-text">Infinite</span>
            <br />
            <span className="text-white">Jobs Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Connecting Talent with Opportunities Across Industries
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between exceptional talent and incredible opportunities, creating perfect matches that drive success for both candidates and companies. Our comprehensive recruitment solutions span IT, non-IT, internships, and bulk hiring across all experience levels and industries.
          </p>

          
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            className="gradient-bg px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold text-lg hover-glow transition-all duration-300 animate-gradient w-full sm:w-auto"
            onClick={() => setLocation("/services")}
          >
            View Openings
          </button>
          <button
            className="glass-effect px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold text-lg hover-glow transition-all duration-300 w-full sm:w-auto"
            onClick={() => setLocation("/contact")}
          >
            Hire Talent
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 glass-effect rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 glass-effect rounded-lg animate-float hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 glass-effect rounded-full animate-float hidden lg:block"></div>
    </section>
  );
}