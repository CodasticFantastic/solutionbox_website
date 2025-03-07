import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import LionOnLeftSection from "../../basicSections/lionOnLeftSection/LionOnLeftSection";
import Image from "next/image";
import styles from "./ourServicesAccordionSection.module.scss";

export default function OurServicesAccordionSection() {
  return (
    <LionOnLeftSection>
      <div className="container">
        <Accordion.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
          {/* Item 1 */}
          <Accordion.Item className={styles.AccordionItem} value="item-1">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Wsparcie</p>
                <p className={styles.accent}>Solution Box Support</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Jeśli nie masz pewności, jak podejść do swojego projektu lub masz problem ze swoim urządzeniem, zarezerwuj bezpłatną konsultację, a jeden z
                naszych specjalistów pomoże Ci ruszyć do przodu.
                <br />
                <br />
                Jesteśmy jedyną firmą, której zaufali międzynarodowi producenci najnowocześniejszych rozwiązań z zakresu poligrafii, IT, druku, skanowania,
                reklamy. Jesteśmy autoryzowanym serwisem wszystkich oferowanych przez nas urządzeń: Comagrav, An2Di, Eagle, Allygoup, FoxUV, Metis, LokLik,
                MYard, Solifuse, GreenClean.
                <br />
                <br /> Posiadamy fachową wiedzę, wsparcie producentów, oraz nieograniczony dostęp do materiałów eksploatacyjnych oraz części zamiennych.
                Wykonujemy serwis urządzeń na miejscu w naszej firmie, a także w siedzibie klienta. Mamy jedno z najnowocześniejszych, zorganizowanych i w pełni
                wyposażonych centrów napraw w kraju.
                <br />
                <br />
                Dzięki wyspecjalizowanemu zapleczu, pełnej gamie narzędzi diagnostycznych i naprawczych, ogromnemu magazynowi oryginalnych części zamiennych,
                zautomatyzowanym systemom organizacji i dobrze wyszkolonym technikom, zapewniamy szybkie i niezawodne usługi wsparcia.
                <br />
                <br />
                Jesteśmy jedyną firmą, której zaufali wszyscy liczący się producenci urządzeń dla poligrafii i reklamy i która działa jako pełnoprawny serwis
                urządzeń dla swoich produktów. Zarówno w przypadku urządzeń objętych gwarancją, jak i poza nią. Oferujemy szybkość, niezawodność i jakość w
                każdej naprawie.
              </p>
              <Image className={styles.imgContent} src="/imgs/example.jpg" alt="ourServices-1" width={1280} height={850} />
            </AccordionContent>
          </Accordion.Item>
          {/* Item 2 */}
          <Accordion.Item className={styles.AccordionItem} value="item-2">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Finansowanie</p>
                <p className={styles.accent}>Solution Box Finanse</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque officia quisquam sint amet non neque aliquid aut nam pariatur vel
                exercitationem deleniti nulla iure ea dolorem laboriosam sed tempora commodi ullam eaque esse, ipsam magni autem. Nobis, sint harum! Tempora
                explicabo placeat, illum soluta rem provident voluptas pariatur beatae dolor quis iusto iste sequi voluptatem excepturi architecto maxime vel
                asperiores! Error est similique qui aperiam sapiente autem, laboriosam eligendi unde nam laudantium alias voluptatum labore veniam maxime quod
                asperiores saepe cum temporibus sint exercitationem beatae eum vero porro deserunt. Temporibus nisi autem sunt. Porro dolore explicabo
                consequatur, ipsum vero dolorum cupiditate eius optio rerum facere ipsa autem molestiae, laborum consequuntur, ullam culpa aspernatur iure
                exercitationem fugit suscipit similique? Sit ex placeat officia. Repellendus sunt magni libero tempora quasi, deleniti, at quia amet fuga
                molestiae pariatur? Doloribus, quas nemo ad soluta voluptatum voluptatem nam! Consequatur corporis animi enim mollitia aperiam. Tempore
                inventore obcaecati perspiciatis aperiam eveniet officia assumenda ex ut accusamus ducimus iusto, doloribus repellat nobis error porro,
                consectetur dolorum? Delectus blanditiis corrupti alias quia aliquam velit tenetur corporis adipisci deserunt. Sequi quos suscipit quam est modi
                provident eaque quod? Provident nostrum assumenda nisi totam dolores sint praesentium voluptatem ab.
              </p>
              <Image className={styles.imgContent} src="/imgs/example.jpg" alt="ourServices-1" width={1280} height={850} />
            </AccordionContent>
          </Accordion.Item>
          {/* Item 3 */}
          <Accordion.Item className={styles.AccordionItem} value="item-3">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Druk strukturalny</p>
                <p className={styles.accent}>Solution Box Druk</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores architecto sed totam id quae enim, labore, doloremque quod
                recusandae, eligendi quo veniam nostrum! Odit quo nulla aliquam dolore veritatis. Tenetur fugiat eius, sequi autem ipsum corporis porro
                provident suscipit illum. Iste libero architecto explicabo quaerat hic, ut quae! Saepe repellendus, ad vel officiis deleniti debitis neque
                doloribus quisquam provident molestias expedita consectetur unde tenetur maiores molestiae, delectus porro. Enim quo consequuntur quia assumenda
                temporibus cumque suscipit corrupti recusandae laudantium reprehenderit, omnis molestiae ab molestias qui doloremque nostrum! Neque quod iusto
                sunt molestias exercitationem labore non soluta iure aliquid, nesciunt magnam, minus voluptas expedita a velit delectus deleniti laudantium
                ipsum? Totam fugit saepe, repellendus omnis maxime porro vitae. Maxime distinctio explicabo fuga sed nulla illum temporibus, id accusamus
                provident, quod neque. Qui eos modi unde, laboriosam, eius nesciunt obcaecati eaque eum magnam iste hic architecto dicta quam pariatur est ullam
                nisi suscipit placeat commodi tenetur exercitationem id cupiditate aliquam incidunt. Aut sapiente modi eaque adipisci, perspiciatis odio!
                Repellat odio nihil qui veritatis eius, facilis iusto similique ipsam minus deleniti, atque totam at, dignissimos rerum iure quam nulla ex
                officiis exercitationem? Animi, cupiditate corrupti. Totam iste ratione alias iure ipsa repellendus.
              </p>
              <Image className={styles.imgContent} src="/imgs/example.jpg" alt="ourServices-1" width={1280} height={850} />
            </AccordionContent>
          </Accordion.Item>
          {/* Item 4 */}
          <Accordion.Item className={styles.AccordionItem} value="item-4">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Tworzenie formatek do drukarek UV</p>
                <p className={styles.accent}>Solution Box Druk UV</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis repudiandae porro facere quisquam dolore aut quia consequatur delectus
                mollitia atque praesentium impedit voluptate architecto, maxime assumenda ratione modi necessitatibus aspernatur corrupti eius itaque quibusdam
                sapiente. Fugiat consectetur est, reprehenderit eius magni asperiores doloribus quam hic vitae dolore obcaecati, corrupti inventore sed
                perspiciatis facere neque. Aut ipsam accusamus saepe doloribus perspiciatis laboriosam vero consequatur explicabo sapiente, perferendis cum nisi
                modi! Corrupti libero voluptatum fuga, repellat at incidunt officia. Sed, inventore adipisci? Nam voluptatibus deserunt reiciendis, deleniti,
                iure et vero cumque facilis eligendi error inventore, non odio quibusdam numquam illo laboriosam repudiandae minus est! Amet, eveniet. Eius
                maxime facilis architecto molestiae fuga mollitia vel dicta iste magni, blanditiis nulla minus veniam quae harum voluptas fugiat praesentium
                provident suscipit consectetur earum inventore repellat debitis quo dolorem. Maiores hic cumque impedit aliquid porro, dolore modi facilis! Eum
                dolores saepe modi dicta ullam velit. Aspernatur quo ea necessitatibus illum qui nesciunt nulla dolore blanditiis impedit architecto.
                Dignissimos doloribus ipsa ab reiciendis unde beatae officia nobis, consectetur esse error. Reiciendis eius minus illo explicabo pariatur eos
                rerum dolores asperiores illum odio voluptatum ab ipsum quos ut praesentium quis perspiciatis dicta aliquam soluta, non magni officia!
              </p>
              <Image className={styles.imgContent} src="/imgs/example.jpg" alt="ourServices-1" width={1280} height={850} />
            </AccordionContent>
          </Accordion.Item>
          {/* Item 5 */}
          <Accordion.Item className={styles.AccordionItem} value="item-5">
            <AccordionTrigger>
              <div className={styles.AccordionItemHeaderTitle}>
                <p className={styles.title}>Wsparcie projektowe</p>
                <p className={styles.accent}>Solution Box Office</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto neque animi ad? Eos, labore magni exercitationem eum vel eaque provident
                odit. Amet corrupti at earum quas error officia quis voluptatum dolore perferendis harum ad, distinctio debitis ea aliquam unde eius eveniet
                quidem dolores sint ex dignissimos natus sunt? Reiciendis atque doloribus perspiciatis inventore, architecto velit odit saepe labore? Dicta
                voluptates iusto laborum atque fugit facere debitis amet neque tempora distinctio enim qui quasi inventore, quo quod repellat pariatur
                laboriosam aspernatur quisquam dolorem vel porro? Temporibus, molestiae. Laudantium optio, magni consequatur dicta suscipit odio porro vitae
                illo obcaecati et quidem ducimus nam nesciunt? Blanditiis obcaecati neque commodi quidem excepturi quaerat vel at, maiores veniam expedita iste
                itaque quia deleniti atque eum animi? Exercitationem doloremque numquam qui, incidunt, officia quia rerum similique velit quam dolore quas nam
                laudantium, ad possimus voluptatem natus amet. Quidem quia aspernatur facilis fugit sint, voluptatum sit assumenda aperiam iusto eaque minima,
                vitae ipsam. Laborum magni odio maxime libero velit, delectus voluptates odit possimus aspernatur nemo atque dolorum quaerat fugit quia aperiam
                blanditiis aut, laboriosam, maiores in reprehenderit. Consectetur est omnis molestias in asperiores fuga, suscipit nam adipisci consequatur quo
                vel quos temporibus commodi, neque labore quod?
              </p>
              <Image className={styles.imgContent} src="/imgs/example.jpg" alt="ourServices-1" width={1280} height={850} />
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </LionOnLeftSection>
  );
}

type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Accordion.Trigger> & {
  children: React.ReactNode;
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.AccordionItemHeader}>
    <Accordion.Trigger className={styles.AccordionTrigger} {...props} ref={forwardedRef}>
      {children}
      <Image src="/icons/arrow-down-dark.svg" width={33} height={33} alt="Pokaż więcej" />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof Accordion.Content> & {
  children: React.ReactNode;
};

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ children, ...props }, forwardedRef) => (
  <Accordion.Content className={styles.AccordionContent} {...props} ref={forwardedRef}>
    {children}
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";
