import OurServicesSection from "@/components/sections/presentableSections/ourServicesSection/OurServicesSection";
import WhyUsSection from "@/components/sections/presentableSections/whyUsSection/WhyUsSection";
import HomePageHeroSection from "@/components/sections/presentableSections/homePageHeroSection/HomePageHeroSection";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />
      <OurServicesSection />
      <WhyUsSection />
    </main>
  );
}
