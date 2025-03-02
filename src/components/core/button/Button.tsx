import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "ORANGE" | "DARK";
  customStyles?: React.CSSProperties;
  linkTo?: string;
  openLinkInNewTab?: boolean;
}

export default function Button({ children, variant, linkTo, openLinkInNewTab, customStyles, ...props }: ButtonProps) {
  const variantClass = variant === "DARK" ? styles.btnDark : styles.btnOrange;

  if (linkTo) {
    return (
      <Link href={linkTo} target={openLinkInNewTab ? "_blank" : undefined}>
        <button className={`${styles.btn} ${variantClass}`} style={customStyles} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${styles.btn} ${variantClass}`} style={customStyles} {...props}>
      {children}
    </button>
  );
}
