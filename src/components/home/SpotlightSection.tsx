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
  { name: "INSPAN-40", desc: "Pantoprazole 40mg", tag: "GASTROINTESTINAL", img: inspan40, color: "from-blue-500/20 to-blue-600/5" },
  { name: "PARASYNC-650", desc: "Paracetamol 650mg", tag: "PAIN RELIEF", img: parasync650, color: "from-rose-500/20 to-rose-600/5" },
  { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3", tag: "SUPPLEMENTS", img: calcifastXt, color: "from-amber-500/20 to-amber-600/5" },
  { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", tag: "GASTROINTESTINAL", img: inspanDsr, color: "from-violet-500/20 to-violet-600/5" },
  { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", tag: "ANTIBIOTICS", img: clavorid625, color: "from-emerald-500/20 to-emerald-600/5" },
];

const SpotlightSection = () => (
  <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gradient-accent inline-block">
              PRODUCT SPOTLIGHT
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mt-2">
              Committed to Creating Value<br />
              <span className="text-gradient-primary">for Healthcare Partners</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="group hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary/5 border border-primary/20 rounded-full text-sm font-heading font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Horizontal scroll cards */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0">
        {categories.map((c, i) => (
          <ScrollAnimate key={c.name} delay={i * 80}>
            <Link
              to="/products"
              className="group flex-shrink-0 w-[230px] md:w-[250px] snap-start block"
            >
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${c.color} border border-border/50 mb-3 group-hover:shadow-card-hover group-hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1`}>
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-contain p-5 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-gradient-accent inline-block">
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
