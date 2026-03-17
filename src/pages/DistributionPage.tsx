import SectionHeading from "@/components/SectionHeading";
import { Truck, Building2, Heart, Package } from "lucide-react";
import indiaMap from "@/assets/india-map.png";

const features = [
  { icon: Truck, title: "Nationwide Wholesale Distribution", desc: "Our logistics network spans across all 28 states and 8 union territories, ensuring pharmaceutical products reach even the most remote locations." },
  { icon: Building2, title: "Reliable Supply Chain", desc: "Temperature-controlled storage, efficient inventory management, and streamlined logistics for uninterrupted supply." },
  { icon: Heart, title: "Partner Pharmacies & Hospitals", desc: "We serve a vast network of retail pharmacies, hospital chains, clinics, and nursing homes across India." },
  { icon: Package, title: "Bulk Supply Capability", desc: "Equipped to handle large-volume orders with competitive wholesale pricing and flexible delivery schedules." },
];

const DistributionPage = () => (
  <main className="pt-20">
    <section className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Distribution Network</h1>
        <p className="text-primary-foreground/80 max-w-xl">Nationwide pharmaceutical distribution you can rely on.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Pan-India Coverage" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Cure Tech Pharma operates one of the most extensive pharmaceutical distribution networks in India. From our headquarters in Hyderabad, we ensure seamless supply chain operations across the country, connecting manufacturers with healthcare providers efficiently.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { num: "28+", label: "States Covered" },
              { num: "100+", label: "Cities Served" },
              { num: "1000+", label: "Partner Outlets" },
              { num: "24/7", label: "Supply Operations" },
            ].map((s) => (
              <div key={s.label} className="p-4 bg-accent rounded-lg text-center">
                <div className="text-2xl font-display font-bold text-primary">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src={indiaMap} alt="India distribution map" className="max-w-md w-full" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Distribution Capabilities" />
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5 p-8 bg-card rounded-xl shadow-card">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <f.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default DistributionPage;
