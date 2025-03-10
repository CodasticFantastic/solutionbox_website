"use client";
import Button from "@/components/admin/core/button/Button";
import styles from "./categoryPage.module.scss";
import React, { useEffect, useState } from "react";
import { ProductCategory } from "@prisma/client";
import Image from "next/image";
import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import { useRouter } from "next/navigation";
import ModalOverlay from "@/components/admin/core/modalOverlay/ModalOverlay";
import SpinnerLoader from "@/components/admin/core/spinnerLoader/SpinnerLoader";

export default function Kategorie() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState<ProductCategory[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<false | number>(
    false
  );

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/categories");
      const categories = await response.json();
      setCategoriesList(categories);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCategory = async (categoryId: number) => {
    try {
      const response = await fetch(`/api/categories?id=${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Kategoria usunięta!");
        fetchCategories();
      } else {
        alert("Błąd podczas usuwania kategorii!");
      }
    } catch {
      alert("Błąd podczas usuwania kategorii!");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.categoryPage}>
      <PageHeader
        title="Kategorie"
        actions={
          <Button variant="ADD" linkTo="/admin/kategorie/dodaj">
            Dodaj kategorię
          </Button>
        }
      />
      {isLoading ? (
        <SpinnerLoader isLoading={isLoading} />
      ) : (
        // Categories List
        <div className={styles.categoriesList}>
          {categoriesList.length > 0 &&
            categoriesList.map((category) => (
              <React.Fragment key={category.id}>
                <div className={styles.categoryTile}>
                  <div className={styles.categoryInfo}>
                    <Image
                      src={`/api/files/${category.image}`}
                      alt={`Zdjęcie dla kategorii ${category.name}`}
                      width={52}
                      height={52}
                    />
                    <p>{category.name}</p>
                  </div>
                  <div className={styles.categoryTileBtns}>
                    <Button
                      variant="INFO"
                      onClick={() =>
                        router.push(`/admin/kategorie/edytuj/${category.id}`)
                      }
                    >
                      Edytuj
                    </Button>
                    <Button
                      variant="DANGER"
                      onClick={() => setIsDeleteModalOpen(category.id)}
                    >
                      Usuń
                    </Button>
                  </div>
                </div>
                <ModalOverlay
                  isOpen={isDeleteModalOpen === category.id}
                  onConfirm={() => deleteCategory(category.id)}
                >
                  Czy na pewno chcesz usunąć kategorię?
                </ModalOverlay>
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
}
