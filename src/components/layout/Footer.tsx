import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={logoLight} alt="Postlane" className="h-8 w-auto mb-6" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium EV charging pedestals manufactured in the USA. 
              Trusted by installers nationwide since 2018.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="tel:+15551234567" 
                className="text-cream/80 hover:text-cream flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (555) 123-4567
              </a>
              <a 
                href="mailto:sales@postlane.com" 
                className="text-cream/80 hover:text-cream flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                sales@postlane.com
              </a>
              <span className="text-cream/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Made in the USA
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-cream mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-cream transition-colors">
                  Universal Pedestals
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-cream transition-colors">
                  Cable Management
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-cream transition-colors">
                  Slim Pedestals
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-cream transition-colors">
                  Loop Pedestals
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-cream transition-colors">
                  Bollards & Wallards
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-cream mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-cream transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-cream transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#oem" className="text-muted-foreground hover:text-cream transition-colors">
                  OEM Manufacturing
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-cream transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-semibold text-cream mb-6">Get Started</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Ready to order? Our team is here to help you find the perfect solution.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="btn-primary text-sm text-center">
                Request a Quote
              </Link>
              <a href="#" className="btn-secondary text-sm text-center">
                Download Catalog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Postlane. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
