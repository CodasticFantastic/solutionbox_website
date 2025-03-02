import { PageHeaderBackgroundColor } from "@/components/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import ContactFormSection from "@/components/sections/presentableSections/contactFormSection/ContactFormSection";
import ContactPageHeroSection from "@/components/sections/presentableSections/ContactPageHeroSection";
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
