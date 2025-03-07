import styles from "./lionOnLeftSection.module.scss";
import Image from "next/image";

interface LionOnLeftSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "DARK" | "LIGHT_BLUE";
}

export default function LionOnLeftSection({ children, className, variant = "DARK" }: LionOnLeftSectionProps) {
  return (
    <section className={`${styles.lionOnLeftSection} ${className} ${styles[variant]}`}>
      <div className={`container ${styles.sectionContent}`}>{children}</div>
      <Image
        className={`${styles.bgImg} ${styles[variant]}`}
        src={variant === "DARK" ? "/imgs/fox-left-half-light.svg" : "/imgs/fox-right-half-white.svg"}
        width={345}
        height={904}
        alt="Solution Box"
        priority
      />
    </section>
  );
}
