import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="min-h-screen bg-surface-overlay border-t border-border flex flex-col">
      {/* Banner Section */}
      <div className="relative flex-shrink-0 h-64 md:h-80 overflow-hidden">
        <img 
          src="/images/footer-banner.jpg" 
          alt="ELEVATE 2026 Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Footer Content */}
      <div className="flex-1 flex items-center min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-24rem)]">
        <div className="container mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">
                ELEVATE <span className="text-primary">2026</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              The ultimate inter-college fest bringing together the brightest minds for innovation, creativity, and competition.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Events', 'Schedule', 'Prizes', 'Sponsors', 'FAQs'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Events</h4>
            <ul className="space-y-3">
              {['Hackathon', 'Code Arena', 'Workshops', 'Cultural', 'Gaming', 'Sports'].map((event) => (
                <li key={event}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  PSIT College, Kanpur, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@elevate2026.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contact@elevate2026.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 ELEVATE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
