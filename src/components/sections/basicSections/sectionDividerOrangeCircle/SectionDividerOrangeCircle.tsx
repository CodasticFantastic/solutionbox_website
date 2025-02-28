import styles from "./sectionDividerOrangeCircle.module.scss";
import Image from "next/image";

interface SectionDividerOrangeCircleProps {
  variant: "LIGHT_BLUE" | "WHITE";
}

export default function SectionDividerOrangeCircle({ variant }: SectionDividerOrangeCircleProps) {
  return (
    <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}>
        <div className={styles.sectionDividerInner}>
          <Image src={variant === "LIGHT_BLUE" ? "/imgs/section-divider-1.svg" : "/imgs/section-divider-2.svg"} width={116} height={58} alt="Section divider" />
          <div className={styles.sectionDividerInnerCircle}>
            <Image src="/icons/arrow-down-light.svg" width={16} height={16} alt="Arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
}
