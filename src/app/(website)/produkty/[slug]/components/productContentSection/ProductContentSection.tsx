import { IProductResponse } from "@/types/product.types";
import styles from "./productContentSection.module.scss";
import Button from "@/components/website/core/button/Button";
import { MdFormatAlignJustify, MdPhone } from "react-icons/md";
import Image from "next/image";

interface ProductContentSectionProps {
  productData: IProductResponse;
}

export default function ProductContentSection({
  productData,
}: ProductContentSectionProps) {
  return (
    <section className={`${styles.productContentSection} container`}>
      <div className={styles.left}>
        <section id="specyfikacja" className="scrollTo">
          <h2>Specyfikacja</h2>
          <div
            className={styles.specificationData}
            dangerouslySetInnerHTML={{ __html: productData.specification! }}
          />
        </section>
        <section id="opis" className="scrollTo">
          <h2>Opis Produktu</h2>
          <div
            className={styles.descriptionData}
            dangerouslySetInnerHTML={{ __html: productData.description! }}
          />
        </section>
      </div>
      <div className={styles.right}>
        <div className={styles.sticky}>
          <section>
            <h3>Zainteresowany Zakupem?</h3>
            <hr />
            <p>
              Nasi specjaliści czekają by Ci pomóc. Zadzwoń do nas lub
              skontaktuj się przez formularz kontaktowy.
            </p>
            <div className={styles.btns}>
              <Button variant="DARK" linkTo="tel:+48693200900">
                <MdPhone size={20} /> Zadzwoń
              </Button>
              <Button variant="ORANGE" linkTo="/kontakt#formularz-kontaktowy">
                <MdFormatAlignJustify size={20} /> Formularz Kontaktowy
              </Button>
            </div>
          </section>
          <section>
            <h3>Katalog Firmowy</h3>
            <hr />
            <Image
              src="/imgs/katalog-preview.png"
              alt="Okładka katalogu firmy Solutionbox"
              width={400}
              height={400}
              className={styles.catalogImage}
            />
            <Button
              variant="DARK"
              linkTo="/documents/katalog-SolutionBox-wersja-cyfrowa.pdf"
              openLinkInNewTab
            >
              Pobierz Katalog
            </Button>
          </section>
        </div>
      </div>
    </section>
  );
}
