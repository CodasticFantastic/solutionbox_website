import { PageHeaderBackgroundColor } from "@/components/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import CompanyMissionSection from "@/components/sections/presentableSections/companyMissionSection/CompanyMissionSection";
import WeDeliveryYouNewestTech2 from "@/components/sections/presentableSections/weDeliveryYouNewsetTech2/WeDeliveryYouNewsetTech2";
import WeThinkSameAsYouSection from "@/components/sections/presentableSections/weThinkSameAsYouSection/WeThinkSameAsYouSection";
import WhyUsPageHeroSection from "@/components/sections/presentableSections/WhyUsPageHeroSection";
import WhyUsSection from "@/components/sections/presentableSections/whyUsSection/WhyUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dlaczego my",
};

export default function DlaczegoMy() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <WhyUsPageHeroSection />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <WeDeliveryYouNewestTech2 />
        <CompanyMissionSection />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <WeThinkSameAsYouSection />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <WhyUsSection />
      </div>
    </main>
  );
}
