import ScrollAnimate from "@/components/ScrollAnimate";

const stats = [
  { num: "500+", label: "Products" },
  { num: "1000+", label: "Partner Pharmacies" },
  { num: "28+", label: "States Covered" },
  { num: "10+", label: "Years Experience" },
];

const StatsSection = () => (
  <section className="relative z-10 -mt-16 md:-mt-20">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-background rounded-xl shadow-xl border border-border overflow-hidden">
        {stats.map((s, i) => (
          <ScrollAnimate key={s.label} delay={i * 100}>
            <div className={`text-center py-8 md:py-12 ${i < stats.length - 1 ? "border-r border-border" : ""} ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}>
              <div className="text-3xl md:text-5xl font-heading font-bold text-primary">{s.num}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 font-heading">{s.label}</div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
