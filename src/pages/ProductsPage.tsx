import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Pill, Heart, FlaskConical, Syringe, Brain, Search, SlidersHorizontal, Grid3X3, LayoutList } from "lucide-react";

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
  category: string;
}

const categoryFilters = [
  { icon: SlidersHorizontal, name: "All" },
  { icon: Pill, name: "General Medicines" },
  { icon: Heart, name: "Calcium / Multivitamins" },
  { icon: FlaskConical, name: "Gastro Range" },
  { icon: Syringe, name: "Antibiotics" },
  { icon: Brain, name: "Neuro / Pain" },
];

const allProducts: Product[] = [
  { name: "INSPAN-40", desc: "Pantoprazole 40mg", img: inspan40, category: "General Medicines" },
  { name: "PARASYNC-650", desc: "Paracetamol 650mg", img: parasync650, category: "General Medicines" },
  { name: "DSPAN-60", desc: "Dexlansoprazole 60mg", img: dspan60, category: "General Medicines" },
  { name: "ACERAN-DSR", desc: "Aceclofenac + Rabeprazole", img: aceranDsr, category: "General Medicines" },
  { name: "CALCIFAST-XT", desc: "Calcium + Vitamin D3 + Minerals", img: calcifastXt, category: "Calcium / Multivitamins" },
  { name: "ACETATE-100", desc: "Aceclotenac 100mg", img: acetate100, category: "Calcium / Multivitamins" },
  { name: "ACETATE-NP", desc: "Aceclotenac + Paracetamol", img: acetateNp, category: "Calcium / Multivitamins" },
  { name: "VITOMED", desc: "Multivitamin Supplement", img: vitomed, category: "Calcium / Multivitamins" },
  { name: "INSPAN-DSR", desc: "Pantoprazole + Domperidone SR", img: inspanDsr, category: "Gastro Range" },
  { name: "OMETOR-20", desc: "Omeprazole 20mg", img: ometor20, category: "Gastro Range" },
  { name: "CLAVORID-625", desc: "Amoxycillin + Clavulanic Acid", img: clavorid625, category: "Antibiotics" },
  { name: "CLICEF-100 DT", desc: "Cefixime 100mg", img: clicef100dt, category: "Antibiotics" },
  { name: "CLIPIOFIX-500", desc: "Ciprofloxacin 500mg", img: clipiofix500, category: "Antibiotics" },
  { name: "CIPROFIX-500", desc: "Ciprofloxacin 500mg", img: ciprofix500, category: "Antibiotics" },
  { name: "CIFURON-CV 500", desc: "Cefuroxime + Clavulanic Acid", img: cifuronCv500, category: "Antibiotics" },
  { name: "CETRIWISE-10", desc: "Cetirizine 10mg", img: cetriwise10, category: "Neuro / Pain" },
  { name: "CINAMED-D", desc: "Cinnarizine + Domperidone", img: cinamedD, category: "Neuro / Pain" },
  { name: "OFREM-200 DT", desc: "Ofloxacin 200mg", img: ofrem200dt, category: "Neuro / Pain" },
  { name: "OFREM-OZ", desc: "Ofloxacin + Ornidazole", img: ofremOz, category: "Neuro / Pain" },
  { name: "CINAMED-PLUS", desc: "Cinnarizine + Dimenhydrinate", img: cinamedPlus, category: "Neuro / Pain" },
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
      {/* Hero Banner */}
      <section className="bg-secondary py-14 md:py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">Our Products</h1>
          <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">
            Browse our complete range of pharmaceutical products
          </p>
        </div>
      </section>

      <section className="py-8 md:py-14">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* View toggle - desktop */}
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

            {/* Product count */}
            <span className="text-sm text-muted-foreground">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
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
              <p className="text-muted-foreground text-lg">No products found</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-3 text-sm text-primary hover:underline">
                Clear filters
              </button>
            </div>
          ) : gridView ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filtered.map((p, i) => (
                <ScrollAnimate key={p.name} delay={i * 40}>
                  <div className="group bg-background rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/5] bg-section-alt flex items-center justify-center p-6 md:p-8 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Hover overlay with button */}
                      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    {/* Info */}
                    <div className="p-3 md:p-4 text-center">
                      <p className="text-[9px] md:text-[10px] text-muted-foreground font-heading uppercase tracking-wider mb-1">{p.category}</p>
                      <h4 className="text-xs md:text-sm font-heading font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">
                        {p.desc}
                      </p>
                      {/* Mobile-only button */}
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
            /* List View */
            <div className="space-y-3">
              {filtered.map((p, i) => (
                <ScrollAnimate key={p.name} delay={i * 30}>
                  <div className="group flex items-center gap-4 md:gap-6 bg-background border border-border rounded-xl p-3 md:p-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-muted/20 rounded-lg flex items-center justify-center p-2 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
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