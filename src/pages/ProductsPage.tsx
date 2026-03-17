import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Pill, Heart, FlaskConical, Syringe, Brain, MoreHorizontal } from "lucide-react";

// Product images
import inspan40 from "@/assets/products/inspan-40.jpg";
import parasync650 from "@/assets/products/parasync-650.jpg";
import dspan60 from "@/assets/products/dspan-60.jpg";
import aceranDsr from "@/assets/products/aceran-dsr.jpg";
import calcifastXt from "@/assets/products/calcifast-xt.jpg";
import acetate100 from "@/assets/products/acetate-100.jpg";
import acetateNp from "@/assets/products/acetate-np.jpg";
import vitomed from "@/assets/products/vitomed.jpg";
import inspanDsr from "@/assets/products/inspan-dsr.jpg";
import ometor20 from "@/assets/products/ometor-20.jpg";
import clavorid625 from "@/assets/products/clavorid-625.jpg";
import clicef100dt from "@/assets/products/clicef-100dt.jpg";
import clipiofix500 from "@/assets/products/clipiofix-500.jpg";
import ciprofix500 from "@/assets/products/ciprofix-500.jpg";
import cifuronCv500 from "@/assets/products/cifuron-cv500.jpg";
import cetriwise10 from "@/assets/products/cetriwise-10.jpg";
import cinamedD from "@/assets/products/cinamed-d.jpg";
import ofrem200dt from "@/assets/products/ofrem-200dt.jpg";
import ofremOz from "@/assets/products/ofrem-oz.jpg";
import cinamedPlus from "@/assets/products/cinamed-plus.jpg";

interface Product {
  name: string;
  desc: string;
  img: string;
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
      { name: "INSPAN-40", desc: "Pantoprazole 40mg", img: inspan40 },
      { name: "PARASYNC-650", desc: "Paracetamol 650mg", img: parasync650 },
      { name: "DSPAN-60", desc: "Dexlansoprazole 60mg", img: dspan60 },
      { name: "ACERAN-DSR", desc: "Aceclofenac + Rabeprazole", img: aceranDsr },
    ],
  },
  {
    icon: Heart,
    name: "Calcium / Multivitamins",
    products: [
      { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3 + Minerals", img: calcifastXt },
      { name: "ACETATE-100", desc: "Aceclotenac 100mg", img: acetate100 },
      { name: "ACETATE-NP", desc: "Aceclotenac + Paracetamol", img: acetateNp },
      { name: "VITOMED", desc: "Multivitamin Supplement", img: vitomed },
    ],
  },
  {
    icon: FlaskConical,
    name: "Gastro Range",
    products: [
      { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", img: inspanDsr },
      { name: "OMETOR-20", desc: "Omeprazole 20mg", img: ometor20 },
    ],
  },
  {
    icon: Syringe,
    name: "Antibiotics",
    products: [
      { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", img: clavorid625 },
      { name: "CLICEF-100 DT", desc: "Cefixime 100mg", img: clicef100dt },
      { name: "CLIPIOFIX-500", desc: "Ciprofloxacin 500mg", img: clipiofix500 },
      { name: "CIPROFIX-500", desc: "Ciprofloxacin 500mg", img: ciprofix500 },
      { name: "CIFURON-CV 500", desc: "Cefuroxime + Clavulanic Acid", img: cifuronCv500 },
    ],
  },
  {
    icon: Brain,
    name: "Neuro / Pain",
    products: [
      { name: "CETRIWISE-10", desc: "Cetirizine 10mg", img: cetriwise10 },
      { name: "CINAMED-D", desc: "Cinnarizine + Domperidone", img: cinamedD },
      { name: "OFREM-200 DT", desc: "Ofloxacin 200mg", img: ofrem200dt },
      { name: "OFREM-OZ", desc: "Ofloxacin + Ornidazole", img: ofremOz },
      { name: "CINAMED-PLUS", desc: "Cinnarizine + Dimenhydrinate", img: cinamedPlus },
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
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <cat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-heading font-bold text-foreground">{cat.name}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                  {cat.products.map((p) => (
                    <div
                      key={p.name}
                      className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <div className="h-32 md:h-44 bg-muted/30 flex items-center justify-center p-3 overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-2.5 md:p-4 border-t border-border">
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
