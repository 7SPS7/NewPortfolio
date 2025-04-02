import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl transition-all duration-300 ${
        isVisible 
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative group">
        {/* Gradient background circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70"></div>
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-full border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;