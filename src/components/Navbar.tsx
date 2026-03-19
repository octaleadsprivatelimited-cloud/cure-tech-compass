import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "PRODUCTS", path: "/products" },
  { label: "DISTRIBUTION", path: "/distribution" },
  { label: "QUALITY", path: "/quality" },
  { label: "CONTACT US", path: "/contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const, staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const } },
};

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
            <a href="tel:+919440376180" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3 w-3" />
              +91 9440376180
            </a>
            <a href="#" className="hover:opacity-80"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Cure Tech Pharma" className="h-12 lg:h-16 w-auto" />
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
            <a
              href="https://wa.me/919014288588?text=Hello%20Cure%20Tech%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 text-[13px] font-heading font-semibold tracking-wide bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              ENQUIRE NOW
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 z-50" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu - absolute overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Menu panel */}
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="flex flex-col px-6 py-5 gap-0">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block py-3.5 text-[17px] font-normal tracking-[-0.01em] border-b border-border/40 transition-colors ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif" }}
                    >
                      {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <a
                    href="https://wa.me/919014288588?text=Hello%20Cure%20Tech%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block mt-4 px-6 py-3 text-[15px] text-center font-medium bg-primary text-primary-foreground rounded-full"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif" }}
                  >
                    Enquire Now
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;