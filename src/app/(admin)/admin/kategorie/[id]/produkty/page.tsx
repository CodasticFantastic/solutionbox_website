"use client";
import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import { Product, ProductCategory } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./productCategories.module.scss";
import Image from "next/image";
import Button from "@/components/admin/core/button/Button";
import SpinnerLoader from "@/components/admin/core/spinnerLoader/SpinnerLoader";

type ImagesList = {
  img: string;
  isDefault: boolean;
};

interface ProductItem extends Omit<Product, "images"> {
  images: ImagesList[];
}

interface CategoryItem extends ProductCategory {
  products: {
    productId: number;
    categoryId: number;
    product: ProductItem;
  }[];
}

export default function ProduktyWKategorii() {
  const params = useParams();
  const categoryId = params.id;
  const [searchString, setSearchString] = useState("");
  const [categoryData, setCategoryData] = useState<CategoryItem>();
  const [productsList, setProductsList] = useState<ProductItem[]>([]);
  const [isProductListLoading, setIsProductListLoading] = useState(false);

  // Fetch Category Data
  const fetchCategoryData = async () => {
    try {
      const response = await fetch(`/api/categories?id=${categoryId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      setCategoryData(data);
    } catch {
      alert("Błąd podczas pobierania danych kategorii!");
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  // Fetch All Products or filtered products based on searchString
  const fetchProducts = async () => {
    if (!categoryData) return;

    setIsProductListLoading(true);
    try {
      const response = await fetch(
        `/api/products${searchString && `?searchString=${searchString}`}`
      );

      const products = await response.json();

      // Pobieramy ID produktów przypisanych do kategorii
      const categoryProductIds =
        categoryData?.products.map((p) => p.productId) || [];

      // Filtrowanie produktów - usuwamy te, które są w categoryData.products
      const filteredProducts = products.filter(
        (product: ProductItem) => !categoryProductIds.includes(product.id)
      );

      setProductsList(filteredProducts);
    } catch {
      alert("Błąd podczas pobierania produktów!");
    } finally {
      setIsProductListLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchString, categoryData]);

  // Handle Product Action
  const handleProductAction = async (productId: number) => {
    try {
      const response = await fetch(
        `/api/categories/connectProduct?categoryId=${categoryData?.id}&productId=${productId}`
      );

      if (response.ok) {
        fetchCategoryData();
      } else {
        alert("Błąd podczas wykonywania akcji!");
      }
    } catch {
      alert("Błąd podczas wykonywania akcji!");
    }
  };

  return (
    <>
      <PageHeader
        title="Przypisz produkty"
        actions={
          <div>
            Kategoria: <strong>{categoryData?.name}</strong>
          </div>
        }
      />
      <div className={styles.categoriesProducts}>
        <div className={styles.left}>
          <h3>Przypisane produkty</h3>
          <div className={styles.productsList}>
            {categoryData?.products.map((product) => (
              <ProductTile
                key={product.product.id}
                variant="REMOVE"
                product={product.product}
                action={handleProductAction}
              />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <h3>Baza Produktów</h3>
          <input
            className={styles.searchInput}
            id="searchString"
            name="searchString"
            type="text"
            placeholder="Wyszukaj produkt..."
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          {isProductListLoading ? (
            <SpinnerLoader isLoading={isProductListLoading} />
          ) : (
            <div className={styles.productsList}>
              {productsList.map((product) => (
                <ProductTile
                  key={product.id}
                  variant="ADD"
                  product={product}
                  action={handleProductAction}
                />
              ))}
              {productsList.length === 0 && (
                <p>Brak produktów o podanych kryteriach.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface ProductTileProps {
  product: ProductItem;
  variant: "ADD" | "REMOVE";
  action: (productId: number) => void;
}

function ProductTile({ product, variant, action }: ProductTileProps) {
  let productImages = [];

  if (typeof product?.images === "string") {
    productImages = JSON.parse(product?.images);
  } else {
    productImages = product?.images;
  }

  return (
    <div className={styles.productTile}>
      <div className={styles.productInfo}>
        <Image
          src={`/api/files/${
            productImages.find((img: ImagesList) => img.isDefault)?.img
          }`}
          alt={product.name}
          width={100}
          height={100}
        />
        {product.name}
      </div>
      <Button
        variant={variant === "ADD" ? "ADD" : "DANGER"}
        onClick={() => action(product.id)}
      >
        {variant === "ADD" ? "Przypisz do kategorii" : "Usuń z kategorii"}
      </Button>
    </div>
  );
}
