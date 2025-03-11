import { Metadata } from "next";
import ProductHeroSection from "./components/productHeroSection/ProductHeroSection";
import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import ProductContentSection from "./components/productContentSection/ProductContentSection";

export const metadata: Metadata = {
  title: "Produkt SEO",
  description: "Produkt SEO Description",
};

export default function ProduktPage() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <ProductHeroSection
          producer="An2Di"
          title="An2Di Book Scanner 2"
          productFeatures={[
            {
              title: "Automatyczne rozpoznawanie tekstu",
              description:
                "Ułatwia konwersję treści papierowych do formatu cyfrowego",
            },
            {
              title: "Intuicyjne oprogramowanie",
              description:
                "Obsługa jest łatwa nawet dla osób bez specjalistycznej wiedzy technicznej",
            },
            {
              title: "Narzędzie dla bibliotek i muzeów",
              description:
                "Umożliwia skuteczne przechwytywanie, archiwizowanie i udostępnianie dziedzictwa kulturowego w formie cyfrowej",
            },
            {
              title: "Kompaktowa konstrukcja",
              description:
                "Można łatwo przenosić między różnymi sekcjami bibliotek lub muzeów",
            },
          ]}
          image="/imgs/category-plotery.png"
        />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <ProductContentSection />
      </div>
    </main>
  );
}
