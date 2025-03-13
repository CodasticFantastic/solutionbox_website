import { PageHeaderBackgroundColor } from "@/components/website/layout/pageHeader/pageHeader.types";
import BasicHeroSectionOnlyText from "@/components/website/sections/basicSections/basicHeroSectionOnlyText/BasicHeroSectionOnlyText";
import SectionDividerOrangeCircle from "@/components/website/sections/basicSections/sectionDividerOrangeCircle/SectionDividerOrangeCircle";
import Link from "next/link";

export default function Rodo() {
  return (
    <main>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <BasicHeroSectionOnlyText>
          <h1>Rodo</h1>
          <p>Klauzula Informacyjna</p>
        </BasicHeroSectionOnlyText>
        <SectionDividerOrangeCircle variant="WHITE" />
      </div>
      <div data-nav-bg-color={`${PageHeaderBackgroundColor.DEFAULT}`}>
        <div
          className="container"
          style={{ paddingTop: 36, paddingBottom: 36 }}
        >
          <p>
            Zgodnie z art. 13 ust. 1 rozporządzenia Parlamentu Europejskiego i
            Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych) (RODO), informuję, iż:
          </p>
          <ol style={{ marginLeft: 24, marginTop: 24 }}>
            <li>
              Administratorem Twoich danych osobowych jest Solution Box Sp. z
              o.o. z siedzibą w 02-137 Warszawie, ul. Radarowa 9/12, wpisana do
              rejestru przedsiębiorców Sądu Rejonowego dla m. st. Warszawy w
              Warszawie, XIV Wydział Gospodarczy Krajowego Rejestru Sądowego pod
              numerem KRS: 0000966916, REGON: 521816103, NIP: 5223223834,
              kapitał zakładowy 5.000,00 zł, zwana dalej Spółką lub Solution Box
              Sp. z o.o.
            </li>
            <li>
              W razie jakichkolwiek wątpliwości związanych z przetwarzaniem
              dotyczących Twoich danych, proszę nie wahać się skontaktować z nim
              pod adresem: biuro@solutionbox.pl.
            </li>
            <li>
              Gdy korzystasz z naszych serwisów, danymi osobowymi, które
              przetwarzamy mogą być, np. adres IP Twojego urządzenia, dane
              pozyskiwane na podstawie plików cookies lub podobnych mechanizmów
              zapisywania informacji w urządzeniach, o ile pozwolą one na
              zidentyfikowanie Ciebie. Twoje dane osobowe przetwarzane będą aby
              umożliwić korzystanie z serwisów prowadzonych przez Spółkę, aby
              zapewnić obsługę Twojego konta i kontakt z nami, zapewnić
              funkcjonalność oferowanych usług, w tym rozwiązywać problemy
              techniczne, zrealizować umowy zawarte z Tobą, obsłużyć reklamacje
              dotyczące działania, dopasowywać wyświetlane treści i reklamy do
              Twoich zainteresowań, prowadzić pomiary jakości i skuteczności,
              ulepszać treści oraz usługi, informować Cię o treściach i usługach
              Spółki, udostępniać w serwisach przestrzeń reklamową, prowadzić
              działania marketingu bezpośredniego, zapewniać bezpieczeństwo
              przetwarzania informacji, zarządzać systemami teleinformatycznymi
              oraz ochroną lub dochodzeniem roszczeń.
            </li>
            <li>
              Podstawą prawną do przetwarzania Twoich danych osobowych mogą być:
              art. 6 ust. 1 lit. a, c i f rozporządzenia Parlamentu
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
              sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przepływu takich danych oraz
              uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
              danych) przy czym prawnie uzasadniony interes Spółki obejmuje
              ulepszanie usług, zapewnienie ich najlepszej jakości oraz
              informowanie o nich użytkowników.
            </li>
            <li>
              Odbiorcami Twoich danych osobowych mogą być partnerzy i podmioty
              współpracujące ze Spółką. Spółka, co do zasady nie udostępnia
              osobom trzecim Twoich danych osobowych, za wyjątkiem sytuacji, w
              których Spółka posiada ku temu podstawę prawną, w tym na żądanie
              podmiotów uprawnionych, lub kiedy jest to niezbędne do wykonania
              usług oferowanych przez Spółkę.
            </li>
            <li>
              Część naszych usługodawców może przechowywać dane użytkowników
              serwisów poza terytorium Europejskiego Obszaru Gospodarczego. W
              takich przypadkach dane użytkowników mogą być przechowywane w
              krajach, które zapewniają adekwatny poziom ochrony danych
              osobowych, lub w krajach, które takiego poziomu nie zapewniają. W
              tym drugim przypadku Spółkę zabezpiecza Twoje dane poprzez
              zawarcie z usługodawcami Spółkę umów zawierających tzw.
              Standardowe Klauzule Umowne zaakceptowane przez Komisję
              Europejską, które dają gwarancję adekwatnego zabezpieczenia danych
              użytkowników w krajach trzecich, korzysta z programu unijno –
              amerykańskiego programu Privacy Shield (np. w przypadku usługi
              Goolge reCAPTCHA) lub innych podstaw transferu danych osobowych.
            </li>
            <li>
              Spółka przechowuje Twoje dane osobowe przez czas obowiązywania
              umowy zawartej z Tobą, a także – po jej zakończeniu – przez czas,
              w jakim możliwe jest dochodzenie roszczeń w związku z wykonywaniem
              umowy, maksymalnie 10 lat od dnia zakończenia wykonywania umowy.
              Ponadto, Spółka przechowuje Twoje dane dla celów podatkowych i
              rachunkowych przez okres 5 lat po zakończeniu roku, w którym miało
              miejsce zdarzenie finansowe. Spółka przechowuje Twoje dane osobowe
              dla celów marketingowych przez okres przez czas istnienia podstawy
              prawnej i celu przetwarzania danych. Spółka przechowuje dane dla
              celów statystycznych i archiwalnych przez okres przez czas
              istnienia podstawy prawnej i celu przetwarzania danych.
            </li>
            <li>
              Możesz żądać od Spółka: dostępu do swoich danych osobowych, ich
              sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia,
              oraz niepodlegania zautomatyzowanemu podejmowaniu decyzji, w tym
              profilowaniu, a także masz prawo wyrazić sprzeciw wobec
              przetwarzania Twoich danych osobowych. Uprawnienia te możesz
              wykonać, gdy: w odniesieniu do żądania sprostowania danych: dane
              są nieprawidłowe lub niekompletne; w odniesieniu do żądania
              usunięcia danych: dane nie są już niezbędne do celów, dla których
              zostały zebrane przez Spółkę; cofniesz swoją zgodę na
              przetwarzanie danych; zgłosisz uprzednio sprzeciw wobec
              przetwarzania tych danych; dane są przetwarzane niezgodnie z
              prawem; dane powinny być usunięte w celu wywiązania się z
              obowiązku wynikającego z przepisu prawa; lub dane zostały zebrane
              w związku ze świadczeniem usług drogą elektroniczną oferowanych
              dziecku; w odniesieniu do żądania ograniczenia przetwarzania
              danych: dane są nieprawidłowe – na okres pozwalający Spółce
              sprawdzić prawidłowość Twoich danych; dane są przetwarzane
              niezgodnie z prawem, ale nie będziesz chciał/a, aby zostały
              usunięte; Twoje dane nie są już potrzebne Spółce, ale mogą być
              potrzebne Tobie do obrony lub dochodzenia roszczeń; lub wniesiesz
              sprzeciw wobec przetwarzania danych – do czasu ustalenia, czy
              prawnie uzasadnione podstawy są nadrzędne wobec podstawy
              sprzeciwu; w odniesieniu do żądania przeniesienia danych:
              przetwarzanie danych odbywa się na podstawie Twojej zgody lub
              umowy zawartej z Tobą oraz przetwarzanie to odbywa się w sposób
              automatyczny. Masz prawo wnieść skargę w związku z przetwarzaniem
              Twoich danych osobowych przez Spółkę do Prezesa Urzędu Ochrony
              Danych Osobowych.
            </li>
            <li>
              Podanie przez Ciebie danych osobowych jest wymogiem ustawowym
              tylko w zakresie wynikającym z przepisów prawa podatkowego lub
              rachunkowego, gdy dokonujemy rozliczenia płatności uzyskanych od
              Ciebie. Natomiast wymogiem zawarcia umowy ze Solution Box Sp. z
              o.o. (założenia konta Solutionbox.pl) jest podanie hasła oraz
              adresu e-mail. Jeśli nie podasz nam wszystkich tych informacji o
              sobie, nie będziemy mogli założyć dla Ciebie konta Solutionbox.pl,
              co ograniczy Ci możliwość korzystania z niektórych usług
              Solutionbox.pl. W pozostałym zakresie podanie danych jest
              dobrowolne.
            </li>
            <li>
              Profilowanie danych osobowych rozumiane jest jako zautomatyzowane
              przetwarzanie Twoich danych, które polega na ich wykorzystaniu do
              oceny niektórych czynników dotyczących, w szczególności do analizy
              lub prognozy aspektów dotyczących efektów Twoje pracy, sytuacji
              ekonomicznej, zdrowia, osobistych preferencji, zainteresowań,
              wiarygodności, zachowania, lokalizacji lub przemieszczania się. Na
              podstawie monitorowania Twojej aktywności w serwisach
              Solutionbox.pl wykonujemy analizy, których skutkiem jest:
              optymalizacja serwisów (m. in. wyglądu, treści, ofert), pod kątem
              preferencji użytkowników; rekomendowanie treści zgodnych z Twoim
              profilem oglądalności; emisja reklam skierowanych do grup
              odbiorców, do których zostałeś zakwalifikowany; rekomendowanie
              ofert dopasowanych do Twojego profilu oglądalności i zachowań. Nie
              wykorzystujemy jednak tych danych do zautomatyzowanego
              podejmowania decyzji wobec Ciebie, które mogłyby wpłynąć na Twoje
              prawa.
            </li>
            <li>
              Masz prawo wnieść sprzeciw wobec przetwarzania danych osobowych,
              gdy: przetwarzanie danych osobowych odbywa się na podstawie
              prawnie uzasadnionego interesu, lub dla celów statystycznych, a
              sprzeciw jest uzasadniony Twoją szczególną sytuacją, dane osobowe
              przetwarzane są na potrzeby marketingu bezpośredniego.
            </li>
            <li>
              Potwierdzając zapoznanie się z niniejszą informacją, poprzez
              kliknięcie na <Link href="/">&quot;Przejdź do serwisu&quot;</Link>{" "}
              lub zamknięcie tego okna jednocześnie zgadzasz się na to, aby
              Twoje dane osobowe były przetwarzane w taki sposób jak tu zostało
              opisane.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
