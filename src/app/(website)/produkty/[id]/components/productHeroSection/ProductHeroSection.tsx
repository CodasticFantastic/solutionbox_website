import Image from "next/image";
import styles from "./productHeroSection.module.scss";
import BasicHeroSection from "@/components/website/sections/basicSections/basicHeroSection/BasicHeroSection";
import { IoMdCheckmark } from "react-icons/io";
import Button from "@/components/website/core/button/Button";

interface ProductHeroSectionProps {
  producer: string;
  title: string;
  image: string;
  productFeatures?: {
    title: string;
    description: string;
  }[];
}

export default function ProductHeroSection({
  producer,
  title,
  image,
  productFeatures,
}: ProductHeroSectionProps) {
  return (
    <BasicHeroSection className={styles.productHeroSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.left}>
          <strong className={styles.producer}>{producer}</strong>
          <h1>{title}</h1>
          {productFeatures && (
            <div className={styles.prodFeatures}>
              {productFeatures.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <IoMdCheckmark
                    size={20}
                    className={styles.icon}
                    style={{ color: "var(--font-primary)" }}
                  />
                  <div>
                    <p className={styles.featureTitle}>{feature.title}</p>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.btns}>
            <Button variant="ORANGE" linkTo="#specyfikacja">
              Specyfikacja
            </Button>
            <Button variant="DARK" linkTo="#opis">
              Opis
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgHolder}>
            <Image src={image} alt={title} width={800} height={500} />
          </div>
        </div>
      </div>
    </BasicHeroSection>
  );
}
