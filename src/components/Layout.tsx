
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CtaBanner from "./CtaBanner";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener for sticky header and animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Handle fade animations
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Layout;
