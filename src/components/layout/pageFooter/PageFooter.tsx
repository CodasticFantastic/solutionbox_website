import Image from "next/image";
import styles from "./pageFooter.module.scss";
import Link from "next/link";
import Button from "@/components/core/button/Button";

export default function PageFooter() {
  return (
    <footer className={styles.pageFooter}>
      {/* Contact Us */}
      <section className={styles.contactUsSection}>
        <div className="container">
          <p className={styles.accent}>Dla naszych klientów dostępne jest wsparcie 24/7</p>
          <h2>Jak się z nami skontaktować?</h2>
          <div className={styles.contactInfo}>
            <Link href="tel: +48 693 200 900" className={styles.phone}>
              +48 693 200 900
            </Link>
            <Link href="mailto:biuro@solutionbox.pl" className={styles.content}>
              biuro@solutionbox.pl
            </Link>
          </div>
          <Button variant="ORANGE" linkTo="/kontakt">
            Formularz kontaktowy
          </Button>
        </div>
      </section>
      {/* Main Content */}
      <div className="container">
        <div className={styles.mainFooter}>
          <Image src="/branding/solution-box-logo.svg" alt="Solution Box" width={50} height={78} />
          <div className={styles.col}>
            <p className={styles.title}>Siedziba spółki</p>
            <p className={styles.content}>
              Solution Box Sp. z o.o.
              <br />
              ul. Krótka 3B,
              <br />
              05-090 Raszyn
            </p>
            <p className={styles.contentTime}>Pon - Pt: 09:00 - 16:00</p>
          </div>
          <div className={styles.col}>
            <p className={styles.title}>Solution Box</p>
            <Link href="/uslugi" className={styles.content}>
              Usługi
            </Link>
            <Link href="/o-firmie" className={styles.content}>
              O firmie
            </Link>
            <Link href="/dlaczego-my" className={styles.content}>
              Dlaczego my
            </Link>
          </div>
          <div className={styles.col}>
            <p className={styles.title}>Informacje</p>
            <Link href="/rodo" className={styles.content}>
              RODO
            </Link>
            <Link href="/documents/kodeks_etyki.pdf" className={styles.content} target="_blank">
              Kodeks etyki
            </Link>
          </div>
          <div className={styles.col}>
            <p className={styles.title}>Kontakt</p>
            <Link href="tel:+48693200900" className={styles.content}>
              +48 693 200 900
            </Link>
            <Link href="mailto:biuro@solutionbox.pl" className={styles.content}>
              biuro@solutionbox.pl
            </Link>
          </div>
        </div>
      </div>
      <hr />
      {/* Copyright */}
      <div className="container">
        <div className={styles.copyright}>
          <p>Copyright © 2025 solutionbox.pl</p>
        </div>
      </div>
    </footer>
  );
}
