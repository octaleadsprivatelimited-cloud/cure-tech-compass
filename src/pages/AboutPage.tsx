import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Quality", desc: "We ensure every product meets the highest pharmaceutical standards." },
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with transparency and reliability." },
  { icon: Shield, title: "Compliance", desc: "Strict adherence to all pharmaceutical regulations and guidelines." },
  { icon: Users, title: "Customer Satisfaction", desc: "Dedicated to exceeding expectations at every touchpoint." },
];

const AboutPage = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/80 max-w-xl">Learn about our mission, values, and commitment to healthcare.</p>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Who We Are" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier based in Hyderabad, India. With a strong commitment to quality healthcare, we bridge the gap between pharmaceutical manufacturers and healthcare providers across the nation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy. We serve pharmacies, hospitals, clinics, and healthcare institutions with a diverse range of pharmaceutical products.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={aboutTeam} alt="Cure Tech Pharma team" className="w-full h-auto" />
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="p-10 bg-card rounded-2xl shadow-card border-l-4 border-primary">
          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
            <Target className="h-7 w-7 text-accent-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide high-quality pharmaceutical products with reliable distribution across India, ensuring every community has access to essential medicines and healthcare solutions.
          </p>
        </div>
        <div className="p-10 bg-card rounded-2xl shadow-card border-l-4 border-secondary">
          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
            <Eye className="h-7 w-7 text-accent-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become a trusted nationwide pharmaceutical wholesale supplier, setting benchmarks in distribution efficiency, product quality, and customer service excellence.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group p-8 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                <v.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
