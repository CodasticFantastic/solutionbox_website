import Button from "@/components/website/core/button/Button";
import styles from "./ourServicesSection.module.scss";
import Image from "next/image";

export default function OurServicesSection() {
  return (
    <section className={styles.ourServicesSection}>
      <div className={`${styles.sectionContainer} container`}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <h2>Jesteśmy po to, aby rozwiązać każdy problem Twojego przedsiębiorstwa</h2>
          <div className={styles.tiles}>
            {/* Tile 1 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/coding-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box CNC</p>
              <p className={styles.description}>Plotery CNC / Frezarki</p>
            </div>
            {/* Tile 2 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/balance-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box Druk</p>
              <p className={styles.description}>Drukarki strukturalne UV i 3D</p>
            </div>
            {/* Tile 3 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/finances-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box Skanowanie</p>
              <p className={styles.description}>Skanery strukturalne</p>
            </div>
            {/* Tile 4 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/social-media-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box Generatory Azotu</p>
              <p className={styles.description}>Oxygen Free</p>
            </div>
            {/* Tile 5 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/it-systems-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box IT</p>
              <p className={styles.description}>Usługi IT</p>
            </div>
            {/* Tile 6 */}
            <div className={styles.tile}>
              <div className={styles.imgHolder}>
                <Image src={"/icons/system-1-1.svg"} alt="Coding" width={30} height={30} />
              </div>
              <p className={styles.title}>Solution Box Support</p>
              <p className={styles.description}>Wsparcie serwisowe</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className={styles.rightSide}>
          <Image className={styles.backgroundImg} src="/imgs/section_2_back.svg" width={544} height={507} alt="Solution Box Logo" />
          <div className={styles.content}>
            <p>
              W Solution Box wierzymy, że nawet najnowocześniejsze rozwiązania konsultingowe mogą być ogólnodostępne i zapewniać natychmiastowe, praktyczne i
              niezbędne wsparcie dla firm i przedsiębiorstw.
            </p>
            <Button variant="ORANGE" linkTo="/uslugi">
              Sprawdź nasze usługi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
