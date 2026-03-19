import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import qualityLab from "@/assets/quality-lab.jpg";

const JoinSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-5 md:px-4">
      {/* ESG-style purple gradient banner — like Mankind */}
      <ScrollAnimate>
        <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <h3 className="text-lg md:text-xl font-heading font-bold text-primary-foreground">
            Our Quality, Distribution and<br className="hidden md:block" /> Compliance Strategy
          </h3>
          <Link
            to="/quality"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary-foreground/40 text-primary-foreground rounded-full font-heading font-semibold text-sm hover:bg-primary-foreground/10 transition-colors whitespace-nowrap"
          >
            View Quality Page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Join us / Partner section — like Mankind's "Join us, fuel the future" */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <ScrollAnimate>
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Join us,<br />fuel the future.
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
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background font-heading font-semibold text-sm rounded hover:bg-foreground/90 transition-colors uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={200}>
          <div className="rounded-2xl overflow-hidden">
            <img src={qualityLab} alt="Pharmaceutical lab" className="w-full h-64 md:h-[400px] object-cover" loading="lazy" />
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default JoinSection;
