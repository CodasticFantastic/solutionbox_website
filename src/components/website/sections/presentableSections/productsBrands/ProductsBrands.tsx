import Link from "next/link";
import styles from "./productsBrands.module.scss";
import Image from "next/image";

const brandsConfig = [
  {
    title: "Comagrav",
    slug: "/produkty/producenci/comagrav",
    img: "/branding/coop/comagrav.jpg",
  },
  {
    title: "Eagle",
    slug: "/produkty/producenci/eagle",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Ser Tec",
    slug: "/produkty/producenci/ser-tec",
    img: "/branding/coop/SER_TEC.png",
  },
  {
    title: "FoxUv",
    slug: "/produkty/producenci/foxuv",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Green Clean",
    slug: "/produkty/producenci/green-clean",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Metis",
    slug: "/produty/producenci/metis",
    img: "/branding/coop/METIS.jpg",
  },
  {
    title: "Solifuse",
    slug: "/produkty/producenci/solifuse",
    img: "/branding/coop/SoliFuse.png",
  },
  {
    title: "Loklik",
    slug: "/produkty/producenci/loklik",
    img: "/branding/coop/LOKLIK.png",
  },
  {
    title: "MyYard",
    slug: "/produkty/producenci/myyard",
    img: "/branding/coop/MYYARD.jpg",
  },
  {
    title: "An2Di",
    slug: "/produkty/producenci/an2di",
    img: "/imgs/category-plotery.png",
  },
  {
    title: "Flux",
    slug: "/produkty/producenci/flux",
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
