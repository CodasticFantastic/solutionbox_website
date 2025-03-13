"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import styles from "./productsCategories.module.scss";
import Button from "@/components/website/core/button/Button";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const categoriesConfig = [
  {
    title: "Plotery",
    slug: "/produkty/kategoria/plotery",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Urządzenia frezujące",
    slug: "/produkty/kategoria/urzadzenia-frezujace",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Drukarki strukturalne UV",
    slug: "/produkty/kategoria/drukarki-strukturalne-uv",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Drukarki kanałowe 3D",
    slug: "/produkty/kategoria/drukarki-kanalowe-3d",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Skanery strukturalne",
    slug: "/produkty/kategoria/skanery-strukturalne",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Lasery",
    slug: "/produkty/kategoria/lasery",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Generatory azotu",
    slug: "/produkty/kategoria/generatory-azotu",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Gadżety",
    slug: "/produkty/kategoria/gadżety",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Consumable",
    slug: "/produkty/kategoria/consumable",
    img: "/imgs/category-plotery.png",
  },
];

export default function ProductsCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
