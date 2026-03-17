import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Pill, Heart, FlaskConical, Syringe, Brain, MoreHorizontal } from "lucide-react";

interface Product {
  name: string;
  desc: string;
}

interface Category {
  icon: React.ElementType;
  name: string;
  products: Product[];
}

const categories: Category[] = [
  {
    icon: Pill,
    name: "General Medicines",
    products: [
      { name: "INSPAN-40", desc: "Pantoprazole 40mg" },
      { name: "PARASYNC-650", desc: "Paracetamol 650mg" },
      { name: "DSPAN-60", desc: "Dexlansoprazole 60mg" },
      { name: "ACERAN-DSR", desc: "Aceclofenac + Rabeprazole" },
    ],
  },
  {
    icon: Heart,
    name: "Calcium / Multivitamins",
    products: [
      { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3 + Minerals" },
      { name: "ACETATE-100", desc: "Aceclotenac 100mg" },
      { name: "ACETATE-NP", desc: "Aceclotenac + Paracetamol" },
      { name: "VITOMED", desc: "Multivitamin Supplement" },
    ],
  },
  {
    icon: FlaskConical,
    name: "Gastro Range",
    products: [
      { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR" },
      { name: "OMETOR-20", desc: "Omeprazole 20mg" },
      { name: "INSPAN-OSE-SSE", desc: "Pantoprazole Injection" },
      { name: "GIPROFIX-650", desc: "Ciprofloxacin 650mg" },
    ],
  },
  {
    icon: Syringe,
    name: "Antibiotics",
    products: [
      { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid" },
      { name: "CLICEF-100 DT", desc: "Cefixime 100mg" },
      { name: "CLIPIOFIX-500", desc: "Ciprofloxacin 500mg" },
      { name: "CIPROFIX-500", desc: "Ciprofloxacin 500mg" },
      { name: "CIFURON-CV 500", desc: "Cefuroxime + Clavulanic Acid" },
    ],
  },
  {
    icon: Brain,
    name: "Neuro / Pain",
    products: [
      { name: "CETRIWISE-10", desc: "Cetirizine 10mg" },
      { name: "CINAMED-D", desc: "Cinnarizine + Domperidone" },
      { name: "OFREM-200 DT", desc: "Ofloxacin 200mg" },
      { name: "OFREM-OZ", desc: "Ofloxacin + Ornidazole" },
      { name: "CINAMED-PLUS", desc: "Cinnarizine + Dimenhydrinate" },
    ],
  },
  {
    icon: MoreHorizontal,
    name: "Others",
    products: [
      { name: "CINAMED-B", desc: "Cinnarizine + B Vitamins" },
      { name: "NITROFEST-100 SR", desc: "Nitrofurantoin SR" },
      { name: "NITROPSSE-0000", desc: "Nitrofurantoin Capsules" },
      { name: "Dicospray", desc: "Pain Relief Spray" },
    ],
  },
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
          <SectionHeading subtitle="What We Offer" title="Our Product" highlight="Range" />
        </ScrollAnimate>

        <div className="space-y-12 md:space-y-16">
          {categories.map((cat, ci) => (
            <ScrollAnimate key={cat.name} delay={ci * 80}>
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <cat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-heading font-bold text-foreground">{cat.name}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                  {cat.products.map((p) => (
                    <div
                      key={p.name}
                      className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <div className="h-20 md:h-28 bg-muted/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                        <cat.icon className="h-8 w-8 md:h-12 md:w-12 text-primary/15 group-hover:text-primary/30 transition-colors" />
                      </div>
                      <div className="p-2.5 md:p-4">
                        <h4 className="text-xs md:text-sm font-heading font-bold text-foreground leading-tight mb-0.5 md:mb-1">
                          {p.name}
                        </h4>
                        <p className="text-[10px] md:text-xs text-muted-foreground leading-snug mb-2 md:mb-3 line-clamp-2">
                          {p.desc}
                        </p>
                        <a
                          href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2.5 md:px-4 py-1 md:py-1.5 text-[9px] md:text-xs font-heading font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          Inquire
                        </a>
                      </div>
                    </div>
                  ))}
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
