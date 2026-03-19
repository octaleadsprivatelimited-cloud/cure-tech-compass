import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";
import bgStats from "@/assets/bg-stats.jpg";

const statCards = [
  { dots: [false, false, true], label: "DISTRIBUTION", sublabel: "EXCELLENCE", num: "500+", desc: "Products Distributed" },
  { dots: [false, true, true], label: "NATIONWIDE", sublabel: "IMPACT", num: "28+", desc: "States Covered" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    {/* Background image with overlay */}
    <img src={bgStats} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      {/* Top heading */}
      <div className="flex items-start justify-between mb-14">
        <ScrollAnimate>
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gradient-accent inline-block">
              DISTRIBUTION & EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] font-heading font-bold text-foreground leading-tight mt-3 max-w-xl">
              We seek out, and solve,{" "}
              <span className="text-gradient-primary">tough challenges.</span>
            </h2>
          </div>
        </ScrollAnimate>

        {/* Circular badge */}
        <ScrollAnimate delay={300}>
          <div className="hidden md:flex relative w-28 h-28 flex-shrink-0 animate-float">
            <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 120 120">
              <defs>
                <path id="statsCircle" d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
              </defs>
              <text className="fill-muted-foreground/40 text-[9px] uppercase tracking-[0.3em]" fontFamily="Poppins, sans-serif">
                <textPath href="#statsCircle">Quality • Healthcare • Distribution •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-foreground font-heading font-bold text-[11px] text-center leading-tight">ISO-45001</span>
              <span className="text-muted-foreground text-[9px] font-heading uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </ScrollAnimate>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {statCards.map((card, idx) => (
          <ScrollAnimate key={card.label} delay={idx * 100}>
            <div className="group bg-background/80 backdrop-blur-md rounded-2xl p-7 flex flex-col justify-between h-full min-h-[280px] border border-border/50 hover:shadow-card-hover hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-1.5 mb-auto">
                {card.dots.map((active, i) => (
                  <span key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${active ? "bg-primary glow-primary" : "bg-primary/15"}`} />
                ))}
              </div>
              <div>
                <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider leading-snug mt-6">
                  {card.label}<br />{card.sublabel}
                </p>
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient-primary mt-6">
                  {card.num}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{card.desc}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}

        {/* Image Card */}
        <ScrollAnimate delay={200}>
          <div className="rounded-2xl overflow-hidden h-full min-h-[280px] relative group">
            <img src={qualityLab} alt="Quality lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </ScrollAnimate>

        {/* Highlight Card */}
        <ScrollAnimate delay={300}>
          <div className="bg-gradient-vibrant rounded-2xl p-7 flex flex-col justify-between h-full min-h-[280px] text-primary-foreground relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary-foreground/10 blur-xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-primary-foreground/5 blur-lg" />
            <span className="relative text-xs font-heading font-semibold uppercase tracking-wider opacity-70">
              KEY<br />HIGHLIGHTS
            </span>
            <div className="relative mt-auto">
              <p className="text-lg md:text-xl font-heading font-bold leading-snug">
                Leading pharmaceutical distributor serving 1000+ pharmacies across India
              </p>
              <Link
                to="/about"
                className="group/link inline-flex items-center gap-2 text-sm font-heading font-semibold mt-5 hover:gap-3 transition-all uppercase tracking-wider"
              >
                Learn More <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default StatsSection;
