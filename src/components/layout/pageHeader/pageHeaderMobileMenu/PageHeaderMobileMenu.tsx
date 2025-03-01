"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./pageHeaderMobileMenu.module.scss";
import PageHeaderNavLink from "../pageHeaderNavLink/PageHeaderNavLink";
import Button from "@/components/core/button/Button";
import { PageHeaderConfig } from "../pageHeader.types";

export default function PageHeaderMobileMenu({ menuConfig }: { menuConfig: PageHeaderConfig[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Image src="/icons/menu-icon-orange.svg" width={26} height={26} alt="Menu" onClick={() => setIsMenuOpen((prev) => !prev)} />
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        {menuConfig.map(({ text, link }) => (
          <PageHeaderNavLink key={text} linkTo={link} display="MOBILE" onAction={() => setIsMenuOpen(false)}>
            {text}
          </PageHeaderNavLink>
        ))}
        <div className={styles.mobileMenuFooter}>
          <Button variant="DARK" linkTo="tel:+48693200900" customStyles={{ padding: "12px 24px" }}>
            Skontaktuj sie z nami
          </Button>
        </div>
      </div>
    </>
  );
}
