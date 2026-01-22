import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on a light background page
  const isLightPage = location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";
  
  const navLinks = [
    { label: "Products", href: isHomePage ? "#products" : "/#products" },
    { label: "Features", href: isHomePage ? "#features" : "/#features" },
    { label: "Process", href: isHomePage ? "#process" : "/#process" },
    { label: "OEM", href: isHomePage ? "#oem" : "/#oem" },
    { label: "Installers", href: isHomePage ? "#installers" : "/#installers" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href={isHomePage ? "#hero" : "/#hero"} className="relative z-10">
              <img 
                src={logoLight} 
                alt="Postlane" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="tel:+17183551808" 
                className="nav-link text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                718.355.1808
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=17183551808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <Link to="/contact" className="btn-primary text-sm">
                Get a Quote
              </Link>
              <a 
                href="https://drive.google.com/file/d/12cFWpWefua4dlY1_BqLcHNxRdg6eb0ip/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Catalog
              </a>
            </div>

            {/* Mobile WhatsApp + Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a 
                href="https://api.whatsapp.com/send?phone=17183551808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream hover:text-primary transition-colors p-2"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 p-2 text-cream"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-semibold text-cream"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+17183551808"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-cream/80 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                718.355.1808
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8"
              >
                <Link to="/contact" className="btn-primary text-center">
                  Get a Quote
                </Link>
                <a 
                  href="https://drive.google.com/file/d/12cFWpWefua4dlY1_BqLcHNxRdg6eb0ip/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Catalog
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
