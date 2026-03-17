import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Truck, Award, Users, Pill, Heart, Syringe, FlaskConical, Leaf, Package } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import indiaMap from "@/assets/india-map.png";

const services = [
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk pharmaceutical supply across all Indian states" },
  { icon: Package, title: "Supply Chain", desc: "Reliable end-to-end logistics and cold chain management" },
  { icon: Shield, title: "Quality Assurance", desc: "Stringent quality checks at every stage" },
  { icon: Users, title: "Partner Network", desc: "Serving hospitals, clinics, and pharmacy chains" },
];

const categories = [
  { icon: Pill, name: "Tablets" },
  { icon: Heart, name: "Capsules" },
  { icon: FlaskConical, name: "Syrups" },
  { icon: Syringe, name: "Injections" },
  { icon: Leaf, name: "Nutraceuticals" },
  { icon: Shield, name: "Antibiotics" },
];

const whyUs = [
  { title: "Pan-India Network", desc: "Distribution coverage across all major cities and towns" },
  { title: "Competitive Pricing", desc: "Best wholesale rates for pharmacies and hospitals" },
  { title: "Quality Certified", desc: "All products sourced from licensed manufacturers" },
  { title: "Timely Delivery", desc: "Efficient logistics ensuring on-time supply" },
];

const HomePage = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            Pharmaceutical Distributor & Wholesale Supplier
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Trusted Pharmaceutical Distributor Across India
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
            Cure Tech Pharma provides reliable wholesale pharmaceutical distribution delivering quality medicines and healthcare products across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* About Summary */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Cure Tech Pharma"
          subtitle="We are a leading pharmaceutical distributor headquartered in Hyderabad, committed to providing high-quality medicines and healthcare products to pharmacies, hospitals, and healthcare institutions across India."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { num: "500+", label: "Products Distributed" },
            { num: "1000+", label: "Partner Pharmacies" },
            { num: "28+", label: "States Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-card rounded-xl shadow-card">
              <div className="text-4xl font-display font-bold text-primary mb-2">{stat.num}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Key Services" subtitle="Comprehensive pharmaceutical distribution solutions tailored for your business" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <s.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Categories */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading title="Product Categories" subtitle="Wide range of pharmaceutical products for all healthcare needs" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/products"
              className="group flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <c.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose Us" subtitle="What sets Cure Tech Pharma apart from other distributors" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={item.title} className="relative p-8 bg-card rounded-xl shadow-card border-t-4 border-primary">
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-muted/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Distribution Network */}
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Distributor Network Across India
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Our extensive distribution network ensures timely delivery of pharmaceutical products to every corner of India. We partner with leading pharmacies, hospitals, and healthcare institutions nationwide.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/distribution">Learn More</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={indiaMap} alt="Distribution network across India" className="max-w-sm w-full animate-float" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading
          title="Become a Distribution Partner"
          subtitle="Join our growing network of pharmaceutical partners across India. Contact us today to discuss wholesale pricing and partnership opportunities."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="px-10">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-10">
            <a href="https://wa.me/919014288588" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
