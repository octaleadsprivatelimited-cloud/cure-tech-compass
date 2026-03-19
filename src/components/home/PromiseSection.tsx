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
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block">
            OUR PROMISE
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-4">
            Leave no citizen behind in the{" "}
            <span className="block text-accent">journey towards a healthier nation.</span>
          </h2>
        </div>
      </ScrollAnimate>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p, i) => (
          <ScrollAnimate key={p.title} delay={i * 150}>
            <div className="group relative rounded-2xl border border-border bg-background p-6 md:p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <p.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
