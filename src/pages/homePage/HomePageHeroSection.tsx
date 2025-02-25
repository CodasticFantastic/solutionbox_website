"use client";

import AnimatedOrbitalIcons from "@/pages/homePage/components/AnimatedOrbsIconsHomePage/AnimatedOrbsIcons.homePage";
import Button from "@/components/core/Button";
import HeroSection from "@/components/sections/HeroSection";
import styles from "@/scss/pages/home.page.module.scss";

export default function HomePageHeroSection() {
  return (
    <div className={styles.homePage}>
      <HeroSection className={styles.section_1}>
        <div className={styles.section_1_content_left}>
          <h1>Dostarczymy Ci najnowszą technologię</h1>
          <p>
            W Solution Box wierzymy, że najnowocześniejsze rozwiązania druku UV, druku 3D, cięcia CNC, frezowania i wsparcia serwisowego mogą być ogólnodostępne
            i zapewniać natychmiastowe, praktyczne i niezbędne wsparcie dla firm i przedsiębiorstw.
          </p>
          <div className={styles.btns}>
            <Button variant="ORANGE">Sprawdź nasze usługi</Button>
            <Button variant="DARK" linkTo="/documents/katalog-SolutionBox-wersja-cyfrowa.pdf" openLinkInNewTab>
              Zobacz nasze Produkty
            </Button>
          </div>
        </div>
        <AnimatedOrbitalIcons />
      </HeroSection>
    </div>
  );
}
