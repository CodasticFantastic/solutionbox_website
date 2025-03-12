import styles from "./categoryPageHeroSection.module.scss";
import BasicHeroSection from "../../basicSections/basicHeroSection/BasicHeroSection";
import Image from "next/image";
import { ProductCategory } from "@prisma/client";

interface CategoryPageHeroSectionProps {
  categoryData: ProductCategory;
}

export default function CategoryPageHeroSection({
  categoryData,
}: CategoryPageHeroSectionProps) {
  return (
    <BasicHeroSection>
      <div className={styles.sectionContainer}>
        <div className={styles.left}>
          <h1>{categoryData.name}</h1>
          <p>Znajdź produkt dla siebie już dziś</p>
        </div>
        <div className={styles.right}>
          <Image
            src={`/api/files/${categoryData.image}`}
            alt="Category Page Hero Section"
            width={800}
            height={800}
          />
        </div>
      </div>
    </BasicHeroSection>
  );
}
