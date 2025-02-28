import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import OurServicesOrbitalIconsSection from "@/components/sections/presentableSections/ourServicesOrbitalIconsSection/OurServicesOrbitalIconsSection";
import ServicesPageHeroSection from "@/components/sections/presentableSections/servicesPageHeroSection/ServicesPageHeroSection";

export default function Uslugi() {
  return (
    <main>
      <ServicesPageHeroSection />
      <SectionDividerOrangeCircle variant="WHITE" />
      <OurServicesOrbitalIconsSection />
    </main>
  );
}
