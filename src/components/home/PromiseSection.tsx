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
  <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
    {/* Subtle geometric shapes */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-primary-foreground/[0.06]" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-primary-foreground/[0.06]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[100px]" />
    </div>

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block">
            OUR PROMISE
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground leading-tight mt-4">
            Leave no citizen behind in the{" "}
            <span className="block text-accent">journey towards a healthier nation.</span>
          </h2>
        </div>
      </ScrollAnimate>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
        {pillars.map((p, i) => (
          <ScrollAnimate key={p.title} delay={i * 150}>
            <div className="group bg-secondary-foreground/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden h-full border border-secondary-foreground/[0.08] hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
              {/* Top section with icon */}
              <div className="relative px-7 pt-8 pb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors duration-300">
                  <p.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground">{p.title}</h3>
              </div>

              {/* Bottom description */}
              <div className="px-7 py-6 border-t border-secondary-foreground/[0.08]">
                <p className="text-sm text-secondary-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
