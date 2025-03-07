"use client";

import Link from "next/link";
import styles from "./pageHeaderNavLink.module.scss";
import { usePathname } from "next/navigation";

interface PageHeaderNavLinkProps {
  children: React.ReactNode;
  linkTo: string;
  display: "DESKTOP" | "MOBILE";
  onAction?: () => void;
}

export default function PageHeaderNavLink({ children, linkTo, display, onAction }: PageHeaderNavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={linkTo}
      className={(display === "DESKTOP" ? styles.navLinkDesktop : styles.navLinkMobile) + " " + (pathName === linkTo ? styles.active : "")}
      onClick={onAction}
    >
      {children}
    </Link>
  );
}
