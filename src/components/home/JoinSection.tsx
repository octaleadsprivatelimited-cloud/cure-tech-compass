import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";

const JoinSection = () => (
  <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
    {/* Subtle accent */}
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] translate-x-1/3 translate-y-1/3" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      {/* Banner */}
      <ScrollAnimate>
        <div className="bg-secondary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <h3 className="text-lg md:text-xl font-heading font-bold text-secondary-foreground">
            Our Quality, Distribution and<br className="hidden md:block" /> Compliance Strategy
          </h3>
          <Link
            to="/quality"
            className="group inline-flex items-center gap-2 px-6 py-2.5 border-2 border-secondary-foreground/20 text-secondary-foreground rounded-full font-heading font-semibold text-sm hover:bg-secondary-foreground/10 transition-colors whitespace-nowrap"
          >
            View Quality Page <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Join us section */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        <ScrollAnimate>
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block mb-3">Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Join us,<br /><span className="text-primary">fuel the future.</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-5 mb-6">
              Cure Tech Pharma is not just a distributor. It's a frontier of healthcare innovation. And by partnering with us, you will be one of the leaders shaping a healthier India.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Pan-India distribution network across 28+ states",
                "Competitive pricing and bulk order benefits",
                "500+ quality assured pharmaceutical products",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-accent-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={200}>
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={qualityLab} alt="Pharmaceutical lab" className="w-full h-64 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-card rounded-xl px-5 py-3 shadow-elevated border border-border">
              <div className="text-2xl font-heading font-bold text-primary">1000+</div>
              <div className="text-xs text-muted-foreground">Active Partners</div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default JoinSection;
