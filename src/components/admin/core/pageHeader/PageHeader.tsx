import styles from "./pageHeader.module.scss";

interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <h1>{title}</h1>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
