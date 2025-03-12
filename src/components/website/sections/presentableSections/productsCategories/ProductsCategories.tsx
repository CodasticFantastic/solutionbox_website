"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import styles from "./productsCategories.module.scss";
import Button from "@/components/website/core/button/Button";

const categoriesConfig = [
  {
    title: "Plotery",
    slug: "/produkty/plotery",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Urządzenia frezujące",
    slug: "/produkty/urzadzenia-frezujace",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Drukarki strukturalne UV",
    slug: "/produkty/drukarki-strukturalne-uv",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Drukarki kanałowe 3D",
    slug: "/produkty/drukarki-kanalowe-3d",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Skanery strukturalne",
    slug: "/produkty/skanery-strukturalne",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Lasery",
    slug: "/produkty/lasery",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Generatory azotu",
    slug: "/produkty/generatory-azotu",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Gadżety",
    slug: "/produkty/gadżety",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Consumable",
    slug: "/produkty/consumable",
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
              {"<"}
            </Button>
            <Button variant="DARK" onClick={() => scroll("right")}>
              {">"}
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
          <Button variant="DARK" onClick={() => scroll("left")}>
            {"<"}
          </Button>
          <Button variant="DARK" onClick={() => scroll("right")}>
            {">"}
          </Button>
        </div>
      </div>
    </section>
  );
}
