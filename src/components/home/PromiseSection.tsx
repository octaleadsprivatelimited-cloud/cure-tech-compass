import { Shield, Truck, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const pillars = [
  {
    icon: Shield,
    title: "Quality",
    desc: "Our non-compromising approach to quality ensures that we are constantly endeavoring to achieve and maintain the highest quality standards in the pharmaceutical industry in India.",
  },
  {
    icon: Truck,
    title: "Affordability",
    desc: "Staying true to our founding principles of being a price disruptor, we deliver affordable medication that meets the healthcare needs of communities across India.",
  },
  {
    icon: Users,
    title: "Accessibility",
    desc: "With our pioneering use of supply chains and distribution setup, we ensure accessibility of quality medicines even in Tier II, Tier III cities and rural markets.",
  },
];

const PromiseSection = () => (
  <section className="py-20 md:py-28 bg-section-alt">
    <div className="container mx-auto px-5 md:px-4">
      {/* Centered heading — like Mankind */}
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[hsl(190,90%,50%)]">
            OUR PROMISE
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-4">
            Leave no citizen behind in the{" "}
            <span className="block">journey towards a healthier nation.</span>
          </h2>
        </div>
      </ScrollAnimate>

      {/* 3 pillar cards — matching Mankind layout: icon circle + title + separator + description */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p, i) => (
          <ScrollAnimate key={p.title} delay={i * 150}>
            <div className="bg-background rounded-2xl overflow-hidden h-full">
              {/* Top section with decorative circles and icon */}
              <div className="relative bg-section-alt px-7 pt-8 pb-6 overflow-hidden">
                {/* Decorative circles — like Mankind's bubble graphics */}
                <div className="absolute top-2 right-4 w-16 h-16 rounded-full bg-primary/5" />
                <div className="absolute top-8 right-12 w-10 h-10 rounded-full bg-primary/8" />
                <div className="absolute -top-2 right-20 w-8 h-8 rounded-full bg-primary/4" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                    <p.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{p.title}</h3>
                </div>
              </div>

              {/* Bottom description with top border separator */}
              <div className="px-7 py-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
