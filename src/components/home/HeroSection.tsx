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
        <span className="block mt-2">Trusted Healthcare</span>
      </h1>
      <p className="text-sm md:text-lg text-primary-foreground/70 mt-6 md:mt-8 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
        Cure Tech Pharma provides reliable wholesale pharmaceutical distribution delivering quality medicines and healthcare products across India.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* Scroll indicator — like Mankind */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/50">
      <span className="text-[10px] font-heading uppercase tracking-[0.25em]">scroll</span>
      <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
    </div>

    {/* Circular ISO badge — like Mankind's rotating text badge */}
    <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-16 z-10 hidden lg:flex flex-col items-center justify-center">
      <div className="relative w-28 h-28">
        {/* Rotating circular text */}
        <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 120 120">
          <defs>
            <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text className="fill-primary-foreground/40 text-[11px] uppercase tracking-[0.3em]" fontFamily="Poppins, sans-serif">
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
