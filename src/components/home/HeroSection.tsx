import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
    {/* Fallback images for mobile / while video loads */}
    <img src={heroMobile} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" />
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
    {/* Background video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover hidden md:block z-[1]"
      poster={heroBg}
    >
      <source src={heroVideoAsset.url} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-hero-overlay z-[2]" />




    <div className="relative z-10 text-center px-5 md:px-4 max-w-4xl animate-fade-up">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-6">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-heading text-primary-foreground/80 tracking-wider uppercase">Trusted Since 2014</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.08] tracking-tight">
        Quality Medicines –
        <span className="block mt-2 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
          Trusted Healthcare
        </span>
      </h1>
      <p className="text-sm md:text-lg text-primary-foreground/60 mt-6 md:mt-8 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
        Cure Tech Pharma provides reliable wholesale pharmaceutical distribution delivering quality medicines and healthcare products across India.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 border border-primary-foreground/20 text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <span className="text-[10px] font-heading uppercase tracking-[0.25em] text-primary-foreground/40">scroll</span>
      <div className="w-[1px] h-8 bg-gradient-to-b from-primary-foreground/40 to-transparent animate-scroll-bounce" />
    </div>

    {/* Floating ISO badge with glow */}
    <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-16 z-10 hidden lg:flex flex-col items-center justify-center">
      <div className="relative w-28 h-28 animate-pulse-glow rounded-full">
        <svg className="w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 120 120">
          <defs>
            <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text className="fill-primary-foreground/30 text-[11px] uppercase tracking-[0.3em]" fontFamily="Poppins, sans-serif">
            <textPath href="#circlePath">
              Quality • Distribution • Healthcare •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-primary-foreground font-heading font-bold text-[11px] leading-tight text-center">
            ISO<br />CERTIFIED
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
