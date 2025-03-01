import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/scss/globals.scss";
import PageHeader from "@/components/layout/pageHeader/PageHeader";
import PageFooter from "@/components/layout/pageFooter/PageFooter";

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

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
    <html lang="pl">
      <body className={`${manropeFont.variable}`}>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
