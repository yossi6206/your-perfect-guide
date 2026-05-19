import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { BackupPricingSection } from "@/components/BackupPricingSection";
import { WebDevPricingSection } from "@/components/WebDevPricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <WhyChooseSection />
      <CertificatesSection />
      <ServicesSection />
      <PricingSection />
      <PartnersSection />
      <HowItWorksSection />
      <BackupPricingSection />
      <WebDevPricingSection />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
}
