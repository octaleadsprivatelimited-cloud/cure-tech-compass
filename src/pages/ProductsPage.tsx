import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import PageHero from "@/components/PageHero";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Search, Grid3X3, LayoutList, Wind, Pill, Heart, Syringe, Circle, Droplets, Baby, Sparkles, Pipette, FlaskConical, Smile, Dumbbell, Eye, Leaf, SlidersHorizontal } from "lucide-react";

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

interface Product {
  name: string;
  desc: string;
  img: string;
  category: string;
}

const categoryFilters = [
  { icon: SlidersHorizontal, name: "All" },
  { icon: Wind, name: "Respiratory" },
  { icon: Pill, name: "Oral" },
  { icon: Heart, name: "Specialty" },
  { icon: Syringe, name: "Parenteral" },
  { icon: Baby, name: "Pediatric" },
  { icon: Sparkles, name: "Derma" },
  { icon: Smile, name: "Dental" },
  { icon: Dumbbell, name: "Nutraceuticals" },
  { icon: Eye, name: "ENT / Ophthal" },
  { icon: Leaf, name: "Ayurvedic" },
];

const allProducts: Product[] = [
  { name: "Respules", desc: "For Inhalation – Nebulizer vials for respiratory therapy", img: catRespules, category: "Respiratory" },
  { name: "Tablets", desc: "Oral solid dosage forms across therapeutic segments", img: catTablets, category: "Oral" },
  { name: "Cardiac Diabetic", desc: "Heart & diabetes care medicines for chronic management", img: catCardiac, category: "Specialty" },
  { name: "Injectable", desc: "Vials & ampoules for parenteral administration", img: catInjectable, category: "Parenteral" },
  { name: "Capsules / Softgels", desc: "Oral capsule range including softgel formulations", img: catCapsules, category: "Oral" },
  { name: "Syrup / Liquids", desc: "Oral liquid formulations for adults and children", img: catSyrup, category: "Oral" },
  { name: "Dry Syrups / Drops", desc: "Pediatric & adult powder formulations and drops", img: catDrysyrup, category: "Pediatric" },
  { name: "Derma – Ointments / Creams / Gels", desc: "Topical preparations for dermatological conditions", img: catDermaOintment, category: "Derma" },
  { name: "Derma – Lotions / Powders / Serum", desc: "Lotions, dusting powders and hair serums", img: catDermaLotion, category: "Derma" },
  { name: "Derma – Soaps / Shampoos / Face Wash", desc: "Medicated cleansing and personal care range", img: catDermaSoap, category: "Derma" },
  { name: "Dental Products", desc: "Oral care range including toothpaste and mouthwash", img: catDental, category: "Dental" },
  { name: "Protein Powder / Sachets", desc: "Nutritional supplements and health sachets", img: catProtein, category: "Nutraceuticals" },
  { name: "Eye / Ear / Nasal Drops & Spray", desc: "Ophthalmic, ENT drops and nasal sprays", img: catEyeear, category: "ENT / Ophthal" },
  { name: "Ayurvedic", desc: "Syrup, capsules, tonic, drops, churna & ointments", img: catAyurvedic, category: "Ayurvedic" },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [gridView, setGridView] = useState(true);

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main>
      <PageSEO title="Products" description="Browse our complete range of pharmaceutical product categories – tablets, capsules, injectables, derma range, ayurvedic, dental and more from Cure Tech Pharma." path="/products" />
      <PageHero title="Our Products" subtitle="Browse our complete range of pharmaceutical categories" />

      <section className="py-8 md:py-14">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
              <button
                onClick={() => setGridView(true)}
                className={`p-2 rounded ${gridView ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2 rounded ${!gridView ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>

            <span className="text-sm text-muted-foreground">
              {filtered.length} categor{filtered.length !== 1 ? "ies" : "y"}
            </span>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
            {categoryFilters.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-heading font-semibold rounded-full whitespace-nowrap border transition-all ${
                  activeCategory === cat.name
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-foreground border-border hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No categories found</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-3 text-sm text-primary hover:underline">
                Clear filters
              </button>
            </div>
          ) : gridView ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filtered.map((p, i) => (
                <ScrollAnimate key={p.name} delay={i * 40}>
                  <div className="group bg-card rounded-2xl border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-secondary/60 to-transparent">
                        <a
                          href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 text-xs font-heading font-semibold bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                    <div className="p-3 md:p-4 text-center">
                      <p className="text-[9px] md:text-[10px] text-accent font-heading font-semibold uppercase tracking-wider mb-1">{p.category}</p>
                      <h4 className="text-xs md:text-sm font-heading font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 leading-tight">{p.desc}</p>
                      <a
                        href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden inline-block mt-2.5 px-4 py-1.5 text-[10px] font-heading font-semibold bg-primary text-primary-foreground rounded-full"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((p, i) => (
                <ScrollAnimate key={p.name} delay={i * 30}>
                  <div className="group flex items-center gap-4 md:gap-6 bg-card border border-border rounded-xl p-3 md:p-4 hover:shadow-elevated hover:border-primary/20 transition-all duration-300">
                    <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 text-[9px] font-heading font-semibold bg-accent/10 text-accent rounded-full mb-1">
                        {p.category}
                      </span>
                      <h4 className="text-sm md:text-base font-heading font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                    </div>
                    <a
                      href={`https://wa.me/919014288588?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 text-xs font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Enquire
                    </a>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
