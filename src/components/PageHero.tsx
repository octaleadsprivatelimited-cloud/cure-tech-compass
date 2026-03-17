import pageHero from "@/assets/page-hero.webp";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="relative py-16 md:py-24 text-center overflow-hidden">
    <img src={pageHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-secondary/85" />
    <div className="container mx-auto px-5 relative z-10">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">{title}</h1>
      <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;