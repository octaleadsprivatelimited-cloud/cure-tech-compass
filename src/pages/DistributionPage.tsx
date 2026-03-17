import PageSEO from "@/components/PageSEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
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
    <PageSEO title="Distribution Network" description="Cure Tech Pharma's nationwide pharmaceutical distribution network covering 28+ Indian states with reliable logistics and cold chain management." path="/distribution" />
    <section className="bg-secondary py-14 md:py-20 text-center">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">Distribution Network</h1>
        <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">Home / Distribution Network</p>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4 grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        <ScrollAnimate>
          <div>
            <SectionHeading title="Pan-India" highlight="Coverage" center={false} />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Cure Tech Pharma operates one of the most extensive pharmaceutical distribution networks in India. From our headquarters in Hyderabad, we ensure seamless supply chain operations, connecting manufacturers with healthcare providers efficiently.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { num: "28+", label: "States Covered" },
                { num: "100+", label: "Cities Served" },
                { num: "1000+", label: "Partner Outlets" },
                { num: "24/7", label: "Supply Operations" },
              ].map((s, i) => (
                <ScrollAnimate key={s.label} delay={i * 80}>
                  <div className="p-3 md:p-4 bg-muted rounded text-center">
                    <div className="text-xl md:text-2xl font-heading font-bold text-primary">{s.num}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={200}>
          <div className="flex justify-center">
            <img src={indiaMap} alt="India distribution map" className="max-w-xs md:max-w-md w-full" />
          </div>
        </ScrollAnimate>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-section-alt">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading title="Distribution" highlight="Capabilities" />
        </ScrollAnimate>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((f, i) => (
            <ScrollAnimate key={f.title} delay={i * 100}>
              <div className="flex gap-4 md:gap-5 p-5 md:p-8 bg-background rounded border border-border hover:border-primary/30 hover:shadow-md transition-all h-full">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1 md:mb-1.5 text-sm md:text-base">{f.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default DistributionPage;
