import AnimatedOrbitalIcons, { AnimatedOrbitalIcon } from "@/components/AnimatedOrbitalIcons";
import Button from "@/components/core/Button";
import styles from "@/scss/pages/home.page.module.scss";
import HeroSection from "@/sections/HeroSection";

const animatedHeroIconsList: AnimatedOrbitalIcon[] = [
  { id: 1, src: "/icons/docs-icon-dark.svg", alt: "Dokumentacja", size: 58, angle: 245, orbitFraction: 0.58 },
  { id: 2, src: "/icons/law-icon-dark.svg", alt: "Prawo", size: 58, angle: 345, orbitFraction: 0.8 },
  { id: 3, src: "/icons/location-icon-dark.svg", alt: "Lokalizacja", size: 58, angle: 180, orbitFraction: 1 },
  { id: 4, src: "/icons/settings-icon-dark.svg", alt: "Ustawienia", size: 58, angle: 120, orbitFraction: 0.8 },
  { id: 5, src: "/icons/megaphone-icon-dark.svg", alt: "Megafon", size: 58, angle: 40, orbitFraction: 1 },
];

export default function Home() {
  return (
    <main className={styles.homePage}>
      <HeroSection className={styles.section_1}>
        <div className={styles.section_1_content_left}>
          <h1>
            Rozwiążemy Twoje <br />
            problemy
          </h1>
          <p>
            W Solution Box wierzymy, że nawet najnowocześniejsze rozwiązania konsultingowe mogą być ogólnodostępne i zapewniać natychmiastowe, praktyczne i
            niezbędne wsparcie dla firm i przedsiębiorstw.
          </p>
          <div className={styles.btns}>
            <Button variant="ORANGE">Sprawdź nasze usługi</Button>
            <Button variant="DARK" linkTo="/documents/katalog-SolutionBox-wersja-cyfrowa.pdf" openLinkInNewTab>
              Pobierz katalog
            </Button>
          </div>
        </div>
        <AnimatedOrbitalIcons
          width={460}
          height={460}
          centerCircleSize={160}
          centerLogoSize={100}
          orbits={[0.6, 0.8, 1]}
          orbitsColor="var(--border-color-secondary)"
          icons={animatedHeroIconsList}
        />
      </HeroSection>
    </main>
  );
}
