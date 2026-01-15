import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProtectionSection } from "@/components/sections/ProtectionSection";
import { LogoStripSection } from "@/components/sections/LogoStripSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { InstallersSection } from "@/components/sections/InstallersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OEMSection } from "@/components/sections/OEMSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen bg-dark">
          <Header />
          <main>
            <HeroSection />
            <StatsSection />
            <ProductsSection />
            <ProtectionSection />
            <LogoStripSection />
            <FeaturesSection />
            <BenefitsSection />
            <InstallersSection />
            <ProcessSection />
            <OEMSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
