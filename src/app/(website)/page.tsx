import OurServicesSection from "@/components/website/sections/presentableSections/ourServicesSection/OurServicesSection";
import WhyUsSection from "@/components/website/sections/presentableSections/whyUsSection/WhyUsSection";
import HomePageHeroSection from "@/components/website/sections/presentableSections/homePageHeroSection/HomePageHeroSection";
import DeliveringNewestTechSolutionsSection from "@/components/website/sections/presentableSections/deliveringNewestTechSolutionsSection/DeliveringNewestTechSolutionsSection";
import HowToStarCollaborationWithUsSection from "@/components/website/sections/presentableSections/howToStarCollaborationWithUsSection/HowToStarCollaborationWithUsSection";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import { Metadata } from "next";
import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import OurPartnersSection from "@/components/website/sections/presentableSections/ourPartnersSection/OurPartnersSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <HomePageHeroSection />
      </div>
      <SectionDividerOrangeCircle variant="LIGHT_BLUE" />
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <OurServicesSection />
        <WhyUsSection />
        <DeliveringNewestTechSolutionsSection />
        <HowToStarCollaborationWithUsSection />
        <OurPartnersSection />
      </div>
    </main>
  );
}
