import { Link } from "react-router-dom";
import { Truck, Package, Shield, Users, ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import whyChoosePharma from "@/assets/why-choose-pharma.jpg";

const verticals = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states with reliable logistics and temperature-controlled delivery." },
  { icon: Package, title: "Supply Chain Management", desc: "End-to-end logistics and cold chain management for all product types ensuring quality at every stage." },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks and batch-level traceability at every stage of the supply chain." },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, pharmacies and healthcare institutions with dedicated support." },
];

const VerticalsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
        {/* Left side text */}
        <div className="lg:col-span-3">
          <ScrollAnimate>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              Our Business<br />Verticals
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              We excel in distributing and managing a diverse range of pharmaceutical formulations across various therapeutic areas, serving healthcare providers nationwide.
            </p>
          </ScrollAnimate>
        </div>

        {/* Right side — zigzag cards over background image */}
        <div className="lg:col-span-9 relative min-h-[600px]">
          {/* Background image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden hidden lg:block">
            <img src={whyChoosePharma} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          </div>

          {/* Zigzag staggered cards — like Mankind */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {verticals.map((v, i) => (
              <ScrollAnimate key={v.title} delay={i * 120}>
                <div
                  className={`bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow ${
                    i % 2 === 1 ? "md:mt-16" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{v.title}</h3>
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
