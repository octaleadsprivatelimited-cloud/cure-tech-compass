import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <ScrollAnimate>
          <div className="relative">
            <img src={aboutTeam} alt="Cure Tech Pharma team" className="w-full h-64 md:h-[450px] object-cover rounded-xl" loading="lazy" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground shadow-lg">
              <span className="text-2xl md:text-3xl font-heading font-bold">10+</span>
              <span className="text-[10px] md:text-xs font-heading">Years</span>
            </div>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={200}>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-[2px] bg-primary inline-block" />
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-2">
              Cure Tech{" "}
              <span className="text-primary">Pharma</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-6 mb-4">
              Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier headquartered in Hyderabad, India. We bridge the gap between pharmaceutical manufacturers and healthcare providers across the nation.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  </section>
);

export default AboutSection;
