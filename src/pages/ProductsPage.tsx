import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
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
    <section className="bg-secondary py-14 md:py-20 text-center">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">Our Products</h1>
        <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">Home / Products</p>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-4">
        <ScrollAnimate>
          <SectionHeading subtitle="What We Offer" title="Product" highlight="Categories" />
        </ScrollAnimate>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {categories.map((c, i) => (
            <ScrollAnimate key={c.name} delay={i * 100}>
              <div className="group bg-background border border-border rounded overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-28 md:h-48 bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <c.icon className="h-10 w-10 md:h-20 md:w-20 text-primary/20 group-hover:text-primary/35 transition-colors" />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-heading font-semibold text-foreground mb-1 md:mb-2">{c.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">{c.desc}</p>
                  <a
                    href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(c.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs font-heading font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ProductsPage;
