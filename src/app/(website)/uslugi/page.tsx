import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import ComplexSolutionsForYourBusiness from "@/components/website/sections/presentableSections/complexSolutionsForYourBusiness/ComplexSolutionsForYourBusiness";
import OurServicesAccordionSection from "@/components/website/sections/presentableSections/ourServicesAccordionSection/OurServicesAccordionSection";
import OurServicesOrbitalIconsSection from "@/components/website/sections/presentableSections/ourServicesOrbitalIconsSection/OurServicesOrbitalIconsSection";
import ServicesPageHeroSection from "@/components/website/sections/presentableSections/ServicesPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uslugi",
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
