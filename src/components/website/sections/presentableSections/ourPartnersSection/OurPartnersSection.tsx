import styles from "./ourPartnersSection.module.scss";
import ImageCarousel from "@/components/website/others/imageCarousel/ImageCarousel";

export default function OurPartnersSection() {
  return (
    <section className={styles.ourPartnersSection}>
      <div className="container">
        <h2>Nasi partnerzy</h2>
      </div>
      <div style={{ marginTop: 36 }}>
        <ImageCarousel
          logos={[
            "/branding/coop/comagrav.jpg",
            "/branding/coop/SER_TEC.png",
            "/branding/coop/METIS.jpg",
            "/branding/coop/SoliFuse.png",
            "/branding/coop/LOKLIK.png",
            "/branding/coop/MYYARD.jpg",
            "/branding/coop/FLUX.png",
          ]}
        />
      </div>
    </section>
  );
}
