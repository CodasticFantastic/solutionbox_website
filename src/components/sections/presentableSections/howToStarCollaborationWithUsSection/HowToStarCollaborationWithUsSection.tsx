import Image from "next/image";
import styles from "./howToStarCollaborationWithUsSection.module.scss";

export default function HowToStarCollaborationWithUsSection() {
  return (
    <section className={styles.howToStarCollaborationWithUsSection}>
      <div className={`container ${styles.sectionContainer}`}>
        <h2>Jak rozpocząć współpracę?</h2>
        <div className={styles.tiles}>
          {/* Tile 1 */}
          <div className={styles.tile}>
            <Image src="/icons/phone-icon-light.svg" width={67} height={67} alt="Telefon" />
            <p className={styles.step}>01</p>
            <p className={styles.accent}>Zadzwoń do nas</p>
            <p className={styles.content}>+48 693 200 900</p>
          </div>
          {/* Tile 2 */}
          <div className={styles.tile}>
            <Image src="/icons/message-icon-light.svg" width={67} height={67} alt="Bąbelek z wiadomością" />
            <p className={styles.step}>02</p>
            <p className={styles.accent}>Spotkaj się z</p>
            <p className={styles.content}>Solution Architect&apos;em</p>
          </div>
          {/* Tile 3 */}
          <div className={styles.tile}>
            <Image src="/icons/inspect-icon-light.svg" width={67} height={67} alt="Lupa" />
            <p className={styles.step}>03</p>
            <p className={styles.accent}>Przedstaw nam</p>
            <p className={styles.content}>Swój problem</p>
          </div>
          {/* Tile 4 */}
          <div className={styles.tile}>
            <Image src="/icons/innovation-icon-light.svg" width={67} height={67} alt=" Żarówka" />
            <p className={styles.step}>04</p>
            <p className={styles.accent}>Otrzymaj solucję</p>
          </div>
        </div>
      </div>
    </section>
  );
}
