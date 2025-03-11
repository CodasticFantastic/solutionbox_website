"use client";

import { useState } from "react";
import styles from "./productForm.module.scss";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RichTextEditor } from "@/components/global/richTextEditor/RichTextEditor";
import Image from "next/image";
import Button from "@/components/admin/core/button/Button";
import { MdDelete } from "react-icons/md";

interface ProductFormState {
  seoTitle: string;
  seoDescription: string;
  producer: string;
  name: string;
  description: string;
  price: string;
  images: { img: File; isDefault: boolean }[];
  productFeatures: { title: string; description: string }[];
}

export default function ProductForm() {
  const [formState, setFormState] = useState<ProductFormState>({
    seoTitle: "",
    seoDescription: "",
    producer: "",
    name: "",
    description: "",
    price: "",
    images: [],
    productFeatures: [
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
    ],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);

    const formData = new FormData();

    formData.append("seoTitle", formState.seoTitle);
    formData.append("seoDescription", formState.seoDescription);
    formData.append("producer", formState.producer);
    formData.append("name", formState.name);
    formData.append("description", formState.description);
    formData.append("price", formState.price);
    formData.append(
      "productFeatures",
      JSON.stringify(formState.productFeatures)
    );

    // Append images do formdata
    formState.images.forEach((image) => {
      formData.append("images", image.img);
    });

    // Find default image index
    let defaultImageIndex = formState.images.findIndex(
      (image) => image.isDefault
    );

    // If there is no default image index set it to 0
    if (defaultImageIndex === -1) {
      defaultImageIndex = 0;
    }

    // Append default image index to formdata
    formData.append("defaultImageIndex", defaultImageIndex.toString());

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Błąd podczas dodawania produktu");
      }

      const result = await response.json();
      console.log("Produkt dodany:", result);

      alert("Produkt został dodany!");
    } catch (error) {
      console.error("Błąd:", error);
      alert("Wystąpił problem podczas dodawania produktu.");
    }
  };

  return (
    <form className={styles.productForm} onSubmit={handleSubmit}>
      {/* SEO Settings */}
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
              placeholder="np. Drukarka 3D"
              value={formState.seoTitle}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, seoTitle: e.target.value }))
              }
              required
            />
          </label>
          {/* SEO Description Input */}
          <label htmlFor="seoDescription" className={styles.inputField}>
            <span className={styles.inputLabel}>Seo Description</span>
            <input
              className={styles.textInput}
              type="text"
              id="seoDescription"
              name="seoDescription"
              placeholder="np. Zaawansowana drukarka 3D do zadań specjalnych..."
              value={formState.seoDescription}
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
      {/* Product Details */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Informacje Podstawowe</h3>
        {/* Producer/Name/Price Row */}
        <div className={styles.row}>
          {/* Producer Input */}
          <label htmlFor="producer" className={styles.inputField}>
            <span className={styles.inputLabel}>Producent</span>
            <input
              className={styles.textInput}
              type="text"
              id="producer"
              name="producer"
              placeholder="np. Microsoft"
              value={formState.producer}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, producer: e.target.value }))
              }
              required
            />
          </label>
          {/* Title Input */}
          <label htmlFor="name" className={styles.inputField}>
            <span className={styles.inputLabel}>Nazwa</span>
            <input
              className={styles.textInput}
              type="text"
              id="name"
              name="name"
              placeholder="np. Drukarka 3D"
              value={formState.name}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </label>
          {/* Price Input */}
          <label htmlFor="price" className={styles.inputField}>
            <span className={styles.inputLabel}>Cena</span>
            <input
              className={styles.textInput}
              type="number"
              id="price"
              name="price"
              placeholder="np. Drukarka 3D"
              value={formState.price}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, price: e.target.value }))
              }
              required
            />
          </label>
        </div>
      </div>
      {/* Product Features */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Wyróżniki Produktu</h3>
        <div className={styles.row}>
          <div className={styles.left}>
            {/* ProdFeature 1 - Title */}
            <label htmlFor="w1-title" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 1 - Tytuł</span>
              <input
                className={styles.textInput}
                type="text"
                id="w1-title"
                name="w1-title"
                placeholder="np. Niezawodność"
                value={formState.productFeatures[0].title}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 0
                          ? { ...feature, title: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            {/* ProdFeature 1 - Description */}
            <label htmlFor="w1-description" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 1 - Opis</span>
              <textarea
                className={styles.textInput}
                id="w1-description"
                name="w1-description"
                placeholder="np. Nasi klienci kochają nasz produkt najbardziej za..."
                value={formState.productFeatures[0].description}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 0
                          ? { ...feature, description: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            <hr />
            {/* ProdFeature 3 - Title */}
            <label htmlFor="w3-title" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 3 - Tytuł</span>
              <input
                className={styles.textInput}
                type="text"
                id="w3-title"
                name="w3-title"
                placeholder="np. Niezawodność"
                value={formState.productFeatures[2].title}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 2
                          ? { ...feature, title: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            {/* ProdFeature 3 - Description */}
            <label htmlFor="w3-description" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 3 - Opis</span>
              <textarea
                className={styles.textInput}
                id="w3-description"
                name="w3-description"
                placeholder="np. Nasi klienci kochają nasz produkt najbardziej za..."
                value={formState.productFeatures[2].description}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 2
                          ? { ...feature, description: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
          </div>
          <div className={styles.right}>
            {/* ProdFeature 2 - Title */}
            <label htmlFor="w2-title" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 2 - Tytuł</span>
              <input
                className={styles.textInput}
                type="text"
                id="w2-title"
                name="w2-title"
                placeholder="np. Niezawodność"
                value={formState.productFeatures[1].title}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 1
                          ? { ...feature, title: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            {/* ProdFeature 2 - Description */}
            <label htmlFor="w2-description" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 2 - Opis</span>
              <textarea
                className={styles.textInput}
                id="w2-description"
                name="w2-description"
                placeholder="np. Nasi klienci kochają nasz produkt najbardziej za..."
                value={formState.productFeatures[1].description}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 1
                          ? { ...feature, description: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            <hr />
            {/* ProdFeature 4 - Title */}
            <label htmlFor="w2-title" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 4 - Tytuł</span>
              <input
                className={styles.textInput}
                type="text"
                id="w4-title"
                name="w4-title"
                placeholder="np. Niezawodność"
                value={formState.productFeatures[3].title}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 3
                          ? { ...feature, title: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
            {/* ProdFeature 4 - Description */}
            <label htmlFor="w2-description" className={styles.inputField}>
              <span className={styles.inputLabel}>Wyróżnik 4 - Opis</span>
              <textarea
                className={styles.textInput}
                id="w4-description"
                name="w4-description"
                placeholder="np. Nasi klienci kochają nasz produkt najbardziej za..."
                value={formState.productFeatures[3].description}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    productFeatures: prev.productFeatures.map(
                      (feature, index) =>
                        index === 3
                          ? { ...feature, description: e.target.value }
                          : feature
                    ),
                  }))
                }
              />
            </label>
          </div>
        </div>
      </div>
      {/* Product Images */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Obrazy Produktu</h3>
        {/* Images Input */}
        <label htmlFor="product-images" className={styles.inputFieldFile}>
          <span className={styles.inputLabel}>
            <AiOutlineFileAdd size={24} />
            <span>Przeciągnij obrazy...</span>
          </span>
          <input
            type="file"
            id="product-images"
            multiple
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setFormState((prev) => ({
                ...prev,
                images: [
                  ...prev.images,
                  ...files.map((file) => ({ img: file, isDefault: false })),
                ],
              }));
            }}
          />
        </label>

        {/* Podgląd wgranych plików */}
        {formState.images.length > 0 && (
          <div className={styles.multipleImagesPreview}>
            <h3 className={styles.sectionTitle}>Wgrane Obrazy</h3>
            <div className={styles.multipleImagesPreviewInnerContainer}>
              {formState.images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <Image
                    src={URL.createObjectURL(image.img)}
                    alt={`Zdjęcie ${index + 1}`}
                    className={styles.previewImage}
                    width={300}
                    height={300}
                  />
                  <div className={styles.actions}>
                    {/* Default IMG checkbox*/}
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={image.isDefault}
                        onChange={() => {
                          setFormState((prev) => ({
                            ...prev,
                            images: prev.images.map((img, i) => ({
                              ...img,
                              isDefault: i === index,
                            })),
                          }));
                        }}
                      />
                      Zdjęcie główne
                    </label>

                    {/* Remove IMG */}
                    <Button
                      type="button"
                      variant="DANGER"
                      onClick={() => {
                        setFormState((prev) => ({
                          ...prev,
                          images: prev.images.filter((_, i) => i !== index),
                        }));
                      }}
                    >
                      <MdDelete size={20} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Product Details */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Szczegóły Produktu</h3>
        <div className={styles.richTextEditor}>
          <RichTextEditor
            label="Opis Produktu"
            placeholder="Opis produktu..."
            initialValue={formState.description}
            //   initialDisabled={defaultValues === undefined ? false : true}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, description: e }))
            }
          />
        </div>
      </div>
      <Button type="submit" variant="ADD">
        Dodaj produkt
        {/* {variant === "ADD" ? "Dodaj produkt" : "Zaktualizuj produkt"} */}
      </Button>
    </form>
  );
}
