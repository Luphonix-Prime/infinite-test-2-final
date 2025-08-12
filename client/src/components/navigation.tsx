import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Assuming Button component is available and imported correctly
// import { Button } from "@/components/ui/button"; // Example import

// Mock Button component for demonstration if not provided
const Button = ({ children, onClick, className, ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {children}
  </button>
);

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#00D4FF] to-[#FF006E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-lg">IJS</span>
            </div>
            <span className="text-lg md:text-xl font-bold hidden sm:block">Infinite Jobs Solutions</span>
            <span className="text-lg md:text-xl font-bold sm:hidden">IJS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className={`nav-item text-gray-300 hover:text-white transition-colors text-sm lg:text-base ${location === "/" ? "text-white" : ""}`}>
              Home
            </Link>

            <Link href="/services" className={`nav-item text-gray-300 hover:text-white transition-colors text-sm lg:text-base ${location === "/services" ? "text-white" : ""}`}>
              Services
            </Link>

            <Link href="/about" className={`nav-item text-gray-300 hover:text-white transition-colors text-sm lg:text-base ${location === "/about" ? "text-white" : ""}`}>
              About
            </Link>

            <Link href="/process" className={`nav-item text-gray-300 hover:text-white transition-colors text-sm lg:text-base ${location === "/process" ? "text-white" : ""}`}>
              Process
            </Link>
            <Link href="/contact" className={`nav-item text-gray-300 hover:text-white transition-colors text-sm lg:text-base ${location === "/contact" ? "text-white" : ""}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/process"
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}