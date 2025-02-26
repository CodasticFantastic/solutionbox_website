import OurServicesSection from "@/components/sections/presentableSections/ourServicesSection/OurServicesSection";
import WhyUsSection from "@/components/sections/presentableSections/whyUsSection/WhyUsSection";
import HomePageHeroSection from "@/components/sections/presentableSections/homePageHeroSection/HomePageHeroSection";
import DeliveringNewestTechSolutionsSection from "@/components/sections/presentableSections/deliveringNewestTechSolutionsSection/DeliveringNewestTechSolutionsSection";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />
      <OurServicesSection />
      <WhyUsSection />
      <DeliveringNewestTechSolutionsSection />
    </main>
  );
}
