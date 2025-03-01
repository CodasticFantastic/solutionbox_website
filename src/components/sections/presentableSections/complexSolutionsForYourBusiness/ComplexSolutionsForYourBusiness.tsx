import SectionWithImage from "../../basicSections/sectionWithImage/SectionWithImage";
import styles from "./complexSolutionsForYourBusiness.module.scss";

export default function ComplexSolutionsForYourBusiness() {
  return (
    <section className={styles.complexSolutionsForYourBusiness}>
      <div className="container">
        <SectionWithImage img="/imgs/uslugi-1.webp" imgAlt="Kompleksowe rozwiązanie dla Twojego biznesu" imgPosition="RIGHT">
          <h2 style={{ fontSize: "24px" }}>Kompleksowe rozwiązanie dla Twojego biznesu</h2>
          <p>
            W niestabilnym i wysoce złożonym środowisku biznesowym wymagana jest natychmiastowa reakcja w podejmowaniu strategicznych decyzji i sprawdzona
            metodologia ich wdrażania. W Solution Box mamy doświadczenie, aby skutecznie pomagać nowoczesnym biznesom. Działy konsultingowe Solution Box to
            centra bogate w pracowników, którzy nabyli doświadczenie ze współpracy w firmach różnej wielkości i instytucjach biznesowych. Nasi eksperci
            wypracowali niezbędny know-how, aby skutecznie odpowiadać na rzeczywiste potrzeby klienta, proponować usługi dostosowane do jego potrzeb oraz
            monitorować kompletny proces realizacji.
          </p>
        </SectionWithImage>

        <SectionWithImage img="/imgs/uslugi-2.webp" imgAlt="Kompleksowe rozwiązanie dla Twojego biznesu" imgPosition="LEFT">
          <p>
            Opierając się na doświadczeniu pracowników z różnych dziedzin, staramy się wnosić pozytywny wkład i proponować najlepsze rozwiązania w kwestiach
            rozwoju, modernizacji i wzrastania przedsiębiorców. Zapewniamy nieocenioną pomoc w zarządzaniu zasobami firmy, usprawnianiu szybkości organizacji i
            funkcjonowania wewnętrznych systemów. Maksymalizujemy oszczędność czasu, wzrost produktywności i konkurencyjności. Ciągłe poszukiwanie sposobów
            kompleksowej obsługi Partnerów B2B skłoniło nas do doskonalenia metod w zakresie wsparcia i stało się dla Solution Box celem samym w sobie. To
            niewątpliwie prowadzi do lepszych wyników wśród naszych klientów.
          </p>
        </SectionWithImage>
      </div>
    </section>
  );
}
