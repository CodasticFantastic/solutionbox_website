import styles from "./basicHeroSectionOnlyText.module.scss";
import BasicHeroSection from "../../basicSections/basicHeroSection/BasicHeroSection";

interface BasicHeroSectionOnlyTextProps {
  children: React.ReactNode;
  maxHeight?: number;
}

export default function BasicHeroSectionOnlyText({
  children,
  maxHeight,
}: BasicHeroSectionOnlyTextProps) {
  return (
    <BasicHeroSection
      className={styles.basicHeroSectionOnlyText}
      maxSectionHeigh={maxHeight}
    >
      <div className={styles.left}>{children}</div>
    </BasicHeroSection>
  );
}
