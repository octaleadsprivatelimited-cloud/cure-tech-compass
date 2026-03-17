import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Pill, Heart, FlaskConical, Syringe, Leaf, Shield, Package } from "lucide-react";

const categories = [
  { icon: Pill, name: "Tablets", desc: "Wide range of tablets for various therapeutic segments including antibiotics, analgesics, and more." },
  { icon: Heart, name: "Capsules", desc: "Soft and hard gelatin capsules across multiple formulations and therapeutic categories." },
  { icon: FlaskConical, name: "Syrups", desc: "Pharmaceutical syrups and suspensions for pediatric and adult healthcare needs." },
  { icon: Syringe, name: "Injections", desc: "Injectable formulations maintained under strict cold chain standards." },
  { icon: Leaf, name: "Nutraceuticals", desc: "Health supplements, vitamins, and nutritional products for preventive healthcare." },
  { icon: Shield, name: "Antibiotics", desc: "Comprehensive range of antibiotic formulations from trusted manufacturers." },
  { icon: Package, name: "General Medicines", desc: "Essential medicines covering all major therapeutic segments and OTC products." },
];

const ProductsPage = () => (
  <main className="pt-20">
    <section className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Our Products</h1>
        <p className="text-primary-foreground/80 max-w-xl">Browse our comprehensive range of pharmaceutical products.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Product Categories" subtitle="Quality pharmaceutical products sourced from licensed manufacturers across India" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c) => (
            <div key={c.name} className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <c.icon className="h-20 w-20 text-primary/30 group-hover:text-primary/50 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(c.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ProductsPage;
