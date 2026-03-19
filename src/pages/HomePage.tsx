import PageSEO from "@/components/PageSEO";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import PromiseSection from "@/components/home/PromiseSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import JoinSection from "@/components/home/JoinSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => (
  <main>
    <PageSEO title="Quality Medicines – Trusted Healthcare" description="Cure Tech Pharma is a leading pharmaceutical distributor and wholesale supplier in Hyderabad, delivering quality medicines across India. 500+ products, 28+ states covered." path="/" />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <PromiseSection />
    <VerticalsSection />
    <SpotlightSection />
    <JoinSection />
    <CTASection />
  </main>
);

export default HomePage;
