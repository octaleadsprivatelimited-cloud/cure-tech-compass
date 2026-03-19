import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

import inspan40 from "@/assets/products/inspan-40.jpg";
import calcifastXt from "@/assets/products/calcifast-xt.jpg";
import inspanDsr from "@/assets/products/inspan-dsr.jpg";
import clavorid625 from "@/assets/products/clavorid-625.jpg";
import cetriwise10 from "@/assets/products/cetriwise-10.jpg";
import parasync650 from "@/assets/products/parasync-650.jpg";

const categories = [
  { name: "INSPAN-40", desc: "Pantoprazole 40mg", img: inspan40 },
  { name: "PARASYNC-650", desc: "Paracetamol 650mg", img: parasync650 },
  { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3", img: calcifastXt },
  { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", img: inspanDsr },
  { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", img: clavorid625 },
  { name: "CETRIWISE-10", desc: "Cetirizine 10mg", img: cetriwise10 },
];

const ProductsSection = () => (
  <section className="py-20 md:py-32 bg-section-alt">
    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[2px] bg-primary inline-block" />
            What We Offer
            <span className="w-8 h-[2px] bg-primary inline-block" />
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Our <span className="text-primary">Products</span>
          </h2>
        </div>
      </ScrollAnimate>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-none">
        {categories.map((c, i) => (
          <ScrollAnimate key={c.name} delay={i * 80}>
            <Link
              to="/products"
              className="group flex-shrink-0 w-[260px] md:w-auto snap-start bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 block"
            >
              <div className="aspect-square bg-muted/20 flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5 border-t border-border">
                <h3 className="text-sm md:text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
              </div>
            </Link>
          </ScrollAnimate>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
        >
          View All Products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProductsSection;
