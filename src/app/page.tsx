import OurServicesSection from "@/components/sections/presentableSections/ourServicesSection/OurServicesSection";
import WhyUsSection from "@/components/sections/presentableSections/whyUsSection/WhyUsSection";
import HomePageHeroSection from "@/components/sections/presentableSections/homePageHeroSection/HomePageHeroSection";
import DeliveringNewestTechSolutionsSection from "@/components/sections/presentableSections/deliveringNewestTechSolutionsSection/DeliveringNewestTechSolutionsSection";
import HowToStarCollaborationWithUsSection from "@/components/sections/presentableSections/howToStarCollaborationWithUsSection/HowToStarCollaborationWithUsSection";
import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import { Metadata } from "next";
import { PageHeaderBackgroundColor } from "@/components/layout/pageHeader/pageHeader.types";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  console.log("PageHeaderBackgroundColor.DEFAULT", PageHeaderBackgroundColor.DEFAULT);
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
      </div>
    </main>
  );
}
