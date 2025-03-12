import { IProductResponse } from "@/types/product.types";
import styles from "./productContentSection.module.scss";

interface ProductContentSectionProps {
  productData: IProductResponse;
}

export default function ProductContentSection({
  productData,
}: ProductContentSectionProps) {
  return (
    <section className={`${styles.productContentSection} container`}>
      <div className={styles.left}>
        <section id="specyfikacja">
          <h2>Specyfikacja</h2>
          <div
            className={styles.specificationData}
            dangerouslySetInnerHTML={{ __html: productData.specification! }}
          />
        </section>
      </div>
      <div className={styles.right}>
        <div>TEST</div>
      </div>
    </section>
  );
}
