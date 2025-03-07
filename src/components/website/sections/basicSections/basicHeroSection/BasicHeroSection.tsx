import styles from "./basicHeroSection.module.scss";
import Image from "next/image";

interface HeroSection {
  children: React.ReactNode;
  className?: string;
  maxSectionHeigh?: number;
}

export default function BasicHeroSection({ children, className, maxSectionHeigh = 880 }: HeroSection) {
  return (
    <section className={`${styles.heroSection} ${className}`} style={{ maxHeight: maxSectionHeigh }}>
      <div className={`container ${styles.sectionContent}`}>{children}</div>
      <Image className={styles.bgImg} src="/imgs/fox-left-half-light.svg" width={345} height={904} alt="Solution Box" priority />
    </section>
  );
}
