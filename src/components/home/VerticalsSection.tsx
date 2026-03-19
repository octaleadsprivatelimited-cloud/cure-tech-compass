import { Truck, Package, Shield, Users } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import bgVerticals from "@/assets/bg-verticals.jpg";

const verticals = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states with reliable logistics and temperature-controlled delivery.", gradient: "from-primary to-blue-500" },
  { icon: Package, title: "Supply Chain Management", desc: "End-to-end logistics and cold chain management for all product types ensuring quality at every stage.", gradient: "from-violet-500 to-purple-500" },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks and batch-level traceability at every stage of the supply chain.", gradient: "from-accent to-teal-500" },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, pharmacies and healthcare institutions with dedicated support.", gradient: "from-orange-500 to-rose-500" },
];

const VerticalsSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    {/* Background image */}
    <img src={bgVerticals} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />

    <div className="relative z-10 container mx-auto px-5 md:px-4">
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
        {/* Left side */}
        <div className="lg:col-span-3">
          <ScrollAnimate>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gradient-accent inline-block mb-3">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Our Business<br /><span className="text-gradient-primary">Verticals</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                We excel in distributing and managing a diverse range of pharmaceutical formulations across various therapeutic areas, serving healthcare providers nationwide.
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
            </div>
          </ScrollAnimate>
        </div>

        {/* Right side — zigzag cards */}
        <div className="lg:col-span-9 relative min-h-[600px]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {verticals.map((v, i) => (
              <ScrollAnimate key={v.title} delay={i * 120}>
                <div
                  className={`group bg-background/80 backdrop-blur-md rounded-xl border border-border/50 p-6 shadow-sm hover:shadow-card-hover hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${
                    i % 2 === 1 ? "md:mt-16" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <v.icon className="h-5 w-5 text-primary-foreground" />
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
