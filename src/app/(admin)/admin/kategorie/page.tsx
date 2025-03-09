"use client";
import Button from "@/components/admin/core/button/Button";
import styles from "./categoryPage.module.scss";
import { useEffect, useState } from "react";
import { ProductCategory } from "@prisma/client";
import Image from "next/image";
import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import { useRouter } from "next/navigation";

export default function Kategorie() {
  const router = useRouter();
  const [categoriesList, setCategoriesList] = useState<ProductCategory[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const categories = await response.json();
      setCategoriesList(categories);
    } catch (error) {
      console.error(error);
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
      {/* Categories List */}
      <div className={styles.categoriesList}>
        {categoriesList.length > 0 &&
          categoriesList.map((category) => (
            <div key={category.id} className={styles.categoryTile}>
              <div className={styles.categoryInfo}>
                <Image
                  src={`/api/images/${category.image}`}
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
                <Button variant="DANGER">Usuń</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
