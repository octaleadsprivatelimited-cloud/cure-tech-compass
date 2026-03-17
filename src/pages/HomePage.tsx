import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Shield, Truck, Users, Package, ArrowRight, Clock, TrendingUp, Award, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import whyChoosePharma from "@/assets/why-choose-pharma.jpg";

import inspan40 from "@/assets/products/inspan-40.jpg";
import calcifastXt from "@/assets/products/calcifast-xt.jpg";
import inspanDsr from "@/assets/products/inspan-dsr.jpg";
import clavorid625 from "@/assets/products/clavorid-625.jpg";
import cetriwise10 from "@/assets/products/cetriwise-10.jpg";
import parasync650 from "@/assets/products/parasync-650.jpg";

const services = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states with reliable logistics." },
  { icon: Package, title: "Supply Chain Management", desc: "End-to-end logistics and cold chain management for all product types." },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks and batch-level traceability at every stage." },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, pharmacies and healthcare institutions." },
];

const categories = [
  { name: "INSPAN-40", desc: "Pantoprazole 40mg", img: inspan40 },
  { name: "PARASYNC-650", desc: "Paracetamol 650mg", img: parasync650 },
  { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3", img: calcifastXt },
  { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", img: inspanDsr },
  { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", img: clavorid625 },
  { name: "CETRIWISE-10", desc: "Cetirizine 10mg", img: cetriwise10 },
];

const whyUsFeatures = [
  { icon: Clock, title: "Timely Delivery", desc: "Fast and reliable delivery across all Indian states with efficient logistics." },
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Best wholesale rates for bulk pharmaceutical orders." },
  { icon: Award, title: "Quality Assured", desc: "Certified products from licensed manufacturers with batch traceability." },
  { icon: Headphones, title: "Dedicated Support", desc: "Round-the-clock customer support for all partner needs." },
];

const HomePage = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[70vh] md:h-[85vh] min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-5 md:px-4 max-w-3xl animate-fade-up">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
          Trusted Pharmaceutical Distributor Across India
        </h1>
        <p className="text-sm md:text-lg text-primary-foreground/75 mt-4 md:mt-6 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
          Cure Tech Pharma provides reliable wholesale pharmaceutical distribution delivering quality medicines and healthcare products across India.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
          >
            Know More <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* About Summary */}
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4 grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        <ScrollAnimate>
          <div className="rounded overflow-hidden">
            <img src={aboutTeam} alt="Cure Tech Pharma team" className="w-full h-48 md:h-auto object-cover rounded" />
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={200}>
          <div>
            <SectionHeading title="About" highlight="Cure Tech Pharma" center={false} />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier headquartered in Hyderabad, India. We bridge the gap between pharmaceutical manufacturers and healthcare providers across the nation.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              Our extensive distribution network, coupled with stringent quality control measures, ensures that every product reaching our partners meets the highest standards of safety and efficacy.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:underline"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </section>

    {/* Products */}
    <section className="py-12 md:py-20 bg-section-alt">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading subtitle="What We Offer" title="Products" />
        </ScrollAnimate>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {categories.map((c, i) => (
            <ScrollAnimate key={c.name} delay={i * 100}>
              <Link
                to="/products"
                className="group bg-background rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow block"
              >
                <div className="h-32 md:h-48 bg-muted/30 flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="text-sm md:text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">{c.desc}</p>
                </div>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading subtitle="Our Services" title="Key" highlight="Services" />
        </ScrollAnimate>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((s, i) => (
            <ScrollAnimate key={s.title} delay={i * 100}>
              <div className="p-4 md:p-6 text-center border border-border rounded hover:border-primary/30 hover:shadow-md transition-all group h-full">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                  <s.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{s.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">{s.desc}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-12 md:py-28 bg-background">
      <div className="container mx-auto px-5 md:px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollAnimate>
            <div className="relative rounded-lg overflow-hidden">
              <img src={whyChoosePharma} alt="Pharmaceutical professional" className="w-full h-52 md:h-auto object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 w-16 h-16 text-accent opacity-30">
                <svg viewBox="0 0 64 64" fill="currentColor"><path d="M28 4h8v24h24v8H36v24h-8V36H4v-8h24V4z"/></svg>
              </div>
            </div>
          </ScrollAnimate>
          <ScrollAnimate delay={200}>
            <div>
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-heading font-semibold text-accent uppercase tracking-widest mb-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-accent inline-block" />
                Why Choose Us?
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground leading-tight mt-2">
                Your Trusted{" "}
                <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">Pharmaceutical</span>{" "}
                Distribution{" "}
                <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">Partner</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 md:mt-5 mb-6 md:mb-8">
                Cure Tech Pharma is committed to delivering quality medicines across India with reliability, competitive pricing, and exceptional service that healthcare providers can depend on.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {whyUsFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <f.icon className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-xs md:text-sm">{f.title}</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-3.5 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded hover:bg-accent/90 transition-colors"
              >
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-5 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {[
          { num: "500+", label: "Products" },
          { num: "1000+", label: "Partner Pharmacies" },
          { num: "28+", label: "States Covered" },
          { num: "10+", label: "Years Experience" },
        ].map((s, i) => (
          <ScrollAnimate key={s.label} delay={i * 100}>
            <div className="text-center py-5 md:py-8 border border-border rounded">
              <div className="text-2xl md:text-4xl font-heading font-bold text-primary">{s.num}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>

    {/* CTA */}
    <ScrollAnimate>
      <section className="py-10 md:py-16 bg-cta-gradient text-primary-foreground">
        <div className="container mx-auto px-5 md:px-4 text-center">
          <h2 className="text-xl md:text-3xl font-heading font-bold">Ready to Partner With Us?</h2>
          <p className="text-primary-foreground/70 text-sm md:text-base mt-3 mb-6 md:mb-8 max-w-lg mx-auto">
            Contact us today to discuss wholesale pricing and distribution partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded hover:bg-accent/90 transition"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919014288588"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary-foreground/10 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </ScrollAnimate>
  </main>
);

export default HomePage;
