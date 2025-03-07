import styles from "./companyMissionSection.module.scss";

export default function CompanyMissionSection() {
  return (
    <section className={styles.companyMissionSection}>
      <div className={`${styles.sectionContainer} container`}>
        <div className={styles.left}>
          <MissionTile id="01" content="Podejmujemy trudne wyzwania, koncentrujemy się na osiąganiu celów i zawsze dbamy o komfort pracy" />
          <MissionTile
            id="02"
            content="Nasze dążenie do bycia konkurencyjnym jest w całości oparte na solidnym know-how, umiejętnościach, zaangażowaniu naszych ludzi i ciągłych inwestycjach w trwałe relacje z Partnerami"
          />
          <MissionTile
            id="03"
            content="Szanujemy Partnerów, aktywnie pomagamy rozwijać ich przedsiębiorstwa, zapewniamy szczerą komunikację i wszelkie niezbędne narzędzia na wszystkich możliwych szczeblach współpracy"
          />
          <MissionTile
            id="04"
            content="Pracując zespołowo, osiągamy wyniki, które na pierwszy rzut oka wydają się niemożliwe. Jednocześnie doceniamy doskonałość na poziomie indywidualnym i czerpiemy z niej jak najwięcej korzyści"
          />
          <MissionTile
            id="05"
            content="Ciągły rozwój jest integralną częścią naszej ewolucji równolegle z wykonywaniem bieżącej pracy. Nasi pracownicy są studnią pomysłów, które z powodzeniem wdrażamy, udoskonalając nasze funkcjonowanie"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.movableContainer}>
            <h2>Misja firmy</h2>
            <p>Wartości, które wyznajemy w Solution Box</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MissionTileProps {
  id: string;
  content: string;
}

function MissionTile({ id, content }: MissionTileProps) {
  return (
    <div className={styles.missionTile}>
      <p className={styles.number}>{id}</p>
      <p>{content}</p>
    </div>
  );
}
