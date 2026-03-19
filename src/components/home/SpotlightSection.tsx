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
  { name: "INSPAN-40", desc: "Pantoprazole 40mg", tag: "GASTROINTESTINAL", img: inspan40 },
  { name: "PARASYNC-650", desc: "Paracetamol 650mg", tag: "PAIN RELIEF", img: parasync650 },
  { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3", tag: "SUPPLEMENTS", img: calcifastXt },
  { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", tag: "GASTROINTESTINAL", img: inspanDsr },
  { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", tag: "ANTIBIOTICS", img: clavorid625 },
];

const SpotlightSection = () => (
  <section className="py-20 md:py-28 bg-section-alt">
    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              PRODUCT SPOTLIGHT
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mt-2">
              Committed to Creating Value<br />for Healthcare Partners
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:gap-3 transition-all"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Horizontal scroll cards — like Mankind's sustainability spotlight */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0">
        {categories.map((c, i) => (
          <ScrollAnimate key={c.name} delay={i * 80}>
            <Link
              to="/products"
              className="group flex-shrink-0 w-[220px] md:w-[240px] snap-start block"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border mb-3">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-[hsl(190,90%,50%)]">
                {c.tag}
              </span>
              <h3 className="text-sm font-heading font-bold text-foreground mt-1 group-hover:text-primary transition-colors">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
            </Link>
          </ScrollAnimate>
        ))}
      </div>

      <div className="text-center mt-8 md:hidden">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary"
        >
          View All Products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default SpotlightSection;
