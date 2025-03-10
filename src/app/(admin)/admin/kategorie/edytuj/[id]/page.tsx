"use client";

import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import CategoryForm, {
  CategoryFormState,
} from "../../components/categoryForm/CategoryForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductCategory } from "@prisma/client";

export default function EdytujKategorie() {
  const params = useParams();
  const categoryId = params.id;
  const [categoryData, setCategoryData] = useState<ProductCategory>();
  const [defaultValues, setDefaultValues] = useState<CategoryFormState>();

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(`/api/categories?id=${categoryId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setCategoryData(data);

      let image: File | undefined = undefined;

      if (data.image) {
        try {
          const responseImage = await fetch(`/api/files/${data.image}`);
          const blob = await responseImage.blob();

          image = new File([blob], data.image, { type: blob.type });
        } catch {
          console.error("Failed to load image");
        }
      }
      setDefaultValues({
        seoTitle: data?.seoTitle ?? "",
        seoDescription: data?.seoDescription ?? "",
        name: data?.name ?? "",
        description: data?.description ?? "",
        image: image ?? null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div>
      <PageHeader title="Edytuj Kategorie" />
      {categoryData && (
        <CategoryForm
          variant="EDIT"
          defaultValues={defaultValues}
          categoryId={categoryData.id}
        />
      )}
    </div>
  );
}
