import ScrollAnimate from "@/components/ScrollAnimate";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => (
  <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
    {/* Full-width background image */}
    <img src={aboutTeam} alt="Cure Tech Pharma team" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

    {/* Frosted glass card on the right — like Mankind's "Innovating for the world" */}
    <div className="relative z-10 container mx-auto px-5 md:px-4 h-full flex items-center justify-end py-16 md:py-24">
      <ScrollAnimate delay={200}>
        <div className="bg-background/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 max-w-lg ml-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            Innovating<br />
            for healthcare
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-6">
            Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier headquartered in Hyderabad, India. Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy.
          </p>
        </div>
      </ScrollAnimate>
    </div>
  </section>
);

export default AboutSection;
