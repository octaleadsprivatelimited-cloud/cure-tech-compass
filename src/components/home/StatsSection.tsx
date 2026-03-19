import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";

const statCards = [
  { dots: [false, false, true], label: "DISTRIBUTION", sublabel: "EXCELLENCE", num: "500+", desc: "Products Distributed" },
  { dots: [false, true, true], label: "NATIONWIDE", sublabel: "IMPACT", num: "28+", desc: "States Covered" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    {/* Clean geometric accent */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.03] translate-y-1/2 -translate-x-1/3" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      {/* Top heading */}
      <div className="flex items-start justify-between mb-14">
        <ScrollAnimate>
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block">
              DISTRIBUTION & EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] font-heading font-bold text-foreground leading-tight mt-3 max-w-xl">
              We seek out, and solve,{" "}
              <span className="text-primary">tough challenges.</span>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {statCards.map((card, idx) => (
          <ScrollAnimate key={card.label} delay={idx * 100}>
            <div className="group bg-card rounded-2xl p-4 md:p-7 flex flex-col justify-between h-full min-h-[200px] md:min-h-[280px] border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-1.5 mb-auto">
                {card.dots.map((active, i) => (
                  <span key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${active ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>
              <div>
                <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider leading-snug mt-6">
                  {card.label}<br />{card.sublabel}
                </p>
                <div className="text-3xl md:text-6xl font-heading font-bold text-primary mt-4 md:mt-6">
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
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          </div>
        </ScrollAnimate>

        {/* Highlight Card */}
        <ScrollAnimate delay={300}>
          <div className="bg-secondary rounded-2xl p-7 flex flex-col justify-between h-full min-h-[280px] text-secondary-foreground relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
            <span className="relative text-xs font-heading font-semibold uppercase tracking-wider opacity-60">
              KEY<br />HIGHLIGHTS
            </span>
            <div className="relative mt-auto">
              <p className="text-lg md:text-xl font-heading font-bold leading-snug">
                Leading pharmaceutical distributor serving 1000+ pharmacies across India
              </p>
              <Link
                to="/about"
                className="group/link inline-flex items-center gap-2 text-sm font-heading font-semibold mt-5 hover:gap-3 transition-all uppercase tracking-wider text-accent"
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
