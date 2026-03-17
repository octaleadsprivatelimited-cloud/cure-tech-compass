import SectionHeading from "@/components/SectionHeading";
import { Shield, Thermometer, FileCheck, CheckCircle2 } from "lucide-react";
import qualityLab from "@/assets/quality-lab.jpg";

const standards = [
  { icon: Shield, title: "Quality Assurance Standards", desc: "Rigorous quality checks and batch-level traceability. We work only with WHO-GMP certified manufacturers.", points: ["Batch verification", "Expiry management", "Product authentication", "Quality audits"] },
  { icon: Thermometer, title: "Storage & Handling", desc: "Pharmaceutical-grade storage conditions with temperature and humidity controls.", points: ["Temperature-controlled storage", "Cold chain logistics", "FIFO inventory management", "Proper segregation"] },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Full compliance with CDSCO regulations, Drug & Cosmetics Act, and applicable laws.", points: ["Drug license compliance", "GST compliant", "Proper documentation", "Regular audits"] },
  { icon: CheckCircle2, title: "Trusted Sourcing", desc: "Exclusive sourcing from licensed and reputed pharmaceutical manufacturers.", points: ["Verified manufacturers", "Licensed suppliers", "Brand authenticity", "Supply chain transparency"] },
];

const QualityPage = () => (
  <main>
    <section className="bg-secondary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Quality & Compliance</h1>
        <p className="text-secondary-foreground/60 mt-3">Home / Quality & Compliance</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded overflow-hidden">
          <img src={qualityLab} alt="Quality control laboratory" className="w-full h-auto" />
        </div>
        <div>
          <SectionHeading title="Our Quality" highlight="Promise" center={false} />
          <p className="text-muted-foreground leading-relaxed">
            At Cure Tech Pharma, quality is not just a standard — it's our foundation. We implement comprehensive quality management systems that ensure every pharmaceutical product we distribute meets the highest standards of safety, efficacy, and purity. Our dedicated quality team oversees every aspect of the supply chain.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-alt">
      <div className="container mx-auto">
        <SectionHeading title="Our" highlight="Standards" />
        <div className="grid md:grid-cols-2 gap-6">
          {standards.map((s) => (
            <div key={s.title} className="p-8 bg-background rounded border border-border">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
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
