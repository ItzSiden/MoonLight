import { Facebook, Github, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MoonLight</h3>
            <p className="text-sm text-gray-300">
              Join the ultimate Minecraft experience in Bangladesh. Our server offers unique features,
              active community, and regular events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/store" className="text-sm hover:text-primary transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link to="/vote" className="text-sm hover:text-primary transition-colors">
                  Vote
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-sm hover:text-primary transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link to="/forums" className="text-sm hover:text-primary transition-colors">
                  Forums
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">support@moonlight.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+880 123 456 789</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MoonLight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;