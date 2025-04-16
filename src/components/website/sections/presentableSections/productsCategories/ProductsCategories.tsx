"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./productsCategories.module.scss";
import Button from "@/components/website/core/button/Button";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const categoriesConfig = [
  {
    title: "Usługi",
    slug: "/produkty/kategoria/uslugi",
    img: "/imgs/kategoria-uslugi.webp",
  },
  {
    title: "Plotery",
    slug: "/produkty/kategoria/plotery",
    img: "/imgs/kategoria-plotery.webp",
  },
  {
    title: "Urządzenia Frezujące",
    slug: "/produkty/kategoria/urzadzenia-frezujace",
    img: "/imgs/kategoria-urzadzenia-frezujace.webp",
  },
  {
    title: "Skanery strukturalne",
    slug: "/produkty/kategoria/skanery-strukturalne",
    img: "/imgs/kategoria-skanery-strukturalne.webp",
  },
  {
    title: "Drukarki UV",
    slug: "/produkty/kategoria/drukarki-uv",
    img: "/imgs/kategoria-drukarki-uv.png",
  },
  {
    title: "Drukarki Strukturalne",
    slug: "/produkty/kategoria/drukarki-strukturalne",
    img: "/imgs/kategoria-drukarki-strukturalne.png",
  },
  {
    title: "Drukarki Hybrydowe",
    slug: "/produkty/kategoria/drukarki-hybrydowe",
    img: "/imgs/kategoria-drukarki-hybrydowe.webp",
  },
  {
    title: "Lasery",
    slug: "/produkty/kategoria/lasery",
    img: "/imgs/kategoria-laser.webp",
  },
  {
    title: "Wycinarki",
    slug: "/produkty/kategoria/wycinarki",
    img: "/imgs/kategoria-wycinarki.webp",
  },
  {
    title: "Urządzenia do dezynsekcji",
    slug: "/produkty/kategoria/urzadzenia-do-dezynsekcji",
    img: "/imgs/kategoria-urzadzenia-do-dezynsekcji.webp",
  },
  {
    title: "Moduły",
    slug: "/produkty/kategoria/moduly",
    img: "/branding/solution-box-logo.svg",
  },
];

export default function ProductsCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right", shouldRestart = true) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

    if (shouldRestart) restartAutoScroll();
  };

  // AUTO SCROLL LOGIC
  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const isAtEnd =
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 1;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 3000); // Scroll Duration
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const restartAutoScroll = () => {
    stopAutoScroll();
    startAutoScroll();
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);
    }

    startAutoScroll();

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener("mouseenter", stopAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
      }
    };
  }, []);

  return (
    <section className={styles.productsCategories}>
      <div className={`container ${styles.sectionContainer}`}>
        <div className={styles.sectionHeader}>
          <h2>Kategorie produktów</h2>
          <div className={styles.controls}>
            <Button variant="DARK" onClick={() => scroll("left")}>
              <MdArrowBack />
            </Button>
            <Button variant="DARK" onClick={() => scroll("right")}>
              <MdArrowForward />
            </Button>
          </div>
        </div>
        <div ref={scrollContainerRef} className={styles.categoriesHolder}>
          {categoriesConfig.map((category) => (
            <Link
              key={category.title}
              href={category.slug}
              className={styles.categoryTile}
            >
              <Image
                src={category.img}
                alt={category.title}
                width={200}
                height={200}
              />
              <p>{category.title}</p>
            </Link>
          ))}
        </div>
        <div className={styles.controls}>
          <Button
            variant="DARK"
            onClick={() => scroll("left")}
            style={{ justifyContent: "center" }}
          >
            <MdArrowBack />
          </Button>
          <Button
            variant="DARK"
            onClick={() => scroll("right")}
            style={{ justifyContent: "center" }}
          >
            <MdArrowForward />
          </Button>
        </div>
      </div>
    </section>
  );
}
