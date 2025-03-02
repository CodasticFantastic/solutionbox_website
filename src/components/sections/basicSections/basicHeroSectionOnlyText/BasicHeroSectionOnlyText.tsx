import styles from "./basicHeroSectionOnlyText.module.scss";
import BasicHeroSection from "../../basicSections/basicHeroSection/BasicHeroSection";

interface BasicHeroSectionOnlyTextProps {
  children: React.ReactNode;
}

export default function BasicHeroSectionOnlyText({ children }: BasicHeroSectionOnlyTextProps) {
  return (
    <BasicHeroSection className={styles.basicHeroSectionOnlyText}>
      <div className={styles.left}>{children}</div>
    </BasicHeroSection>
  );
}
