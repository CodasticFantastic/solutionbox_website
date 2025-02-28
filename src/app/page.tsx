import OurServicesSection from "@/components/sections/presentableSections/ourServicesSection/OurServicesSection";
import WhyUsSection from "@/components/sections/presentableSections/whyUsSection/WhyUsSection";
import HomePageHeroSection from "@/components/sections/presentableSections/homePageHeroSection/HomePageHeroSection";
import DeliveringNewestTechSolutionsSection from "@/components/sections/presentableSections/deliveringNewestTechSolutionsSection/DeliveringNewestTechSolutionsSection";
import HowToStarCollaborationWithUsSection from "@/components/sections/presentableSections/howToStarCollaborationWithUsSection/HowToStarCollaborationWithUsSection";
import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />
      <SectionDividerOrangeCircle variant="LIGHT_BLUE" />
      <OurServicesSection />
      <WhyUsSection />
      <DeliveringNewestTechSolutionsSection />
      <HowToStarCollaborationWithUsSection />
    </main>
  );
}
