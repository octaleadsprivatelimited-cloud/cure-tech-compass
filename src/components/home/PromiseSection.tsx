import { Shield, Truck, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import bgPromise from "@/assets/bg-promise.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Quality",
    desc: "Our non-compromising approach to quality ensures that we are constantly endeavoring to achieve and maintain the highest quality standards in the pharmaceutical industry in India.",
    gradient: "from-primary to-blue-600",
  },
  {
    icon: Truck,
    title: "Affordability",
    desc: "Staying true to our founding principles of being a price disruptor, we deliver affordable medication that meets the healthcare needs of communities across India.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Accessibility",
    desc: "With our pioneering use of supply chains and distribution setup, we ensure accessibility of quality medicines even in Tier II, Tier III cities and rural markets.",
    gradient: "from-accent to-emerald-600",
  },
];

const PromiseSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    {/* Dark background image */}
    <img src={bgPromise} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-section-dark/80" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gradient-accent inline-block">
            OUR PROMISE
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-section-dark leading-tight mt-4">
            Leave no citizen behind in the{" "}
            <span className="block text-gradient-accent">journey towards a healthier nation.</span>
          </h2>
        </div>
      </ScrollAnimate>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p, i) => (
          <ScrollAnimate key={p.title} delay={i * 150}>
            <div className="group bg-primary-foreground/5 backdrop-blur-md rounded-2xl overflow-hidden h-full border border-primary-foreground/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
              {/* Top section with icon */}
              <div className="relative px-7 pt-8 pb-6 overflow-hidden">
                <div className="absolute top-3 right-6 w-20 h-20 rounded-full bg-primary-foreground/[0.04] group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{p.title}</h3>
                </div>
              </div>

              {/* Bottom description */}
              <div className="px-7 py-6 border-t border-primary-foreground/10">
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
