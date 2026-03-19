import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimate from "@/components/ScrollAnimate";

import catRespules from "@/assets/products/cat-respules.jpg";
import catTablets from "@/assets/products/cat-tablets.jpg";
import catCardiac from "@/assets/products/cat-cardiac.jpg";
import catInjectable from "@/assets/products/cat-injectable.jpg";
import catCapsules from "@/assets/products/cat-capsules.jpg";
import catSyrup from "@/assets/products/cat-syrup.jpg";
import catDrysyrup from "@/assets/products/cat-drysyrup.jpg";
import catDermaOintment from "@/assets/products/cat-derma-ointment.jpg";
import catDermaLotion from "@/assets/products/cat-derma-lotion.jpg";
import catDermaSoap from "@/assets/products/cat-derma-soap.jpg";
import catDental from "@/assets/products/cat-dental.jpg";
import catProtein from "@/assets/products/cat-protein.jpg";
import catEyeear from "@/assets/products/cat-eyeear.jpg";
import catAyurvedic from "@/assets/products/cat-ayurvedic.jpg";

const categories = [
  { name: "Respules", desc: "For Inhalation", tag: "RESPIRATORY", img: catRespules },
  { name: "Tablets", desc: "Oral Solid Dosage", tag: "ORAL", img: catTablets },
  { name: "Cardiac Diabetic", desc: "Heart & Diabetes Care", tag: "SPECIALTY", img: catCardiac },
  { name: "Injectable", desc: "Vials & Ampoules", tag: "PARENTERAL", img: catInjectable },
  { name: "Capsules / Softgels", desc: "Oral Capsule Range", tag: "ORAL", img: catCapsules },
  { name: "Syrup / Liquids", desc: "Oral Liquid Formulations", tag: "ORAL", img: catSyrup },
  { name: "Dry Syrups / Drops", desc: "Pediatric & Adult Powders", tag: "PEDIATRIC", img: catDrysyrup },
  { name: "Derma – Ointments", desc: "Ointments / Creams / Gels", tag: "DERMA", img: catDermaOintment },
  { name: "Derma – Lotions", desc: "Lotions / Powders / Serum", tag: "DERMA", img: catDermaLotion },
  { name: "Derma – Soaps", desc: "Soaps / Shampoos / Face Wash", tag: "DERMA", img: catDermaSoap },
  { name: "Dental Products", desc: "Oral Care Range", tag: "DENTAL", img: catDental },
  { name: "Protein / Sachets", desc: "Nutritional Supplements", tag: "NUTRACEUTICALS", img: catProtein },
  { name: "Eye / Ear / Nasal", desc: "Drops & Sprays", tag: "ENT / OPHTHAL", img: catEyeear },
  { name: "Ayurvedic", desc: "Syrup / Caps / Tonic / Churna", tag: "AYURVEDIC", img: catAyurvedic },
];

const SpotlightSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-5 md:px-4">
      <ScrollAnimate>
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent inline-block">
              PRODUCT CATEGORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mt-2">
              Committed to Creating Value<br />
              <span className="text-primary">for Healthcare Partners</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="group hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-heading font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollAnimate>

      {/* Grid of category cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
        {categories.map((c, i) => (
          <ScrollAnimate key={c.name} delay={i * 50}>
            <Link
              to="/products"
              className="group block"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border mb-3 group-hover:shadow-elevated group-hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-heading font-semibold uppercase tracking-wider text-accent inline-block">
                {c.tag}
              </span>
              <h3 className="text-xs md:text-sm font-heading font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors leading-tight">{c.name}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 leading-tight">{c.desc}</p>
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
