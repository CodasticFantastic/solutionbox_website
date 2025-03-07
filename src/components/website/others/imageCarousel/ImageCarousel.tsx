"use client";

import Image from "next/image";
import styles from "./imageCarousel.module.scss";
import { useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
  logos: string[];
}

export default function ImageCarousel({ logos }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [repeatedLogos, setRepeatedLogos] = useState<string[]>(logos);

  useEffect(() => {
    if (!trackRef.current) return;

    const updateRepeatedLogos = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      if (trackWidth === 0) return;

      const repeatCount = Math.max(2, Math.ceil((viewportWidth * 2) / trackWidth));

      setRepeatedLogos(Array.from({ length: repeatCount }, () => logos).flat());
    };

    updateRepeatedLogos();
    window.addEventListener("resize", updateRepeatedLogos);

    return () => {
      window.removeEventListener("resize", updateRepeatedLogos);
    };
  }, [logos]);

  return (
    <div className={styles.imgCarousel}>
      <div className={styles.track} ref={trackRef}>
        {repeatedLogos.map((logo, index) => (
          <div className={styles.logoItem} key={index}>
            <Image src={logo} alt={`Logo ${index}`} width={100} height={100} priority />
          </div>
        ))}
      </div>
    </div>
  );
}
