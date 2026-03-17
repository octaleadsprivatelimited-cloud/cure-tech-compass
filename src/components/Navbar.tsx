import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "PRODUCTS", path: "/products" },
  { label: "DISTRIBUTION", path: "/distribution" },
  { label: "QUALITY", path: "/quality" },
  { label: "CONTACT US", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-topbar text-topbar hidden md:block">
        <div className="container mx-auto flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              H.No: 7-1-211/32, 3rd Floor, D.K Road, Ameerpet, Hyderabad – 500016
            </span>
            <a href="mailto:info@curetechpharma.in" className="flex items-center gap-1.5 hover:opacity-80">
              <Mail className="h-3 w-3" />
              info@curetechpharma.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919014288588" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3 w-3" />
              +91 9014288588
            </a>
            <a href="#" className="hover:opacity-80"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Cure Tech Pharma" className="h-20 lg:h-28 w-auto -my-4 lg:-my-6" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-[13px] font-heading font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 text-[13px] font-heading font-semibold tracking-wide bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              ENQUIRE NOW
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-heading font-semibold tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mx-4 mt-2 px-6 py-3 text-sm text-center font-heading font-semibold bg-primary text-primary-foreground rounded"
              >
                ENQUIRE NOW
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
