"use client";

import styles from "./categoryContent.module.scss";
import Image from "next/image";
import { IProductCategoryResponse } from "@/types/category.types";
import { IProductResponse } from "@/types/product.types";
import { getDefaultProductImageId } from "@/lib/files";
import Link from "next/link";

interface CategoryContentProps {
  categoryData: IProductCategoryResponse;
}

export default function CategoryContent({
  categoryData,
}: CategoryContentProps) {
  return (
    <div className={styles.categoryContent}>
      <div className={`${styles.container} container`}>
        {/* Category description */}
        {categoryData.description ? (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: categoryData.description }}
          />
        ) : null}
        {/* Category products */}
        <div className={styles.productHolder}>
          {categoryData.products.map((product) => (
            <CategoryProduct
              key={product.product.id}
              product={product.product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CategoryProductProps {
  product: IProductResponse;
}

function CategoryProduct({ product }: CategoryProductProps) {
  return (
    <Link href={`/produkty/${product.slug}`} className={styles.categoryProduct}>
      <div className={styles.imgHolder}>
        <Image
          src={`${
            process.env.NEXT_PUBLIC_DOMAIN
          }/api/files/${getDefaultProductImageId(product.images)}`}
          alt={`Zdjęcie produktu - ${product.name}`}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{product.name}</p>
      </div>
    </Link>
  );
}
