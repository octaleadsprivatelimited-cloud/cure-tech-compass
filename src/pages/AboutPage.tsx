import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Award, Shield, Users, Heart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Quality", desc: "Every product meets the highest pharmaceutical standards." },
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with transparency and reliability." },
  { icon: Shield, title: "Compliance", desc: "Strict adherence to all pharmaceutical regulations." },
  { icon: Users, title: "Customer Satisfaction", desc: "Dedicated to exceeding expectations at every touchpoint." },
];

const AboutPage = () => (
  <main>
    {/* Page Banner */}
    <section className="bg-secondary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">About Us</h1>
        <p className="text-secondary-foreground/60 mt-3">Home / About Us</p>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded overflow-hidden">
          <img src={aboutTeam} alt="Cure Tech Pharma team" className="w-full h-auto" />
        </div>
        <div>
          <SectionHeading title="Who" highlight="We Are" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier based in Hyderabad, India. With a strong commitment to quality healthcare, we bridge the gap between pharmaceutical manufacturers and healthcare providers across the nation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy. We serve pharmacies, hospitals, clinics, and healthcare institutions with a diverse range of pharmaceutical products.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-background p-10 rounded border-l-4 border-primary">
          <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide high-quality pharmaceutical products with reliable distribution across India, ensuring every community has access to essential medicines and healthcare solutions.
          </p>
        </div>
        <div className="bg-background p-10 rounded border-l-4 border-accent">
          <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-4">
            <Eye className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become a trusted nationwide pharmaceutical wholesale supplier, setting benchmarks in distribution efficiency, product quality, and customer service excellence.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Our Core" highlight="Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group text-center p-8 border border-border rounded hover:border-primary/30 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <v.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
