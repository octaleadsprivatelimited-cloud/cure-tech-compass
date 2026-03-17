import SectionHeading from "@/components/SectionHeading";
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
  <main>
    <section className="bg-secondary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Our Products</h1>
        <p className="text-secondary-foreground/60 mt-3">Home / Products</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto">
        <SectionHeading subtitle="What We Offer" title="Product" highlight="Categories" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="group bg-background border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <c.icon className="h-20 w-20 text-primary/20 group-hover:text-primary/35 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <a
                  href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(c.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 text-xs font-heading font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ProductsPage;
