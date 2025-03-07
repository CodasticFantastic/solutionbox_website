import type { Metadata } from "next";
import PageHeader from "@/components/website//layout/pageHeader/PageHeader";
import PageFooter from "@/components/website//layout/pageFooter/PageFooter";

export const metadata: Metadata = {
  title: {
    default: "Solution Box",
    template: "%s - Solution Box",
  },
  description:
    "W Solution Box wierzymy, że najnowocześniejsze rozwiązania druku UV, druku 3D, cięcia CNC, frezowania i wsparcia serwisowego mogą być ogólnodostępne i zapewniać...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
