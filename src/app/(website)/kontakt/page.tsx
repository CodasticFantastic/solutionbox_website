import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import ContactFormSection from "@/components/website/sections/presentableSections/contactFormSection/ContactFormSection";
import ContactPageHeroSection from "@/components/website/sections/presentableSections/ContactPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <ContactPageHeroSection />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <ContactFormSection />
      </div>
    </main>
  );
}
