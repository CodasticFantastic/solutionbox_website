import Image from "next/image";
import styles from "./ourServicesOrbitalIconsSection.module.scss";

export type AnimatedOrbitalIcon = {
  id: number;
  src: string;
  alt: string;
  angle: number; // (0 - 360) -- Angle
  orbitFraction: number; // (0–1) -- Fraction defining the radius of the orbit relative to the container's size
  title: string;
  textContent: string;
  textPosition: "LEFT" | "BOTTOM" | "RIGHT" | "TOP";
};

const icons: AnimatedOrbitalIcon[] = [
  {
    id: 1,
    src: "/icons/marketing-icon-light.svg",
    alt: "Wsparcie",
    angle: 240,
    orbitFraction: 0.9,
    title: "Wsparcie",
    textContent: "Solution Box Wsparcie",
    textPosition: "TOP",
  },
  {
    id: 2,
    src: "/icons/finance-icon-light.svg",
    alt: "Finanse",
    angle: 200,
    orbitFraction: 0.9,
    title: "Usługi finansowe",
    textContent: "Solution Box Finanse",
    textPosition: "LEFT",
  },
  {
    id: 3,
    src: "/icons/settings-icon-light.svg",
    alt: "Druk strukturalny",
    angle: 160,
    orbitFraction: 0.9,
    title: "Druk strukturalny",
    textContent: "Solution Box Druk",
    textPosition: "LEFT",
  },
  {
    id: 4,
    src: "/icons/it-support-icon-light.svg",
    alt: "Tworzenie formatek do drukarek UV",
    angle: 120,
    orbitFraction: 0.9,
    title: "Formatki do drukarek UV",
    textContent: "Solution Box Druk UV",
    textPosition: "BOTTOM",
  },
  {
    id: 5,
    src: "/icons/law-icon-light.svg",
    alt: "Wsparcie projektowe",
    angle: 70,
    orbitFraction: 0.9,
    title: "Wsparcie projektowe",
    textContent: "Solution Box Office",
    textPosition: "BOTTOM",
  },
  // {
  //   id: 6,
  //   src: "/icons/integration-icon-light.svg",
  //   alt: "Wsparcie projektowe",
  //   angle: 30,
  //   orbitFraction: 0.9,
  //   title: "Wsparcie projektowe",
  //   textContent: "Solution Box Office",
  //   textPosition: "RIGHT",
  // },
];

export default function OurServicesOrbitalIconsSection() {
  return (
    <section className={styles.ourServicesOrbitalIconsSection}>
      <div className={styles.container}>
        {/* Central Circle */}
        <div className={styles.logo}>
          <Image src="/branding/solution-box-logo.svg" alt="Solution Box" width={100} height={100} />
        </div>

        {/* Static Circles (Orbits) */}
        {[0.5, 0.7, 0.9].map((__fraction, index) => {
          return <div key={index} className={styles.circle + " " + styles[`circle${index + 1}`]} />;
        })}

        {/* Icons */}
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={styles.icon}
            style={
              {
                "--angle": icon.angle,
                "--orbit-fraction": icon.orbitFraction,
              } as React.CSSProperties
            }
          >
            <div className={styles.iconContent}>
              <Image src={icon.src} alt={icon.alt} width={58} height={58} />
              <div className={styles[icon.textPosition]}>
                <p className={styles.title}>{icon.title}</p>
                <p className={styles.textContent}>{icon.textContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.mobileIcons}>
        {icons.map((icon) => (
          <div key={icon.id} className={styles.icon}>
            <Image src={icon.src} alt={icon.alt} width={58} height={58} />
            <p className={styles.title}>{icon.title}</p>
            <p className={styles.textContent}>{icon.textContent}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
