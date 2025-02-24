"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/scss/components/animated/AnimatedOrbitalIcons.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";

export type AnimatedOrbitalIcon = {
  id: number;
  src: string;
  alt: string;
  angle: number; // (0 - 360) -- Angle
  orbitFraction: number; // (0–1) -- Fraction defining the radius of the orbit relative to the container's size
};

interface AnimatedOrbitalIconsProps {
  size: number;
  centerLogoSize: number;
  centerCircleSize: number;
  iconsSize: number;
  centerLogoSrc?: string;
  orbits?: number[]; // [0.1, 0.2, 0.3] -- Orbits table
  orbitsColor?: string;
  icons?: AnimatedOrbitalIcon[];
}

export default function AnimatedOrbitalIcons({
  size,
  centerLogoSrc = "/branding/solution-box-logo.svg",
  centerLogoSize,
  centerCircleSize,
  iconsSize,
  orbits = [0.3, 0.4, 0.5],
  orbitsColor = "#000000",
  icons = [],
}: AnimatedOrbitalIconsProps) {
  const { windowWidth } = useWindowWidth();
  const [componentSettings, setComponentSettings] = useState({
    size: size,
    centerLogoSize: centerLogoSize,
    centerCircleSize: centerCircleSize,
    iconsSize: iconsSize,
  });
  const containerStyle: React.CSSProperties = {
    width: `${componentSettings.size}px`,
    height: `${componentSettings.size}px`,
  };

  useEffect(() => {
    const scaleFactor = Math.min(windowWidth / size, 1);
    const minScale = 0.5;
    const finalScale = Math.max(scaleFactor, minScale);

    if (size + iconsSize > windowWidth) {
      console.log("test");
      setComponentSettings({
        size: size * finalScale * 0.85,
        centerLogoSize: centerLogoSize * finalScale,
        centerCircleSize: centerCircleSize * finalScale,
        iconsSize: iconsSize * finalScale,
      });
    } else {
      setComponentSettings({
        size: size,
        centerLogoSize: centerLogoSize,
        centerCircleSize: centerCircleSize,
        iconsSize: iconsSize,
      });
    }
  }, [windowWidth]);

  return (
    <div className={styles.container} style={containerStyle}>
      {/* Central Circle */}
      <div className={styles.logo} style={{ width: componentSettings.centerCircleSize, height: componentSettings.centerCircleSize }}>
        <Image src={centerLogoSrc} alt="Solution Box" width={componentSettings.centerLogoSize} height={componentSettings.centerLogoSize} />
      </div>

      {/* Static Circles (Orbits) */}
      {orbits.map((fraction, index) => {
        const radiusPx = (fraction * Math.min(componentSettings.size, componentSettings.size)) / 2;
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
        const radiusPx = (icon.orbitFraction * Math.min(componentSettings.size, componentSettings.size)) / 2;
        const x = Math.cos(angleRad) * radiusPx;
        const y = Math.sin(angleRad) * radiusPx;

        return (
          <div key={icon.id} className={styles.icon} style={{ transform: `translate(${x}px, ${y}px)` }}>
            <Image src={icon.src} alt={icon.alt} width={componentSettings.iconsSize} height={componentSettings.iconsSize} />
          </div>
        );
      })}
    </div>
  );
}
