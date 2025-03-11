"use client";

import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import { useEffect, useState } from "react";
import ProductForm, {
  ProductFormState,
} from "../../components/productForm/productForm";
import { Product } from "@prisma/client";
import { useParams } from "next/navigation";

interface ProductsList extends Omit<Product, "images" | "productFeatures"> {
  images: { img: string; isDefault: boolean }[];
  productFeatures: { title: string; description: string }[];
}

export default function EdytujProdukt() {
  const params = useParams();
  const productId = params.id;
  const [productData, setProductData] = useState<ProductsList>();
  const [defaultValues, setDefaultValues] = useState<ProductFormState>();

  const fetchProductData = async () => {
    try {
      const response = await fetch(`/api/products?id=${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setProductData(data);

      setDefaultValues({
        seoTitle: data.seoTitle || "",
        seoDescription: data.seoDescription || "",
        producer: data.producer || "",
        name: data.name || "",
        description: data.description || "",
        price: data.price || "",
        images: data.images || [],
        productFeatures: [
          {
            title: data?.productFeatures[0].title || "",
            description: data?.productFeatures[0].description || "",
          },
          {
            title: data?.productFeatures[1].title || "",
            description: data?.productFeatures[1].description || "",
          },
          {
            title: data?.productFeatures[2].title || "",
            description: data?.productFeatures[2].description || "",
          },
          {
            title: data?.productFeatures[3].title || "",
            description: data?.productFeatures[3].description || "",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <PageHeader title="Edytuj Produkt" />
      {productData && (
        <ProductForm
          variant="EDIT"
          defaultValues={defaultValues}
          productId={productData.id}
        />
      )}
    </>
  );
}
