import { PageHeaderBackgroundColor } from "@/components/website//layout/pageHeader/pageHeader.types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Nie znaleziono strony",
};

export default function NotFound() {
  return (
    <div data-nav-bg-color={`${PageHeaderBackgroundColor.DARK}`}>
      <main className="pageNotFound">
        <h1>
          404 <br />
          Nie znaleziono strony
        </h1>
        <Link href="/">Przejdź na stronę główną</Link>
      </main>
    </div>
  );
}
