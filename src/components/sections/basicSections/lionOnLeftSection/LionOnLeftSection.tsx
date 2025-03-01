import styles from "./lionOnLeftSection.module.scss";
import Image from "next/image";

interface LionOnLeftSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function LionOnLeftSection({ children, className }: LionOnLeftSectionProps) {
  return (
    <section className={`${styles.lionOnLeftSection} ${className}`}>
      <div className={`container ${styles.sectionContent}`}>{children}</div>
      <Image className={styles.bgImg} src="/imgs/fox-left-half-light.svg" width={345} height={904} alt="Solution Box" priority />
    </section>
  );
}
