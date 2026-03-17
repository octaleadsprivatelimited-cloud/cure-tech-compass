import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-xl font-display font-bold mb-4">Cure Tech Pharma</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Trusted pharmaceutical distributor and wholesale supplier delivering quality medicines across India.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Distribution", path: "/distribution" },
              { label: "Quality", path: "/quality" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <span>+91 9014288588</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <span>info@curetechpharma.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                H.No: 7-1-211/32, 3rd Floor, D.K Road, Ameerpet, Opp. Sonubhai Ammavari Temple, Hyderabad – 500016
              </span>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Monday – Saturday</li>
            <li>9:00 AM – 7:00 PM</li>
            <li className="pt-2">Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-5 text-center text-sm opacity-60">
        © 2025 Cure Tech Pharma. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
