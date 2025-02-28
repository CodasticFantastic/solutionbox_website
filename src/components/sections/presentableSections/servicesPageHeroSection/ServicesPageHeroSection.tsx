import styles from "./servicesPageHeroSection.module.scss";
import BasicHeroSection from "../../basicSections/basicHeroSection/BasicHeroSection";

export default function ServicesPageHeroSection() {
  return (
    <BasicHeroSection className={styles.servicesPageHeroSection}>
      <div className={styles.left}>
        <h1>Sprawdź co możemy dla Ciebie zrobić</h1>
        <p>Od rozwiązania Twojego problemu oraz znalezienia dla Ciebie solucji dzieli Cię tylko jeden telefon</p>
      </div>
    </BasicHeroSection>
  );
}
