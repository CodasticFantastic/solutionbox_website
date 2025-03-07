import styles from "./weDeliveryYouNewsetTech2.module.scss";

export default function WeDeliveryYouNewestTech2() {
  return (
    <section className={styles.weDeliveryYouNewestTech2}>
      <div className={`container ${styles.sectionContainer}`}>
        <div className={styles.left}>
          <h2>
            Dostarczymy Ci <br />
            najnowsze technologie
          </h2>
        </div>
        <div className={styles.right}>
          <p>
            Świadczymy specjalistyczne usługi technologiczne oraz usługi outsourcingowe. Nasi pracownicy to zaawansowani i wysoko wykształceni eksperci z
            międzynarodowymi certyfikatami w swojej dziedzinie. Posiadają doświadczenie, wiedzę techniczną i cechy osobiste, które pomagają naszym klientom
            wykorzystywać i rozwijać opracowane przez nas rozwiązania.
            <br />
            <br />W Solution Box świadczymy usługi wdrożenia i wsparcia systemów informatycznych, poligraficznych, druku strukturalnego, reklamowego obierając
            za główny cel realizację i dostarczanie transparentnych projektów zarówno na poziomie oprogramowania, jak i sprzętu.
          </p>
        </div>
      </div>
    </section>
  );
}
