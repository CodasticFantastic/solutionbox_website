"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { MdCategory, MdDevicesOther, MdLogout } from "react-icons/md";
import Link from "next/link";
import { signOut } from "next-auth/react";

const adminNavbarConfig = [
  {
    title: "Kategorie",
    href: "/admin/kategorie",
    icon: MdCategory, // Add your custom icon component here
  },
  {
    title: "Produkty",
    href: "/admin/produkty",
    icon: MdDevicesOther, // Add your custom icon component here
  },
];

export default function AdminNavbar() {
  return (
    <aside className={styles.adminNavbar}>
      <div className={styles.navbarTop}>
        <Link href="/">
          <Image
            src="/branding/solution-box-logo.svg"
            alt="Solution Box"
            width={32}
            height={40}
          />
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        {adminNavbarConfig.map(({ title, href, icon: Icon }) => (
          <Link key={title} href={href} className={styles.navbarTile}>
            <Icon size={20} />
            <p className={styles.navbarTileTitle}>{title}</p>
          </Link>
        ))}
      </div>
      <div className={styles.navbarBottom}>
        <div className={styles.navbarTile} onClick={() => signOut()}>
          <MdLogout size={20} rotate={180} />
          <p className={styles.navbarTileTitle}>Wyloguj</p>
        </div>
      </div>
    </aside>
  );
}
