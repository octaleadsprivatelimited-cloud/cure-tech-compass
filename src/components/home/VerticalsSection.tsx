import { Truck, Package, Shield, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const verticals = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states with reliable logistics and temperature-controlled delivery." },
  { icon: Package, title: "Supply Chain Management", desc: "End-to-end logistics and cold chain management for all product types ensuring quality at every stage." },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks and batch-level traceability at every stage of the supply chain." },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, pharmacies and healthcare institutions with dedicated support." },
];

const VerticalsSection = () => (
  <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
    {/* Clean diagonal accent */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
        {/* Left side */}
        <div className="lg:col-span-3">
          <ScrollAnimate>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block mb-3">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Our Business<br /><span className="text-primary">Verticals</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                We excel in distributing and managing a diverse range of pharmaceutical formulations across various therapeutic areas, serving healthcare providers nationwide.
              </p>
              <div className="w-12 h-1 bg-primary rounded-full mt-6" />
            </div>
          </ScrollAnimate>
        </div>

        {/* Right side — zigzag cards */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {verticals.map((v, i) => (
              <ScrollAnimate key={v.title} delay={i * 120}>
                <div
                  className={`group bg-card rounded-xl border border-border p-6 hover:shadow-elevated hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${
                    i % 2 === 1 ? "md:mt-16" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VerticalsSection;
