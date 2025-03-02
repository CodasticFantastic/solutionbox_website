import { PageHeaderBackgroundColor } from "@/components/layout/pageHeader/pageHeader.types";
import Link from "next/link";

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
