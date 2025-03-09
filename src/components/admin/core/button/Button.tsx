import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "PRIMARY" | "INFO" | "DANGER" | "ADD";
  customStyles?: React.CSSProperties;
  linkTo?: string;
  openLinkInNewTab?: boolean;
}

export default function Button({
  children,
  variant,
  linkTo,
  openLinkInNewTab,
  customStyles,
  ...props
}: ButtonProps) {
  let btnVariant;

  switch (variant) {
    case "DANGER":
      btnVariant = styles.btnDanger;
      break;
    case "INFO":
      btnVariant = styles.btnInfo;
      break;
    case "ADD":
      btnVariant = styles.btnAdd;
      break;
    default:
      btnVariant = styles.btnPrimary;
      break;
  }

  if (linkTo) {
    return (
      <Link href={linkTo} target={openLinkInNewTab ? "_blank" : undefined}>
        <button
          className={`${styles.btn} ${btnVariant}`}
          style={customStyles}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.btn} ${btnVariant}`}
      style={customStyles}
      {...props}
    >
      {children}
    </button>
  );
}
