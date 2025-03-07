import ContactForm from "@/components/website/core/contactForm/ContactForm";
import styles from "./contactFormSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ContactFormSection() {
  return (
    <>
      <section className={styles.contactFormSection}>
        <div className={`${styles.sectionContainer} container`}>
          <div className={styles.left}>
            <strong className={styles.title}>SolutionBox Sp. z o.o.</strong>
            <div className={styles.tile}>
              <Image className={styles.icon} src="/icons/location.svg" width={16} height={16} alt="Telefon" />
              <div className={styles.content}>
                <strong>Siedziba spółki</strong>
                <p>ul Krótka 3B,</p>
                <p>05-090 Raszyn</p>
                <p>NIP: 5223223834</p>
              </div>
            </div>
            <div className={styles.tile}>
              <Image className={styles.icon} src="/icons/phone.svg" width={16} height={16} alt="Telefon" />
              <Link href="tel: +48 693 200 900" className={styles.link}>
                +48 693 200 900
              </Link>
            </div>
            <div className={styles.tile}>
              <Image className={styles.icon} src="/icons/mail.svg" width={16} height={16} alt="Telefon" />
              <Link href="mailto:biuro@solutionbox.pl" className={styles.link}>
                biuro@solutionbox.pl
              </Link>
            </div>
            <strong>Godziny otwarcia biura</strong>
            <p>Pon-Pt: 09:00 - 16:00</p>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.9186372303498!2d20.916428576909787!3d52.153989363263044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193388979f0d8b%3A0x1b45d335f70f6bd7!2sKr%C3%B3tka%203B%2C%2005-090%20Raszyn!5e0!3m2!1spl!2spl!4v1740928730143!5m2!1spl!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
