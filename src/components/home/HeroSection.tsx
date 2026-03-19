import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
    <img src={heroMobile} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" />
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="absolute inset-0 bg-hero-overlay" />

    <div className="relative z-10 text-center px-5 md:px-4 max-w-4xl animate-fade-up">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] tracking-tight">
        Quality Medicines –{" "}
        <span className="block mt-1">Trusted Healthcare</span>
      </h1>
      <p className="text-sm md:text-lg text-primary-foreground/70 mt-6 md:mt-8 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
        Cure Tech Pharma provides reliable wholesale pharmaceutical distribution delivering quality medicines and healthcare products across India.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
        >
          Know More <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary-foreground/10 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60">
      <span className="text-[11px] font-heading uppercase tracking-[0.2em]">Scroll</span>
      <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
    </div>

    {/* Floating badge */}
    <div className="absolute bottom-8 right-6 md:right-12 z-10 hidden md:flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg px-5 py-3">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <span className="text-accent font-heading font-bold text-sm">✓</span>
      </div>
      <div>
        <div className="text-primary-foreground font-heading font-bold text-sm">ISO Certified</div>
        <div className="text-primary-foreground/60 text-xs">Quality Standards</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
