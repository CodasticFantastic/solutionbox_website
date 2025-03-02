import styles from "./aboutCompanySection.module.scss";
import SectionWithImage from "../../basicSections/sectionWithImage/SectionWithImage";
import LionOnLeftSection from "../../basicSections/lionOnLeftSection/LionOnLeftSection";
import Button from "@/components/core/button/Button";

export default function AboutCompanySection() {
  return (
    <>
      <section className={styles.aboutCompanySection}>
        <div className="container">
          <SectionWithImage img="/imgs/o-firmie-1.webp" imgAlt="O firmie 1" imgPosition="LEFT">
            <h2>Solution Box to firma z długą tradycją na rynku</h2>
            <p>
              Bogate doświadczenie biznesowe właścicieli Solution Box pozwala świadczyć szereg zintegrowanych usług w celu zaspokojenia potrzeb biznesowych
              klientów. Skuteczne kampanie reklamowe i strategie sprzedażowe to jedna ze specjalizacji firmy. Eksperci z zakresu druku, cięcia, reklamy,
              poligrafii Solution Box to ludzie z innowacyjnymi pomysłami na kreatywne rozwiązania oparte na obecnych trendach rynkowych. Jeśli chcesz poznać
              całą ofertę i skorzystać z innych świadczonych przez nas usług koniecznie skontaktuj się z naszym doradcą.
            </p>
          </SectionWithImage>
        </div>
        <LionOnLeftSection variant="LIGHT_BLUE">
          <SectionWithImage img="/imgs/o-firmie-2.webp" imgAlt="O firmie 2" imgPosition="RIGHT" imgStyles={{ width: 380 }}>
            <h2>Więzy biznesowe, które są esencją naszego istnienia</h2>
            <p>
              W Solution Box od samego początku utrzymujemy rodzinne podejście do relacji związanych ze środowiskiem B2B, na którym opieramy całą swoją
              działalność gospodarczą. Szacunek dla Partnerów, szczerość, zaufanie i altruizm są kluczowymi elementami naszego wkładu w świat biznesu. W naszej
              pracy kierujemy się zasadą win-win i wierzymy, że wsparcie, które przekazujemy klientom, pozwoli im osiągnąć szczyty finansowe. Nasi Partnerzy są
              aktywni w całym zakresie przedsiębiorczości: od jednoosobowych działalności gospodarczych po duże krajowe przedsiębiorstwa. W Solution Box
              połączyliśmy ekspertyzę wielu fachowców, zachowując przy tym elastyczność, adaptacyjność i ludzkie podejście. Kreujemy swoją filozofię na
              tworzenie wartości dodanej dla klienta, oferując szeroką gamę zintegrowanych usług o wysokiej jakości po konkurencyjnych cenach.
              <br />
              <br />
              Nasza wizja, misja i wartości to kompas Solution Box, który przyczynia się do osiągania celów biznesowych i trwałej doskonałości. Wspólnie
              budujemy solidne fundamenty dla samej firmy, Partnerów, pracowników, a także dla całej polskiej strefy gospodarczej.
            </p>
          </SectionWithImage>
        </LionOnLeftSection>
        <div className="container">
          <SectionWithImage img="/imgs/o-firmie-3.webp" imgAlt="O firmie 3" imgPosition="LEFT" imgStyles={{ width: 380 }}>
            <p>
              W Solution Box wierzymy, że najnowocześniejsze rozwiązania druku UV, druku 3D, cięcia CNC, frezowania i wsparcia serwisowego mogą być
              ogólnodostępne i zapewniać natychmiastowe, praktyczne i niezbędne wsparcie dla firm i przedsiębiorstw. Zdajemy sobie sprawę, że zdrowa tendencja
              wzrostowa w przedsiębiorstwach wymaga zarówno zintegrowanych małych kroków, jak również trwałości i skalowalności w dłuższej perspektywie. W tych
              dziedzinach posiadamy doświadczenie i wiedzę, aby nie tylko gwarantować konstruktywne wsparcie, ale także emanować naszym know-how i rozwiązaniami
              na skalę krajową.
            </p>
            <strong className={styles.accent}>
              Naszym celem jest pomaganie firmom w równym funkcjonowaniu na rynku i tworzenie długoterminowej współpracy strategicznej opartej na zaufaniu i
              trwałych relacjach.
            </strong>
            <div className={styles.btnDiv}>
              <Button variant="ORANGE" linkTo="/documents/kodeks_etyki.pdf" openLinkInNewTab>
                Kodek Etyki
              </Button>
            </div>
          </SectionWithImage>
        </div>
      </section>
    </>
  );
}
