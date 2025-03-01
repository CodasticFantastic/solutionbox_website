import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import ComplexSolutionsForYourBusiness from "@/components/sections/presentableSections/complexSolutionsForYourBusiness/ComplexSolutionsForYourBusiness";
import OurServicesAccordionSection from "@/components/sections/presentableSections/ourServicesAccordionSection/OurServicesAccordionSection";
import OurServicesOrbitalIconsSection from "@/components/sections/presentableSections/ourServicesOrbitalIconsSection/OurServicesOrbitalIconsSection";
import ServicesPageHeroSection from "@/components/sections/presentableSections/servicesPageHeroSection/ServicesPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uslugi",
  description: "Uslugi",
};

export default function Uslugi() {
  return (
    <main>
      <ServicesPageHeroSection />
      <SectionDividerOrangeCircle variant="WHITE" />
      <OurServicesOrbitalIconsSection />
      <OurServicesAccordionSection />
      <ComplexSolutionsForYourBusiness />
    </main>
  );
}
