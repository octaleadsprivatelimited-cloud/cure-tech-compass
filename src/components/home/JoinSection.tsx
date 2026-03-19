import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";

const JoinSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="container mx-auto px-5 md:px-4">
      {/* Purple gradient banner */}
      <ScrollAnimate>
        <div className="bg-gradient-vibrant rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative overflow-hidden shadow-elevated">
          {/* Animated glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-lg" />
          <h3 className="relative text-lg md:text-xl font-heading font-bold text-primary-foreground">
            Our Quality, Distribution and<br className="hidden md:block" /> Compliance Strategy
          </h3>
          <Link
            to="/quality"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-heading font-semibold text-sm hover:bg-primary-foreground/15 transition-colors whitespace-nowrap"
          >
            View Quality Page <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Join us section */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        <ScrollAnimate>
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gradient-accent inline-block mb-3">Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Join us,<br /><span className="text-gradient-primary">fuel the future.</span>
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
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background font-heading font-semibold text-sm rounded-lg hover:bg-foreground/90 hover:shadow-lg transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={200}>
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={qualityLab} alt="Pharmaceutical lab" className="w-full h-64 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Floating stat card */}
            <div className="absolute bottom-4 left-4 glass rounded-xl px-5 py-3 shadow-elevated border border-white/20">
              <div className="text-2xl font-heading font-bold text-gradient-primary">1000+</div>
              <div className="text-xs text-muted-foreground">Active Partners</div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default JoinSection;
