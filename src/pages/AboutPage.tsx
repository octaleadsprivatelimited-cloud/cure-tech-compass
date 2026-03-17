import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Target, Eye, Award, Shield, Users, Heart, Linkedin, Mail } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import teamSrinivas from "@/assets/team-srinivas.jpg";
import teamRamana from "@/assets/team-ramana.jpg";
import teamPhani from "@/assets/team-phani.jpg";

const values = [
  { icon: Award, title: "Quality", desc: "Every product meets the highest pharmaceutical standards." },
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with transparency and reliability." },
  { icon: Shield, title: "Compliance", desc: "Strict adherence to all pharmaceutical regulations." },
  { icon: Users, title: "Customer Satisfaction", desc: "Dedicated to exceeding expectations at every touchpoint." },
];

const teamMembers = [
  { name: "Dr. Srinivas K", role: "MBBS", image: teamSrinivas, desc: "Experienced medical professional guiding pharmaceutical quality and operations." },
  { name: "Dr. Ramana Pujari", role: "MBBS, DLO", image: teamRamana, desc: "Specialist in ENT with deep expertise in pharmaceutical healthcare." },
  { name: "Dr. Phani Kumar", role: "MS ENT", image: teamPhani, desc: "Senior ENT surgeon contributing to healthcare product standards and advisory." },
];

const AboutPage = () => (
  <main>
    <PageSEO title="About Us" description="Learn about Cure Tech Pharma – a leading pharmaceutical distributor headquartered in Hyderabad, India. Our mission, vision, and experienced leadership team." path="/about" />
    <section className="bg-secondary py-14 md:py-20 text-center">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">About Us</h1>
        <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">Home / About Us</p>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4 grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        <ScrollAnimate>
          <div className="rounded overflow-hidden">
            <img src={aboutTeam} alt="Cure Tech Pharma team" className="w-full h-48 md:h-auto object-cover rounded" />
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={200}>
          <div>
            <SectionHeading title="Who" highlight="We Are" center={false} />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier based in Hyderabad, India. With a strong commitment to quality healthcare, we bridge the gap between pharmaceutical manufacturers and healthcare providers across the nation.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy. We serve pharmacies, hospitals, clinics, and healthcare institutions with a diverse range of pharmaceutical products.
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-section-alt">
      <div className="container mx-auto px-5 md:px-4 grid md:grid-cols-2 gap-4 md:gap-8">
        <ScrollAnimate>
          <div className="bg-background p-6 md:p-10 rounded border-l-4 border-primary h-full">
            <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              To provide high-quality pharmaceutical products with reliable distribution across India, ensuring every community has access to essential medicines and healthcare solutions.
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={150}>
          <div className="bg-background p-6 md:p-10 rounded border-l-4 border-accent h-full">
            <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              To become a trusted nationwide pharmaceutical wholesale supplier, setting benchmarks in distribution efficiency, product quality, and customer service excellence.
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading title="Our Core" highlight="Values" />
        </ScrollAnimate>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {values.map((v, i) => (
            <ScrollAnimate key={v.title} delay={i * 100}>
              <div className="group text-center p-4 md:p-8 border border-border rounded hover:border-primary/30 hover:shadow-md transition-all h-full">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                  <v.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{v.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-section-alt">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading title="Meet Our" highlight="Team" />
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <ScrollAnimate key={member.name} delay={i * 120}>
              <div className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all h-full">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 md:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-5 text-center">
                  <h3 className="font-heading font-bold text-foreground text-sm md:text-lg">{member.name}</h3>
                  <p className="text-primary text-xs md:text-sm font-semibold mb-1 md:mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden md:block">{member.desc}</p>
                  <div className="flex justify-center gap-3 mt-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
