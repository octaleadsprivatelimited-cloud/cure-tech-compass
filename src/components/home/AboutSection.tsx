import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => (
  <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
    {/* Full-width background image */}
    <img src={aboutTeam} alt="Cure Tech Pharma team" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-secondary/75" />

    {/* Content card */}
    <div className="relative z-10 container mx-auto px-5 md:px-4 h-full flex items-center justify-end py-16 md:py-24">
      <ScrollAnimate delay={200}>
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg ml-auto shadow-elevated border border-border">
          <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent">About Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-2">
            Innovating<br />
            <span className="text-primary">for healthcare</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-6">
            Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier headquartered in Hyderabad, India. Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 mt-6 text-sm font-heading font-semibold text-primary hover:gap-3 transition-all"
          >
            Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollAnimate>
    </div>
  </section>
);

export default AboutSection;
