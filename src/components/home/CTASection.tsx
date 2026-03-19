import { Link } from "react-router-dom";
import ScrollAnimate from "@/components/ScrollAnimate";

const CTASection = () => (
  <ScrollAnimate>
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-5 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Catalog card */}
          <div className="bg-primary rounded-2xl p-6 flex items-center justify-between text-primary-foreground relative overflow-hidden group">
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary-foreground/10 blur-lg" />
            <div className="relative">
              <span className="text-xs font-heading uppercase tracking-wider opacity-70">Product Catalog</span>
              <p className="font-heading font-bold text-lg mt-1">FY 24-25</p>
            </div>
            <Link to="/products" className="relative w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </Link>
          </div>

          {/* Ticker */}
          <div className="md:col-span-2 bg-secondary-foreground/[0.06] rounded-2xl border border-secondary-foreground/10 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-heading font-bold text-primary-foreground">CT</span>
              </div>
              <div>
                <span className="font-heading font-bold text-secondary-foreground">Cure Tech Pharma</span>
                <span className="text-xs text-secondary-foreground/50 ml-2">Hyderabad, India</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-2xl font-heading font-bold text-accent">1000+</span>
                <span className="text-xs text-secondary-foreground/50 ml-2">Partners</span>
              </div>
              <div className="flex items-center gap-1 text-accent">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5H7z"/></svg>
                <span className="text-sm font-heading font-semibold">Growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollAnimate>
);

export default CTASection;
