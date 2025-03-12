"use client";

import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import styles from "./productPage.module.scss";
import Button from "@/components/admin/core/button/Button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import SpinnerLoader from "@/components/admin/core/spinnerLoader/SpinnerLoader";
import Image from "next/image";
import ModalOverlay from "@/components/admin/core/modalOverlay/ModalOverlay";

interface ProductsList extends Omit<Product, "images"> {
  images: { img: string; isDefault: boolean }[];
}

export default function Produkty() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState<ProductsList[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<false | number>(
    false
  );

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/products");
      const products = await response.json();

      console.log(products);

      setProductsList(products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (productId: number) => {
    try {
      const response = await fetch(`/api/products?id=${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Produkt usunięta!");
        fetchProducts();
      } else {
        alert("Błąd podczas usuwania produktu");
      }
    } catch {
      alert("Błąd podczas usuwania produktu");
    }
  };

  return (
    <div className={styles.productsListPage}>
      <PageHeader
        title="Produkty"
        actions={
          <Button variant="ADD" linkTo="/admin/produkty/dodaj">
            Dodaj produkt
          </Button>
        }
      />
      {isLoading ? (
        <SpinnerLoader isLoading={isLoading} />
      ) : (
        // Categories List
        <div className={styles.productsList}>
          {productsList.length > 0 &&
            productsList.map((product) => (
              <React.Fragment key={product.id}>
                <div className={styles.productTile}>
                  <Image
                    src={`/api/files/${
                      product.images.find((img) => img.isDefault)?.img
                    }`}
                    alt={`Zdjęcie dla kategorii ${product.name}`}
                    width={180}
                    height={180}
                  />
                  <div className={styles.productInfo}>
                    <p className={styles.productName}>{product.name}</p>

                    <div className={styles.productTileBtns}>
                      <Button
                        variant="INFO"
                        onClick={() =>
                          router.push(`/admin/produkty/edytuj/${product.id}`)
                        }
                      >
                        Edytuj
                      </Button>
                      <Button
                        variant="DANGER"
                        onClick={() => setIsDeleteModalOpen(product.id)}
                      >
                        Usuń
                      </Button>
                    </div>
                  </div>
                </div>
                <ModalOverlay
                  isOpen={isDeleteModalOpen === product.id}
                  onConfirm={() => deleteProduct(product.id)}
                >
                  Czy na pewno chcesz usunąć produkt?
                </ModalOverlay>
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
}
