import { Metadata } from "next";
import ProductHeroSection from "./components/productHeroSection/ProductHeroSection";
import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import ProductContentSection from "./components/productContentSection/ProductContentSection";
import { IProductResponse } from "@/types/product.types";
import { notFound } from "next/navigation";
import { getDefaultProductImageId } from "@/lib/files";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";

async function getProductData(slug: string): Promise<IProductResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/products?slug=${slug}`,
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
  const productData = await getProductData(params.slug);

  return {
    title: productData.seoTitle,
    description: productData.seoDescription,
    openGraph: {
      title: productData.seoTitle,
      description: productData.seoDescription,
    },
  };
}

export default async function ProduktPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const productData = await getProductData(params.slug);

  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <ProductHeroSection
          producer={productData.producer}
          title={productData.name}
          productFeatures={
            Array.isArray(productData.productFeatures) &&
            productData.productFeatures.length > 0
              ? [
                  {
                    title: productData.productFeatures?.[0]?.title,
                    description: productData.productFeatures?.[0]?.description,
                  },
                  {
                    title: productData.productFeatures?.[1]?.title,
                    description: productData.productFeatures?.[1]?.description,
                  },
                  {
                    title: productData.productFeatures?.[2]?.title,
                    description: productData.productFeatures?.[2]?.description,
                  },
                  {
                    title: productData.productFeatures?.[3]?.title,
                    description: productData.productFeatures?.[3]?.description,
                  },
                ]
              : []
          }
          image={`${
            process.env.NEXT_PUBLIC_DOMAIN
          }/api/files/${getDefaultProductImageId(productData.images)}`}
        />
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
        <ProductContentSection productData={productData} />
      </div>
    </main>
  );
}
