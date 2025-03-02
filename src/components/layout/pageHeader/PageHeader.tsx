"use client";

import { useEffect, useState } from "react";
import styles from "./pageHeader.module.scss";
import Image from "next/image";
import Button from "../../core/button/Button";
import Link from "next/link";
import PageHeaderNavLink from "./pageHeaderNavLink/PageHeaderNavLink";
import PageHeaderMobileMenu from "./pageHeaderMobileMenu/PageHeaderMobileMenu";
import { PageHeaderBackgroundColor, PageHeaderConfig } from "./pageHeader.types";

const menuConfig: PageHeaderConfig[] = [
  { text: "Home", link: "/" },
  { text: "Produkty", link: "/produkty" },
  { text: "Usługi", link: "/uslugi" },
  { text: "Dlaczego my?", link: "/dlaczego-my" },
  { text: "Kontakt", link: "/kontakt" },
];

export default function PageHeader() {
  const [sectionBackgroundColor, setSectionBackgroundColor] = useState<PageHeaderBackgroundColor>(PageHeaderBackgroundColor.DEFAULT);

  // Detect section color below header based on "data-nav-bg-color" attribute
  useEffect(() => {
    function findSectionBelowFixedElement() {
      const fixedElement = document.querySelector(".fixedElement");

      if (!fixedElement) return null;
      const fixedRect = fixedElement.getBoundingClientRect();

      const sections = document.querySelectorAll("div[data-nav-bg-color]");

      if (sections.length === 0) setSectionBackgroundColor(PageHeaderBackgroundColor.DEFAULT);

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (fixedRect.bottom >= rect.top && fixedRect.bottom <= rect.bottom) {
          const setColor = section.getAttribute("data-nav-bg-color");
          switch (setColor) {
            case PageHeaderBackgroundColor.DEFAULT:
              setSectionBackgroundColor(PageHeaderBackgroundColor.DEFAULT);
              break;
            case PageHeaderBackgroundColor.DARK:
              setSectionBackgroundColor(PageHeaderBackgroundColor.DARK);
              break;
            default:
              setSectionBackgroundColor(PageHeaderBackgroundColor.DEFAULT);
          }
        }
      }
    }

    findSectionBelowFixedElement();
    window.addEventListener("scroll", findSectionBelowFixedElement);

    return () => {
      window.removeEventListener("scroll", findSectionBelowFixedElement);
    };
  }, []);

  return (
    <header className={`${styles.pageHeader} fixedElement ${sectionBackgroundColor === "DARK" ? styles.dark : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
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
            Skontaktuj się z nami
          </Button>
        </div>
        <div className={styles.mobileMenu}>
          <PageHeaderMobileMenu menuConfig={menuConfig} />
        </div>
      </div>
    </header>
  );
}
