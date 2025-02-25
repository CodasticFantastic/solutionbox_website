"use client";
import Image from "next/image";
import styles from "./AnimatedOrbsIcons.homePage.module.scss";

export type AnimatedOrbitalIcon = {
  id: number;
  src: string;
  alt: string;
  angle: number; // (0 - 360) -- Angle
  orbitFraction: number; // (0–1) -- Fraction defining the radius of the orbit relative to the container's size
};

const icons: AnimatedOrbitalIcon[] = [
  { id: 1, src: "/icons/docs-icon-dark.svg", alt: "Dokumentacja", angle: 245, orbitFraction: 0.58 },
  { id: 2, src: "/icons/law-icon-dark.svg", alt: "Prawo", angle: 345, orbitFraction: 0.8 },
  { id: 3, src: "/icons/location-icon-dark.svg", alt: "Lokalizacja", angle: 180, orbitFraction: 1 },
  { id: 4, src: "/icons/settings-icon-dark.svg", alt: "Ustawienia", angle: 120, orbitFraction: 0.8 },
  { id: 5, src: "/icons/megaphone-icon-dark.svg", alt: "Megafon", angle: 40, orbitFraction: 1 },
];

export default function AnimatedOrbitalIcons() {
  return (
    <div className={styles.container}>
      {/* Central Circle */}
      <div className={styles.logo}>
        <Image src="/branding/solution-box-logo.svg" alt="Solution Box" width={100} height={100} />
      </div>

      {/* Static Circles (Orbits) */}
      {[0.6, 0.8, 1].map((__fraction, index) => {
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
          <Image src={icon.src} alt={icon.alt} width={58} height={58} />
        </div>
      ))}
    </div>
  );
}
