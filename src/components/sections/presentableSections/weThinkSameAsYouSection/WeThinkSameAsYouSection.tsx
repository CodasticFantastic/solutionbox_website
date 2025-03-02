import Image from "next/image";
import LionOnLeftSection from "../../basicSections/lionOnLeftSection/LionOnLeftSection";
import styles from "./weThinkSameAsYouSection.module.scss";

export default function WeThinkSameAsYouSection() {
  return (
    <LionOnLeftSection className={styles.weThinkSameAsYouSection}>
      <div className={`${styles.sectionContainer} container`}>
        <div className={styles.left}>
          <h2>W Solution Box myślimy tak samo, jak Ty</h2>
          <p>
            Lata doświadczeń i zaangażowanie w wymagające projekty stawiają nas na wysokiej pozycji wśród konkurencyjnych firm technologicznych.
            <br />
            <br />
            Zapewniamy wsparcie, które w nowoczesny sposób, z dużą wiedzą i apetytem na rozwiązanie każdego problemu, wyróżnia nas spośród wielu konkurentów z
            branży.
            <br />
            <br />
            Naszym celem jest przyczynić się do właściwego przygotowania naszych klientów, aby pomóc im sprostać w nowych wyzwaniach i współczesnych wymaganiach
            środowiska biznesowego.
            <br />
            <br />
            Połączenie różnych specjalizacji z know-how i doświadczeniem naszej kadry pomaga w nieustannym dążeniu do ewolucji dostarczanych przez nas rozwiązań
            – to gwarancja niezawodności efektu. Celem Solution Box jest oferowanie klientom możliwości.
          </p>
        </div>
        <div className={styles.right}>
          <SectionTile content="Zwiększonej sprzedaży i rentowności" />
          <SectionTile content="Sprawnego i uporządkowanego działania firmy" />
          <SectionTile content="Zwiększonej konkurencyjności" />
          <SectionTile content="Wsparcia na zasadzie partnerstwa i relacji opartej na zaufaniu" />
        </div>
      </div>
    </LionOnLeftSection>
  );
}

interface SectionTileProps {
  content: string;
}

function SectionTile({ content }: SectionTileProps) {
  return (
    <div className={styles.sectionTile}>
      <div className={styles.imgContainer}>
        <Image src="/icons/check-light.svg" width={24} height={24} alt="Check" />
      </div>
      <p>{content}</p>
    </div>
  );
}
