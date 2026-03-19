import PageSEO from "@/components/PageSEO";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import PromiseSection from "@/components/home/PromiseSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => (
  <main>
    <PageSEO title="Quality Medicines – Trusted Healthcare" description="Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier in Hyderabad, delivering quality medicines across India. 500+ products, 28+ states covered." path="/" />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <PromiseSection />
    <ProductsSection />
    <ServicesSection />
    <WhyChooseSection />
    <CTASection />
  </main>
);

export default HomePage;
