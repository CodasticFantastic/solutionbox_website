import styles from "@/scss/components/core/button.module.scss";
import Link from "next/link";

interface Button {
  children: React.ReactNode;
  variant: "ORANGE" | "DARK";
  customStyles?: Record<string, string>;
  linkTo?: string;
  openLinkInNewTab?: true;
}

export default function Button({ children, variant, linkTo, openLinkInNewTab, customStyles }: Button) {
  let variantClass: string;

  switch (variant) {
    case "DARK":
      variantClass = styles.btnDark;
      break;
    case "ORANGE":
      variantClass = styles.btnOrange;
      break;
  }

  return (
    <>
      {linkTo ? (
        <Link href={linkTo} target={openLinkInNewTab && "_blank"}>
          <button className={`${styles.btn} ${variantClass}`} style={customStyles}>
            {children}
          </button>
        </Link>
      ) : (
        <button className={`${styles.btn} ${variantClass}`} style={customStyles}>
          {children}
        </button>
      )}
    </>
  );
}
