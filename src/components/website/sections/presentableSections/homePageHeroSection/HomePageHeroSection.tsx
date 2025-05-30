"use client";

import AnimatedOrbsIconsOrangeSmall from "@/components/website/others/animatedOrbsIconsOrangeSmall/AnimatedOrbsIconsOrangeSmall";
import Button from "@/components/website/core/button/Button";
import BasicHeroSection from "@/components/website/sections/basicSections/basicHeroSection/BasicHeroSection";
import styles from "./homePageHeroSection.module.scss";

export default function HomePageHeroSection() {
  return (
    <BasicHeroSection className={styles.homePageHeroSection}>
      <div className={styles.left}>
        <h1>Dostarczymy Ci najnowszą technologię</h1>
        <p>
          W Solution Box wierzymy, że najnowocześniejsze rozwiązania druku UV,
          druku 3D, cięcia CNC, frezowania i wsparcia serwisowego mogą być
          ogólnodostępne i zapewniać natychmiastowe, praktyczne i niezbędne
          wsparcie dla firm i przedsiębiorstw.
        </p>
        <div className={styles.btns}>
          <Button variant="ORANGE" linkTo="/uslugi">
            Sprawdź nasze usługi
          </Button>
          <Button variant="DARK" linkTo="/produkty">
            Zobacz nasze Produkty
          </Button>
        </div>
      </div>
      <AnimatedOrbsIconsOrangeSmall />
    </BasicHeroSection>
  );
}
