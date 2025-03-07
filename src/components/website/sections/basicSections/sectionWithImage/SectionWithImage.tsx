import Image from "next/image";
import styles from "./sectionWithImage.module.scss";

interface SectionWithImageProps {
  children: React.ReactNode;
  img: string;
  imgAlt: string;
  imgPosition: "LEFT" | "RIGHT";
  imgStyles?: React.CSSProperties;
}

export default function SectionWithImage({ children, img, imgAlt, imgPosition, imgStyles }: SectionWithImageProps) {
  return (
    <div className={styles.sectionWithImage}>
      <div className={styles.sectionContent}>{children}</div>
      <Image className={styles[imgPosition]} src={img} width={500} height={500} alt={imgAlt} style={imgStyles} />
    </div>
  );
}
