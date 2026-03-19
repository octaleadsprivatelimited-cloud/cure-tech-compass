import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const statCards = [
  { dots: [false, false, true], label: "DISTRIBUTION", sublabel: "EXCELLENCE", num: "500+", desc: "Products Distributed" },
  { dots: [false, true, true], label: "NATIONWIDE", sublabel: "IMPACT", num: "28+", desc: "States Covered" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-5 md:px-4">
      {/* Top: subtitle + heading + ISO badge */}
      <div className="flex items-start justify-between mb-14">
        <ScrollAnimate>
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[hsl(190,90%,50%)]">
              DISTRIBUTION & EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] font-heading font-bold text-foreground leading-tight mt-3 max-w-xl">
              We seek out, and solve, tough challenges.
            </h2>
          </div>
        </ScrollAnimate>

        {/* Circular badge like Mankind's ISO badge */}
        <ScrollAnimate delay={300}>
          <div className="hidden md:flex relative w-28 h-28 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <defs>
                <path id="statsCircle" d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
              </defs>
              <text className="fill-muted-foreground/60 text-[9px] uppercase tracking-[0.3em]" fontFamily="Poppins, sans-serif">
                <textPath href="#statsCircle">
                  Quality • Healthcare • Distribution •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-foreground font-heading font-bold text-[11px] text-center leading-tight">
                ISO-45001
              </span>
              <span className="text-muted-foreground text-[9px] font-heading uppercase tracking-wider">
                Certified
              </span>
            </div>
          </div>
        </ScrollAnimate>
      </div>

      {/* Cards grid — 2 stat cards + image + highlight card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Stat Card 1 */}
        <ScrollAnimate delay={0}>
          <div className="bg-section-alt rounded-2xl p-7 flex flex-col justify-between h-full min-h-[260px]">
            <div className="flex gap-1.5 mb-auto">
              {statCards[0].dots.map((active, i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${active ? "bg-primary" : "bg-primary/20"}`} />
              ))}
            </div>
            <div>
              <p className="text-xs font-heading font-semibold text-foreground uppercase tracking-wider leading-snug mt-6">
                {statCards[0].label}<br />{statCards[0].sublabel}
              </p>
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-6">
                {statCards[0].num}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{statCards[0].desc}</p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Stat Card 2 */}
        <ScrollAnimate delay={100}>
          <div className="bg-section-alt rounded-2xl p-7 flex flex-col justify-between h-full min-h-[260px]">
            <div className="flex gap-1.5 mb-auto">
              {statCards[1].dots.map((active, i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${active ? "bg-primary" : "bg-primary/20"}`} />
              ))}
            </div>
            <div>
              <p className="text-xs font-heading font-semibold text-foreground uppercase tracking-wider leading-snug mt-6">
                {statCards[1].label}<br />{statCards[1].sublabel}
              </p>
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-6">
                {statCards[1].num}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{statCards[1].desc}</p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Image Card */}
        <ScrollAnimate delay={200}>
          <div className="rounded-2xl overflow-hidden h-full min-h-[260px]">
            <img src={qualityLab} alt="Quality lab" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </ScrollAnimate>

        {/* Highlight Card — purple gradient like Mankind */}
        <ScrollAnimate delay={300}>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-7 flex flex-col justify-between h-full min-h-[260px] text-primary-foreground">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider opacity-80">
              KEY<br />HIGHLIGHTS
            </span>
            <div className="mt-auto">
              <p className="text-lg md:text-xl font-heading font-bold leading-snug">
                Leading pharmaceutical distributor serving 1000+ pharmacies across India
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold mt-5 hover:gap-3 transition-all uppercase tracking-wider"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default StatsSection;
