interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, highlight, subtitle, center = true, light = false }: SectionHeadingProps) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <span className={`text-sm font-heading font-semibold uppercase tracking-widest ${light ? "text-primary-foreground/60" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-heading font-bold mt-2 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}{" "}
      {highlight && <span className="text-primary">{highlight}</span>}
    </h2>
    <div className={`w-16 h-1 rounded-full mt-4 ${center ? "mx-auto" : ""} ${light ? "bg-primary-foreground/40" : "bg-primary"}`} />
  </div>
);

export default SectionHeading;
