import { Link } from "react-router-dom";
import ScrollAnimate from "@/components/ScrollAnimate";

const CTASection = () => (
  <ScrollAnimate>
    <section className="py-16 md:py-24 bg-cta-gradient text-primary-foreground">
      <div className="container mx-auto px-5 md:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-heading font-bold">Ready to Partner With Us?</h2>
        <p className="text-primary-foreground/70 text-sm md:text-base mt-4 mb-8 md:mb-10 max-w-lg mx-auto">
          Contact us today to discuss wholesale pricing and distribution partnership opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 md:px-10 py-3 md:py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded hover:bg-accent/90 transition"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/919014288588"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary-foreground/10 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </ScrollAnimate>
);

export default CTASection;
