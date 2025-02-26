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
      <div className={styles.sectionDivider}>
        <div className={styles.sectionDividerInner}>
          <Image src="/imgs/section-divider-1.svg" width={116} height={58} alt="Section divider" />
          <div className={styles.sectionDividerInnerCircle}>
            <Image src="/icons/arrow-down-light.svg" width={16} height={16} alt="Arrow down" />
          </div>
        </div>
      </div>
    </section>
  );
}
