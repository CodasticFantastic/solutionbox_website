"use client";
import React from "react";
import Image from "next/image";
import styles from "@/scss/components/AnimatedOrbitalIcons.module.scss";

export type AnimatedOrbitalIcon = {
  id: number;
  src: string;
  alt: string;
  size: number;
  angle: number; // (0 - 360) -- Angle
  orbitFraction: number; // (0–1) -- Fraction defining the radius of the orbit relative to the container's size
};

interface AnimatedOrbitalIconsProps {
  width: number;
  height: number;
  centerLogoSize: number;
  centerCircleSize: number;
  centerLogoSrc?: string;
  orbits?: number[]; // [0.1, 0.2, 0.3] -- Orbits table
  orbitsColor?: string;
  icons?: AnimatedOrbitalIcon[];
}

export default function AnimatedOrbitalIcons({
  width,
  height,
  centerLogoSrc = "/branding/solution-box-logo.svg",
  centerLogoSize,
  centerCircleSize,
  orbits = [0.3, 0.4, 0.5],
  orbitsColor = "#000000",
  icons = [],
}: AnimatedOrbitalIconsProps) {
  const containerStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {/* Central Circle */}
      <div className={styles.logo} style={{ width: centerCircleSize, height: centerCircleSize }}>
        <Image src={centerLogoSrc} alt="Solution Box" width={centerLogoSize} height={centerLogoSize} />
      </div>

      {/* Static Circles (Orbits) */}
      {orbits.map((fraction, index) => {
        const radiusPx = (fraction * Math.min(width, height)) / 2;
        return (
          <div
            key={index}
            className={styles.circle}
            style={{
              width: `${radiusPx * 2}px`,
              height: `${radiusPx * 2}px`,
              border: `1px solid ${orbitsColor}`,
            }}
          />
        );
      })}

      {/* Icons */}
      {icons.map((icon) => {
        const angleRad = (icon.angle * Math.PI) / 180;
        const radiusPx = (icon.orbitFraction * Math.min(width, height)) / 2;
        const x = Math.cos(angleRad) * radiusPx;
        const y = Math.sin(angleRad) * radiusPx;

        return (
          <div key={icon.id} className={styles.icon} style={{ transform: `translate(${x}px, ${y}px)` }}>
            <Image src={icon.src} alt={icon.alt} width={icon.size} height={icon.size} />
          </div>
        );
      })}
    </div>
  );
}
