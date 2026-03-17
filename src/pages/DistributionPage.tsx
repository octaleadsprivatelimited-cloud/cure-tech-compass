import SectionHeading from "@/components/SectionHeading";
import { Truck, Building2, Heart, Package } from "lucide-react";
import indiaMap from "@/assets/india-map.png";

const features = [
  { icon: Truck, title: "Nationwide Wholesale Distribution", desc: "Our logistics network spans across all 28 states and 8 union territories." },
  { icon: Building2, title: "Reliable Supply Chain", desc: "Temperature-controlled storage, efficient inventory management, and streamlined logistics." },
  { icon: Heart, title: "Partner Pharmacies & Hospitals", desc: "We serve a vast network of retail pharmacies, hospital chains, and clinics." },
  { icon: Package, title: "Bulk Supply Capability", desc: "Equipped to handle large-volume orders with competitive wholesale pricing." },
];

const DistributionPage = () => (
  <main>
    <section className="bg-secondary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Distribution Network</h1>
        <p className="text-secondary-foreground/60 mt-3">Home / Distribution Network</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading title="Pan-India" highlight="Coverage" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cure Tech Pharma operates one of the most extensive pharmaceutical distribution networks in India. From our headquarters in Hyderabad, we ensure seamless supply chain operations, connecting manufacturers with healthcare providers efficiently.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "28+", label: "States Covered" },
              { num: "100+", label: "Cities Served" },
              { num: "1000+", label: "Partner Outlets" },
              { num: "24/7", label: "Supply Operations" },
            ].map((s) => (
              <div key={s.label} className="p-4 bg-muted rounded text-center">
                <div className="text-2xl font-heading font-bold text-primary">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src={indiaMap} alt="India distribution map" className="max-w-md w-full" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <SectionHeading title="Distribution" highlight="Capabilities" />
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5 p-8 bg-background rounded border border-border hover:border-primary/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5">{f.title}</h3>
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
