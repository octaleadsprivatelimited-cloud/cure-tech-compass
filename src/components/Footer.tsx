import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import pharmaBg from "@/assets/footer-pharma-bg.png";

const Footer = () => (
  <footer className="bg-background text-foreground relative overflow-hidden">
    {/* Background illustration */}
    <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
      <img src={pharmaBg} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="container mx-auto px-4 py-14 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Cure Tech Pharma" className="h-12 w-12 rounded-full bg-primary-foreground/10 p-0.5" />
            <h3 className="text-lg font-heading font-bold">Cure Tech Pharma</h3>
          </div>
          <p className="text-sm opacity-75 leading-relaxed mb-5">
            Trusted pharmaceutical distributor and wholesale supplier delivering quality medicines and healthcare products across India.
          </p>
          <div className="flex gap-2">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm opacity-75">
            {["Home|/", "About Us|/about", "Products|/products", "Distribution|/distribution", "Quality|/quality", "Contact|/contact"].map((l) => {
              const [label, path] = l.split("|");
              return <li key={path}><Link to={path} className="hover:opacity-100 hover:underline transition">{label}</Link></li>;
            })}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-heading font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-75">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+919014288588">+91 9014288588</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:info@curetechpharma.in">info@curetechpharma.in</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>H.No: 7-1-211/32, 3rd Floor, D.K Road, Ameerpet, Hyderabad – 500016</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-base font-heading font-semibold mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm opacity-75">
            <li>Monday – Saturday</li>
            <li>9:00 AM – 7:00 PM</li>
            <li className="pt-1">Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 relative z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50">
        <span>© 2025 Cure Tech Pharma. All Rights Reserved.</span>
        <span>
          Developed by{" "}
          <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition">
            Octaleads Pvt Ltd
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
