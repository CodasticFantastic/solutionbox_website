import styles from "@/scss/pages/home.page.module.scss";
import AnimatedOrbsIconsHomePage2, { AnimatedOrbitalIconWithText } from "./components/AnimatedOrbsIconsHomePage2/AnimatedOrbsIconsHomePage2";
import Image from "next/image";

export default function HomePage3rdSection() {
  const icons: AnimatedOrbitalIconWithText[] = [
    {
      id: 1,
      src: "/icons/specialist-icon-light.svg",
      alt: "Jesteśmy grupą specjalistów",
      angle: 160,
      orbitFraction: 1,
      text: "Jesteśmy grupą specjalistów",
      textPosition: "LEFT",
    },
    {
      id: 2,
      src: "/icons/full-time-icon-light.svg",
      alt: "Całodobowe wsparcie",
      angle: 127,
      orbitFraction: 1,
      text: "Całodobowe wsparcie",
      textPosition: "LEFT",
    },
    {
      id: 3,
      src: "/icons/innovation-icon-light.svg",
      alt: "Innowacyjne rozwiązania",
      angle: 90,
      orbitFraction: 1,
      text: "Innowacyjne rozwiązania",
      textPosition: "BOTTOM",
    },
    { id: 4, src: "/icons/people-icon-light.svg", alt: "Kreatywny zespół", angle: 57, orbitFraction: 1, text: "Kreatywny zespół", textPosition: "RIGHT" },
    {
      id: 5,
      src: "/icons/experience-icon-light.svg",
      alt: "Wieloletnie doświadczenie",
      angle: 20,
      orbitFraction: 1,
      text: "Wieloletnie doświadczenie",
      textPosition: "RIGHT",
    },
  ];

  return (
    <section className={styles.section_3}>
      <h2>Dlaczego my?</h2>
      <div className={styles.orbs}>
        <AnimatedOrbsIconsHomePage2 icons={icons} />
      </div>
      <div className="container">
        <div className={styles.mobileIcons}>
          {icons.map((icon) => (
            <div key={icon.id} className={styles.icon}>
              <Image src={icon.src} alt={icon.alt} width={58} height={58} />
              <p>{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
