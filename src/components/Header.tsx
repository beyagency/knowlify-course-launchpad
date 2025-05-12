
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course Outline", path: "/course-outline" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-knowlify-text">
            <span className="text-gradient">Know</span>lify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors hover:text-knowlify-accent ${
                location.pathname === item.path ? "text-knowlify-accent" : "text-knowlify-text"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/get-started">
            <Button className="btn-cta">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-knowlify-text p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
              <div className="container-custom flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium py-2 transition-colors hover:text-knowlify-accent ${
                      location.pathname === item.path ? "text-knowlify-accent" : "text-knowlify-text"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/get-started" className="mt-2">
                  <Button className="btn-cta w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
