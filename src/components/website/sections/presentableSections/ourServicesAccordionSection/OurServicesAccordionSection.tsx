import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import LionOnLeftSection from "../../basicSections/lionOnLeftSection/LionOnLeftSection";
import Image from "next/image";
import styles from "./ourServicesAccordionSection.module.scss";

export default function OurServicesAccordionSection() {
  return (
    <LionOnLeftSection>
      <div className="container">
        <Accordion.Root
          className={styles.AccordionRoot}
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {/* Item 1 */}
          <Accordion.Item className={styles.AccordionItem} value="item-1">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>
                  Precyzyjne Wycinanie Formatek – Twój Projekt, Nasza
                  Technologia
                </p>
                <p className={styles.accent}>Solution Box Technologie</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Potrzebujesz arkuszy A4 z pleksi? A może drewnianych kół o
                średnicy 15 cm? W Solution Box realizujemy każdy projekt,
                niezależnie od stopnia skomplikowania. Nasza zaawansowana
                technologia pozwala na precyzyjne cięcie dowolnych kształtów, a
                jedynym ograniczeniem jest Twoja wyobraźnia! <br />
                <br /> Oferujemy profesjonalne usługi wycinania formatek z
                szerokiej gamy materiałów, takich jak: Aluminium, Drewno, Folie
                magnetyczne, Guma, Karbon-kevlar, Kompozyty, Materiały w
                rolkach, Mikroten, Mosiądz, Papier, PET – Polietylen, Piana,
                Płótno, Płyty MDF, Polietylen-PE, Polipropylen-PP, Polistyren,
                Poliuretan, Poliwęglan, Skóry, Spienione PVC –
                Forex/Foamex/Simocel/Komacel, Stal, Stal nierdzewna, Tablice
                PIR, Tektura, Tworzywa PMMA, Winyl, Żywica fenolowa.
                <br />
                <br /> Dzięki zastosowaniu nowoczesnych maszyn możemy wykonywać
                formatki o dowolnych kształtach i rozmiarach, zapewniając
                najwyższą jakość i precyzję. Nasze elementy są idealne do
                zastosowań w ploterach laserowych, drukarkach UV, grawerkach
                oraz wielu innych branżach przemysłowych i kreatywnych.
                <br />
                <br />
                Skontaktuj się z nami i sprawdź, jak możemy zrealizować Twój
                projekt!
              </p>
              {/* <Image
                className={styles.imgContent}
                src="/imgs/example.jpg"
                alt="ourServices-1"
                width={1280}
                height={850}
              /> */}
            </AccordionContent>
          </Accordion.Item>
          {/* Item 2 */}
          <Accordion.Item className={styles.AccordionItem} value="item-2">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Usługi Wsparcia Serwisowego</p>
                <p className={styles.accent}>Solution Box Wsparcie</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Jako autoryzowany serwis wszystkich oferowanych przez nas
                urządzeń zapewniamy kompleksowe wsparcie techniczne na
                najwyższym poziomie. Dysponujemy fachową wiedzą, bezpośrednim
                wsparciem producentów oraz pełnym dostępem do oryginalnych
                części zamiennych i materiałów eksploatacyjnych.
              </p>
              <ul>
                <li>
                  ✅ Naprawy i konserwację urządzeń zarówno w naszej siedzibie,
                  jak i u klienta
                </li>
                <li>✅ Szybką diagnostykę i usuwanie usterek</li>
                <li>
                  ✅ Stałe wsparcie techniczne w ramach dedykowanych pakietów
                  serwisowych
                </li>
                <li>✅ Okresowe przeglądy i konserwację sprzętu</li>
              </ul>
              <p>
                <br />
                Dysponujemy jednym z najnowocześniejszych centrów napraw
                serwisowych, wyposażonym w zaawansowane narzędzia diagnostyczne
                i naprawcze. Nasz magazyn zawiera szeroki asortyment
                oryginalnych części zamiennych, co pozwala nam na błyskawiczne
                usuwanie awarii. Dzięki zautomatyzowanym systemom organizacji
                pracy oraz wysoko wykwalifikowanej kadrze techników gwarantujemy
                szybkie i niezawodne usługi serwisowe.
              </p>
              {/* <Image
                className={styles.imgContent}
                src="/imgs/example.jpg"
                alt="ourServices-1"
                width={1280}
                height={850}
              /> */}
            </AccordionContent>
          </Accordion.Item>
          {/* Item 3 */}
          <Accordion.Item className={styles.AccordionItem} value="item-3">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>
                  Finansowanie leasingu maszyn CNC i drukarek UV – prosty sposób
                  na rozwój Twojej firmy
                </p>
                <p className={styles.accent}>Solution Box Finanse</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Inwestycja w nowoczesne technologie, takie jak maszyny CNC czy
                drukarki UV, może być kluczowa dla rozwoju Twojej firmy. Jeśli
                jednak zakup tych urządzeń za gotówkę wydaje się dużym
                obciążeniem finansowym, leasing może być idealnym rozwiązaniem.
              </p>
              <strong>Dlaczego leasing?</strong>
              <p>
                Leasing to forma finansowania, która pozwala na korzystanie z
                maszyn bez konieczności ich natychmiastowego zakupu. Dzięki temu
                możesz szybko wprowadzać nowe technologie do swojej firmy,
                jednocześnie rozkładając koszty na wygodne, miesięczne raty.
                <br />
                <br />
              </p>

              <strong>Jak to działa?</strong>
              <ol>
                <li>
                  <strong>1. Wybierasz sprzęt</strong> – decydujesz, jaka
                  maszyna CNC lub drukarka UV najlepiej odpowiada Twoim
                  potrzebom.
                </li>
                <li>
                  <strong>2. Podpisujesz umowę leasingową</strong> – ustalasz z
                  firmą leasingową warunki, takie jak długość okresu leasingu,
                  wysokość rat i opcję wykupu sprzętu po zakończeniu umowy.
                </li>
                <li>
                  <strong>3. Używasz sprzętu</strong> – korzystasz z
                  nowoczesnych urządzeń, które zwiększają efektywność Twojej
                  firmy, płacąc jedynie ustalone raty.
                </li>
              </ol>
              <br />
              <strong>Korzyści z leasingu:</strong>
              <ul>
                <li>
                  ✅ <strong>Oszczędność kapitału</strong> – nie musisz
                  angażować dużych środków na start.
                </li>
                <li>
                  ✅ <strong>Elastyczność finansowa</strong> – raty leasingowe
                  dostosowane do Twoich możliwości.
                </li>
                <li>
                  ✅ <strong>Korzyści podatkowe</strong> – raty leasingowe
                  możesz wliczyć w koszty uzyskania przychodu.
                </li>
                <li>
                  ✅ <strong>Szybki dostęp do technologii</strong> – nie
                  czekasz, aż zgromadzisz pełną kwotę na zakup.
                </li>
              </ul>
              <br />
              <strong>Dla kogo jest leasing maszyn CNC i drukarek UV?</strong>
              <p>
                Leasing to świetne rozwiązanie dla firm z różnych branż – od
                produkcji, przez reklamę, aż po usługi poligraficzne. Dzięki
                niemu możesz zwiększyć swoją konkurencyjność, oferując klientom
                najwyższą jakość usług i produktów. Nie czekaj – zainwestuj w
                rozwój swojej firmy już dziś! Skontaktuj się z nami, aby poznać
                szczegóły oferty leasingowej dopasowanej do Twoich potrzeb.
                <br />
                <br />
              </p>
              <strong>
                Współpracujemy z kluczowymi firmami leasingowymi w Polsce, co
                pozwala nam zaoferować najkorzystniejsze warunki finansowania.
                Dzięki temu masz pewność, że wybierasz sprawdzone i bezpieczne
                rozwiązania.
              </strong>
              {/* <Image
                className={styles.imgContent}
                src="/imgs/example.jpg"
                alt="ourServices-1"
                width={1280}
                height={850}
              /> */}
            </AccordionContent>
          </Accordion.Item>
          {/* Item 4 */}
          {/* <Accordion.Item className={styles.AccordionItem} value="item-4">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>
                  Tworzenie formatek do drukarek UV
                </p>
                <p className={styles.accent}>Solution Box Druk UV</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid nobis repudiandae porro facere quisquam dolore aut quia
                consequatur delectus mollitia atque praesentium impedit
                voluptate architecto, maxime assumenda ratione modi
                necessitatibus aspernatur corrupti eius itaque quibusdam
                sapiente. Fugiat consectetur est, reprehenderit eius magni
                asperiores doloribus quam hic vitae dolore obcaecati, corrupti
                inventore sed perspiciatis facere neque. Aut ipsam accusamus
                saepe doloribus perspiciatis laboriosam vero consequatur
                explicabo sapiente, perferendis cum nisi modi! Corrupti libero
                voluptatum fuga, repellat at incidunt officia. Sed, inventore
                adipisci? Nam voluptatibus deserunt reiciendis, deleniti, iure
                et vero cumque facilis eligendi error inventore, non odio
                quibusdam numquam illo laboriosam repudiandae minus est! Amet,
                eveniet. Eius maxime facilis architecto molestiae fuga mollitia
                vel dicta iste magni, blanditiis nulla minus veniam quae harum
                voluptas fugiat praesentium provident suscipit consectetur earum
                inventore repellat debitis quo dolorem. Maiores hic cumque
                impedit aliquid porro, dolore modi facilis! Eum dolores saepe
                modi dicta ullam velit. Aspernatur quo ea necessitatibus illum
                qui nesciunt nulla dolore blanditiis impedit architecto.
                Dignissimos doloribus ipsa ab reiciendis unde beatae officia
                nobis, consectetur esse error. Reiciendis eius minus illo
                explicabo pariatur eos rerum dolores asperiores illum odio
                voluptatum ab ipsum quos ut praesentium quis perspiciatis dicta
                aliquam soluta, non magni officia!
              </p>
              <Image
                className={styles.imgContent}
                src="/imgs/example.jpg"
                alt="ourServices-1"
                width={1280}
                height={850}
              />
            </AccordionContent>
          </Accordion.Item> */}
          {/* Item 5 */}
          {/* <Accordion.Item className={styles.AccordionItem} value="item-5">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Wsparcie projektowe</p>
                <p className={styles.accent}>Solution Box Office</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                iusto neque animi ad? Eos, labore magni exercitationem eum vel
                eaque provident odit. Amet corrupti at earum quas error officia
                quis voluptatum dolore perferendis harum ad, distinctio debitis
                ea aliquam unde eius eveniet quidem dolores sint ex dignissimos
                natus sunt? Reiciendis atque doloribus perspiciatis inventore,
                architecto velit odit saepe labore? Dicta voluptates iusto
                laborum atque fugit facere debitis amet neque tempora distinctio
                enim qui quasi inventore, quo quod repellat pariatur laboriosam
                aspernatur quisquam dolorem vel porro? Temporibus, molestiae.
                Laudantium optio, magni consequatur dicta suscipit odio porro
                vitae illo obcaecati et quidem ducimus nam nesciunt? Blanditiis
                obcaecati neque commodi quidem excepturi quaerat vel at, maiores
                veniam expedita iste itaque quia deleniti atque eum animi?
                Exercitationem doloremque numquam qui, incidunt, officia quia
                rerum similique velit quam dolore quas nam laudantium, ad
                possimus voluptatem natus amet. Quidem quia aspernatur facilis
                fugit sint, voluptatum sit assumenda aperiam iusto eaque minima,
                vitae ipsam. Laborum magni odio maxime libero velit, delectus
                voluptates odit possimus aspernatur nemo atque dolorum quaerat
                fugit quia aperiam blanditiis aut, laboriosam, maiores in
                reprehenderit. Consectetur est omnis molestias in asperiores
                fuga, suscipit nam adipisci consequatur quo vel quos temporibus
                commodi, neque labore quod?
              </p>
              <Image
                className={styles.imgContent}
                src="/imgs/example.jpg"
                alt="ourServices-1"
                width={1280}
                height={850}
              />
            </AccordionContent>
          </Accordion.Item> */}
        </Accordion.Root>
      </div>
    </LionOnLeftSection>
  );
}

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Trigger
> & {
  children: React.ReactNode;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.AccordionItemHeader}>
    <Accordion.Trigger
      className={styles.AccordionTrigger}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <Image
        src="/icons/arrow-down-dark.svg"
        width={33}
        height={33}
        alt="Pokaż więcej"
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Content
> & {
  children: React.ReactNode;
};

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Content
    className={styles.AccordionContent}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";
