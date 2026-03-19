import { Shield, Truck, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import whyChoosePharma from "@/assets/why-choose-pharma.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Quality",
    desc: "Stringent quality checks and batch-level traceability ensure every product meets the highest safety and efficacy standards.",
  },
  {
    icon: Truck,
    title: "Reliability",
    desc: "Fast and reliable delivery across all Indian states with efficient logistics and cold chain management.",
  },
  {
    icon: Users,
    title: "Accessibility",
    desc: "Serving hospitals, clinics, pharmacies and healthcare institutions across 28+ states with competitive pricing.",
  },
];

const PromiseSection = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    {/* Background image */}
    <img src={whyChoosePharma} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-section-dark/90" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[2px] bg-accent inline-block" />
            Our Promise
            <span className="w-8 h-[2px] bg-accent inline-block" />
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-section-dark leading-tight mt-3">
            Your Trusted{" "}
            <span className="text-accent">Pharmaceutical</span>{" "}
            Distribution{" "}
            <span className="text-accent">Partner</span>
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed mt-6 max-w-xl mx-auto">
            Cure Tech Pharma is committed to delivering quality medicines across India with reliability, competitive pricing, and exceptional service.
          </p>
        </div>
      </ScrollAnimate>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((p, i) => (
          <ScrollAnimate key={p.title} delay={i * 150}>
            <div className="group text-center p-8 md:p-10 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/25 transition-colors">
                <p.icon className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
