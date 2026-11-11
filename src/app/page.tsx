import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/layout/hero-section";
import { CategorySection } from "@/components/layout/category-section";
import { ProductSection } from "@/components/layout/product-section";
import { HowItWorksSection } from "@/components/layout/how-it-works-section";
import { BenefitsSection } from "@/components/layout/benefits-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategorySection />
        <ProductSection />
        <HowItWorksSection />
        <BenefitsSection />
      </main>

      <Footer />
    </>
  );
}