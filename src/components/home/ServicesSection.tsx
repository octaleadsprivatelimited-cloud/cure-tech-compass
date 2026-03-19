import { Truck, Package, Shield, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

const services = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states with reliable logistics." },
  { icon: Package, title: "Supply Chain Management", desc: "End-to-end logistics and cold chain management for all product types." },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks and batch-level traceability at every stage." },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, pharmacies and healthcare institutions." },
];

const ServicesSection = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[2px] bg-primary inline-block" />
            Our Services
            <span className="w-8 h-[2px] bg-primary inline-block" />
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Key <span className="text-primary">Services</span>
          </h2>
        </div>
      </ScrollAnimate>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((s, i) => (
          <ScrollAnimate key={s.title} delay={i * 100}>
            <div className="relative p-6 md:p-8 text-center border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full overflow-hidden">
              {/* Hover bg effect */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <s.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-2 text-sm md:text-base transition-colors">{s.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors line-clamp-3">{s.desc}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
