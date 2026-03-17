import SectionHeading from "@/components/SectionHeading";
import { Shield, Thermometer, FileCheck, CheckCircle } from "lucide-react";
import qualityLab from "@/assets/quality-lab.jpg";

const standards = [
  { icon: Shield, title: "Quality Assurance Standards", desc: "Every product undergoes rigorous quality checks before distribution. We maintain batch-level traceability and work only with WHO-GMP certified manufacturers.", points: ["Batch verification", "Expiry management", "Product authentication", "Quality audits"] },
  { icon: Thermometer, title: "Storage & Handling", desc: "Our warehouses maintain pharmaceutical-grade storage conditions with temperature and humidity controls.", points: ["Temperature-controlled storage", "Cold chain logistics", "FIFO inventory management", "Proper segregation"] },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Full compliance with CDSCO regulations, Drug & Cosmetics Act, and all applicable pharmaceutical laws.", points: ["Drug license compliance", "GST compliant", "Proper documentation", "Regular audits"] },
  { icon: CheckCircle, title: "Trusted Sourcing", desc: "We source exclusively from licensed and reputed pharmaceutical manufacturers with proven track records.", points: ["Verified manufacturers", "Licensed suppliers", "Brand authenticity", "Supply chain transparency"] },
];

const QualityPage = () => (
  <main className="pt-20">
    <section className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Quality & Compliance</h1>
        <p className="text-primary-foreground/80 max-w-xl">Our commitment to pharmaceutical excellence and regulatory adherence.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={qualityLab} alt="Quality control laboratory" className="w-full h-auto" />
        </div>
        <div>
          <SectionHeading title="Our Quality Promise" center={false} />
          <p className="text-muted-foreground leading-relaxed">
            At Cure Tech Pharma, quality is not just a standard — it's our foundation. We implement comprehensive quality management systems that ensure every pharmaceutical product we distribute meets the highest standards of safety, efficacy, and purity. Our dedicated quality team oversees every aspect of the supply chain.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Standards" subtitle="Comprehensive quality framework ensuring excellence at every step" />
        <div className="grid md:grid-cols-2 gap-8">
          {standards.map((s) => (
            <div key={s.title} className="p-8 bg-card rounded-2xl shadow-card">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                <s.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default QualityPage;
