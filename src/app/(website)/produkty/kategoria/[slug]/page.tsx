import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import CategoryContent from "@/components/website/sections/presentableSections/categoryContent/CategoryContent";
import CategoryPageHeroSection from "@/components/website/sections/presentableSections/categoryPageHeroSection/CategoryPageHeroSection";
import { IProductCategoryResponse } from "@/types/category.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getCategoryData(slug: string): Promise<IProductCategoryResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/categories?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const categoryData = await getCategoryData(params.slug);

  return {
    title: categoryData.seoTitle,
    description: categoryData.seoDescription,
    openGraph: {
      title: categoryData.seoTitle,
      description: categoryData.seoDescription,
    },
  };
}

export default async function KategoriaProduktowa(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const categoryData = await getCategoryData(params.slug);

  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <CategoryPageHeroSection categoryData={categoryData} />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <CategoryContent categoryData={categoryData} />
      </div>
    </main>
  );
}
