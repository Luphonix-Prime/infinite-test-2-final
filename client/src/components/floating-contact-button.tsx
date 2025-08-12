import { MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function FloatingContactButton() {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/contact");
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button 
        onClick={handleClick}
        className="w-16 h-16 gradient-bg rounded-full shadow-lg hover-glow transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
}