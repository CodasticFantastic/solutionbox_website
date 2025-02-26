"use client";
import Image from "next/image";
import styles from "./AnimatedOrbsIconsHomePage2.module.scss";

export type AnimatedOrbitalIconWithText = {
  id: number;
  src: string;
  alt: string;
  angle: number; // (0 - 360) -- Angle
  orbitFraction: number; // (0–1) -- Fraction defining the radius of the orbit relative to the container's size
  text: string;
  textPosition: "LEFT" | "BOTTOM" | "RIGHT";
};

export default function AnimatedOrbsIconsHomePage2({ icons }: { icons: AnimatedOrbitalIconWithText[] }) {
  return (
    <div className={styles.container}>
      {/* Static Circles (Orbits) */}
      {[0.8, 1].map((__fraction, index) => {
        return <div key={index} className={styles.circle + " " + styles[`circle${index + 1}`]} />;
      })}

      {/* Floating small orb (moving on inner orbit) */}
      <div className={styles.floatingOrb} />

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
            <p className={styles[icon.textPosition]}>{icon.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
