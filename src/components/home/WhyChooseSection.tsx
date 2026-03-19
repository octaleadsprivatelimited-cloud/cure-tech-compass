import { Link } from "react-router-dom";
import { Clock, TrendingUp, Award, Headphones, ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const whyUsFeatures = [
  { icon: Clock, title: "Timely Delivery", desc: "Fast and reliable delivery across all Indian states with efficient logistics." },
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Best wholesale rates for bulk pharmaceutical orders." },
  { icon: Award, title: "Quality Assured", desc: "Certified products from licensed manufacturers with batch traceability." },
  { icon: Headphones, title: "Dedicated Support", desc: "Round-the-clock customer support for all partner needs." },
];

const WhyChooseSection = () => (
  <section className="py-20 md:py-32 bg-section-alt">
    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[2px] bg-accent inline-block" />
            Why Choose Us?
            <span className="w-8 h-[2px] bg-accent inline-block" />
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-3">
            Why Partner With{" "}
            <span className="text-primary">Cure Tech Pharma</span>
          </h2>
        </div>
      </ScrollAnimate>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {whyUsFeatures.map((f, i) => (
          <ScrollAnimate key={f.title} delay={i * 100}>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-sm md:text-lg mb-2">{f.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded hover:bg-accent/90 transition-colors"
        >
          Become a Partner <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
