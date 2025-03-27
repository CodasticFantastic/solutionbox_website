"use client";

import { useEffect, useState } from "react";
import styles from "./categoryForm.module.scss";
import Button from "@/components/admin/core/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("@/components/global/richTextEditor/RichTextEditor"),
  { ssr: false }
);

export interface CategoryFormState {
  seoTitle: string;
  seoDescription: string;
  name: string;
  description: string;
  image: File | null;
}

interface CategoryFormProps {
  variant: "ADD" | "EDIT";
  categoryId?: number;
  defaultValues?: CategoryFormState;
}

export default function CategoryForm({
  variant,
  categoryId,
  defaultValues,
}: CategoryFormProps) {
  const router = useRouter();
  const [formState, setFormState] = useState<CategoryFormState>({
    seoTitle: "",
    seoDescription: "",
    name: "",
    description: "",
    image: null,
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isDataSending, setIsDataSending] = useState(false);

  useEffect(() => {
    if (!defaultValues) return;

    setFormState(defaultValues);

    if (defaultValues.image) {
      setImagePreviewUrl(`/api/files/${defaultValues.image.name}`);
    }
  }, [defaultValues]);

  useEffect(() => {
    let objectUrl: string | null = null;

    if (formState.image instanceof File) {
      objectUrl = URL.createObjectURL(formState.image);
      setImagePreviewUrl(objectUrl);
    }

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [formState.image]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDataSending(true);

    const formData = new FormData();
    formData.append("seoTitle", formState.seoTitle);
    formData.append("seoDescription", formState.seoDescription);
    formData.append("name", formState.name);
    formData.append("description", formState.description);
    if (formState.image) {
      formData.append("image", formState.image);
    }
    if (variant === "EDIT" && categoryId) {
      formData.append("id", String(categoryId));
    }

    try {
      const res = await fetch("/api/categories", {
        method: variant === "ADD" ? "POST" : "PUT",
        body: formData,
      });

      if (res.ok) {
        if (variant === "EDIT") {
          alert("Kategoria zaktualizowana poprawnie!");
        } else {
          router.push("/admin/kategorie");
        }
      } else {
        const { error } = await res.json();
        alert(`Błąd: ${error}`);
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania danych:", error);
      alert("Błąd podczas wysyłania danych!");
    } finally {
      setIsDataSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.categoryForm}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Ustawienia SEO</h3>
        <div className={styles.row}>
          {/* SEO Title Input */}
          <label htmlFor="seoTitle" className={styles.inputField}>
            <span className={styles.inputLabel}>Seo Title</span>
            <input
              className={styles.textInput}
              type="text"
              id="seoTitle"
              name="seoTitle"
              placeholder="np. Skanery do biura"
              value={formState.seoTitle}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, seoTitle: e.target.value }))
              }
              required
            />
          </label>
          {/* SEO Description Input */}
          <label htmlFor="seoDescription" className={styles.inputField}>
            <span className={styles.inputLabel}>
              Seo Description (max 155 znaków)
            </span>
            <input
              className={styles.textInput}
              type="text"
              id="seoDescription"
              name="seoDescription"
              placeholder="np. Skanery do biura to nowoczesne urządzenia..."
              value={formState.seoDescription}
              maxLength={155}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  seoDescription: e.target.value,
                }))
              }
              required
            />
          </label>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Informacje Podstawowe</h3>
        <div className={styles.row}>
          {/* Name Input */}
          <label htmlFor="name" className={styles.inputField}>
            <span className={styles.inputLabel}>Nazwa Kategorii</span>
            <input
              className={styles.textInput}
              type="text"
              id="name"
              name="name"
              placeholder="np. Skanery do biura"
              value={formState.name}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </label>
          {/* File Input */}
          <label htmlFor="file" className={styles.inputField}>
            <span className={styles.inputLabel}>Obraz Kategorii</span>
            <input
              type="file"
              id="file"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  image: e.target.files?.[0] || null,
                }))
              }
            />
          </label>
          {/* Podgląd obrazu */}
          {imagePreviewUrl && (
            <div className={styles.imagePreview}>
              <span className={styles.previewLabel}>Podgląd Obrazu</span>
              <Image
                src={imagePreviewUrl}
                alt="Podgląd obrazu"
                width={200}
                height={200}
                className={styles.previewImage}
              />
            </div>
          )}
        </div>
        {/* Description */}
        <RichTextEditor
          label="Opis Kategorii"
          placeholder="Opis Kategorii"
          initialValue={formState.description}
          initialDisabled={
            defaultValues
              ? defaultValues?.description === ""
                ? false
                : true
              : false
          }
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, description: e }))
          }
        />
      </div>

      <Button type="submit" variant="ADD" disabled={isDataSending}>
        {isDataSending
          ? "Zapisywanie..."
          : variant === "ADD"
          ? "Dodaj kategorię"
          : "Zaktualizuj kategorię"}
      </Button>
    </form>
  );
}
