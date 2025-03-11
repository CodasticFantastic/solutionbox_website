import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import ProductsBrands from "@/components/website/sections/presentableSections/productsBrands/ProductsBrands";
import ProductsCategories from "@/components/website/sections/presentableSections/productsCategories/ProductsCategories";
import ProductsPageHeroSection from "@/components/website/sections/presentableSections/ProductsPageHeroSection";
import WhyUsSection from "@/components/website/sections/presentableSections/whyUsSection/WhyUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produkty",
};

export default function ProduktyPage() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <ProductsPageHeroSection />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <ProductsCategories />
        <ProductsBrands />
        <WhyUsSection />
      </div>
    </main>
  );
}
