import Link from "next/link";
import styles from "./productsCategories.module.scss";
import Image from "next/image";

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
  return (
    <section className={styles.productsCategories}>
      <div className={`container ${styles.sectionContainer}`}>
        <h2>Kategorie produktów</h2>
        <div className={styles.categoriesHolder}>
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
      </div>
    </section>
  );
}
