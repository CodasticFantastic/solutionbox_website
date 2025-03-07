import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import CompanyMissionSection from "@/components/website/sections/presentableSections/companyMissionSection/CompanyMissionSection";
import WeDeliveryYouNewestTech2 from "@/components/website/sections/presentableSections/weDeliveryYouNewsetTech2/WeDeliveryYouNewsetTech2";
import WeThinkSameAsYouSection from "@/components/website/sections/presentableSections/weThinkSameAsYouSection/WeThinkSameAsYouSection";
import WhyUsPageHeroSection from "@/components/website/sections/presentableSections/WhyUsPageHeroSection";
import WhyUsSection from "@/components/website/sections/presentableSections/whyUsSection/WhyUsSection";
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
