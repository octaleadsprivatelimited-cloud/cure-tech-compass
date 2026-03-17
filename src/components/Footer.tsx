import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import pharmaBg from "@/assets/footer-pharma-bg.png";
import whatsappIcon from "@/assets/whatsapp.svg";

const CollapsibleSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-base font-heading font-semibold py-3 border-b border-border"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="py-3">{children}</div>}
    </div>
  );
};

const Footer = () => (
  <footer className="bg-background text-foreground relative overflow-hidden">
    {/* Background illustration */}
    <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
      <img src={pharmaBg} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="container mx-auto px-4 py-14 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 gap-y-0 md:gap-y-10">
        {/* Company */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Cure Tech Pharma" className="h-14 w-14 rounded-full shadow-md ring-2 ring-primary/20 p-0.5" />
            <h3 className="text-xl font-heading font-extrabold tracking-tight">
              <span className="text-primary">Cure Tech</span>{" "}
              <span className="text-accent">Pharma</span>
            </h3>
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
            <a
              href="https://wa.me/919014288588?text=Hello%20Cure%20Tech%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-primary-foreground/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links - collapsible on mobile */}
        <div>
          <CollapsibleSection title="Quick Links">
            <ul className="space-y-2.5 text-sm opacity-75">
              {["Home|/", "About Us|/about", "Products|/products", "Distribution|/distribution", "Quality|/quality", "Contact|/contact"].map((l) => {
                const [label, path] = l.split("|");
                return <li key={path}><Link to={path} className="hover:opacity-100 hover:underline transition">{label}</Link></li>;
              })}
            </ul>
          </CollapsibleSection>
          <div className="hidden md:block">
            <h4 className="text-base font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-75">
              {["Home|/", "About Us|/about", "Products|/products", "Distribution|/distribution", "Quality|/quality", "Contact|/contact"].map((l) => {
                const [label, path] = l.split("|");
                return <li key={path}><Link to={path} className="hover:opacity-100 hover:underline transition">{label}</Link></li>;
              })}
            </ul>
          </div>
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

        {/* Hours - hidden on mobile */}
        <div className="hidden md:block">
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
        <span className="text-secondary font-bold opacity-100">
          Developed by{" "}
          <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(142,55%,30%)] font-bold underline hover:opacity-80 transition">
            Octaleads Pvt Ltd
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;