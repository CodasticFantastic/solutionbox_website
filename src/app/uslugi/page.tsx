import { PageHeaderBackgroundColor } from "@/components/layout/pageHeader/pageHeader.types";
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
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <ServicesPageHeroSection />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <OurServicesOrbitalIconsSection />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <OurServicesAccordionSection />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <ComplexSolutionsForYourBusiness />
      </div>
    </main>
  );
}
