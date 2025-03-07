import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import AboutCompanyPageHeroSection from "@/components/website/sections/presentableSections/AboutCompanyPageHeroSection";
import AboutCompanySection from "@/components/website/sections/presentableSections/aboutCompanySection/AboutCompanySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie",
};

export default function OFirmie() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <AboutCompanyPageHeroSection />
      </div>
      <SectionDividerOrangeCircle variant="WHITE" />
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <AboutCompanySection />
      </div>
    </main>
  );
}
