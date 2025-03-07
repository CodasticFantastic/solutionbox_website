import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/scss/globals.scss";

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solution Box Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${manropeFont.variable}`}>{children}</body>
    </html>
  );
}
