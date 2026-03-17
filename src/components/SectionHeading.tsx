interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
    <div className="w-20 h-1 bg-primary rounded-full mt-4 mb-4 mx-auto" style={center ? {} : { marginLeft: 0 }} />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
