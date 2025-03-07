import type { Metadata } from "next";
import { auth } from "@/app/auth/auth";
// import SidebarNavigation from "@/components/admin/layout/sidebarNavigation/SidebarNavigation";
import styles from "@/scss/adminGlobals.module.scss";
import ProtectedAdminWrapper from "@/components/admin/layout/protectedAdminWrapper";
import AdminNavbar from "@/components/admin/layout/adminNavbar/AdminNavbar";

export const metadata: Metadata = {
  title: "Solution Box Admin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <ProtectedAdminWrapper session={session}>
      <main className={styles.adminPages}>
        <AdminNavbar />
        <div className={styles.mainContent}>{children}</div>
      </main>
    </ProtectedAdminWrapper>
  );
}
