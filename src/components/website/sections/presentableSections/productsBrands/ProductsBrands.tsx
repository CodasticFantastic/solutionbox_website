import Link from "next/link";
import styles from "./productsBrands.module.scss";
import Image from "next/image";

const brandsConfig = [
  {
    title: "Comagrav",
    slug: "/produkty/kategoria/comagrav",
    img: "/branding/coop/comagrav.jpg",
  },
  {
    title: "Ser Tec",
    slug: "/produkty/kategoria/ser-tec",
    img: "/branding/coop/SER_TEC.png",
  },
  {
    title: "FoxUv",
    slug: "/produkty/kategoria/foxuv",
    img: "/branding/coop/fox-uv.svg",
  },
  {
    title: "Metis",
    slug: "/produkty/kategoria/metis",
    img: "/branding/coop/METIS.jpg",
  },
  {
    title: "Loklik",
    slug: "/produkty/kategoria/loklik",
    img: "/branding/coop/LOKLIK.png",
  },
  {
    title: "MyYard",
    slug: "/produkty/kategoria/myyard",
    img: "/branding/coop/MYYARD.jpg",
  },
  {
    title: "An2Di",
    slug: "/produkty/kategoria/an2di",
    img: "/branding/coop/an2di.png",
  },
  {
    title: "Flux",
    slug: "/produkty/kategoria/flux",
    img: "/branding/coop/FLUX.png",
  },
];

export default function ProductsBrands() {
  return (
    <section className={styles.productsBrands}>
      <div className={`container ${styles.sectionContainer}`}>
        <h2>Producenci</h2>
        <div className={styles.categoriesHolder}>
          {brandsConfig.map((category) => (
            <Link
              key={category.title}
              href={category.slug}
              className={styles.categoryTile}
            >
              <div className={styles.imgHolder}>
                <Image
                  src={category.img}
                  alt={category.title}
                  width={200}
                  height={200}
                />
              </div>
              <p>{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
