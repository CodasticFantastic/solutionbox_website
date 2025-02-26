import styles from "./pageHeader.module.scss";
import Image from "next/image";
import Button from "../../core/button/Button";
import Link from "next/link";
import PageHeaderNavLink from "./pageHeaderNavLink/PageHeaderNavLink";
import PageHeaderMobileMenu from "./pageHeaderMobileMenu/PageHeaderMobileMenu";

const menuConfig = [
  { text: "Home", link: "/" },
  { text: "Produkty", link: "/produkty" },
  { text: "Usługi", link: "/uslugi" },
  { text: "Dlaczego my?", link: "/dlaczego-my" },
  { text: "Wsparcie", link: "/wsparcie" },
  { text: "Kontakt", link: "/kontakt" },
];

export default function PageHeader() {
  return (
    <header className={`${styles.pageHeader} container`}>
      <Link href="/" className={styles.logo}>
        <Image src="/branding/solution-box-logo.svg" alt="Solution Box" width={50} height={78} />
      </Link>
      <div className={styles.desktopMenu}>
        <nav>
          {menuConfig.map(({ text, link }) => (
            <PageHeaderNavLink key={text} linkTo={link} display="DESKTOP">
              {text}
            </PageHeaderNavLink>
          ))}
        </nav>
        <Button variant="DARK" linkTo="tel:+48693200900" customStyles={{ padding: "12px 24px" }}>
          Skontaktuj sie z nami
        </Button>
      </div>
      <div className={styles.mobileMenu}>
        <PageHeaderMobileMenu menuConfig={menuConfig} />
      </div>
    </header>
  );
}
