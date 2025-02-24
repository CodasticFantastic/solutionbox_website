import AnimatedOrbitalIcons from "@/components/AnimatedOrbitalIcons";
import styles from "@/scss/pages/home.page.module.scss";

export default function Home() {
  const icons = [
    { id: 1, src: "/icons/docs-icon.svg", alt: "Dokumentacja", size: 48, angle: 0, orbitFraction: 0.58 },
    { id: 2, src: "/icons/docs-icon.svg", alt: "Dokumentacja", size: 48, angle: 120, orbitFraction: 0.8 },
    { id: 3, src: "/icons/docs-icon.svg", alt: "Dokumentacja", size: 48, angle: 150, orbitFraction: 1 },
  ];

  return (
    <main className={styles.homePage}>
      <div className={styles.section_1}>
        <p>Test</p>
        <h2>Mała wersja</h2>
        <AnimatedOrbitalIcons width={400} height={400} centerCircleSize={128} centerLogoSize={100} orbits={[0.6, 0.8, 1]} icons={icons} />
      </div>
    </main>
  );
}
