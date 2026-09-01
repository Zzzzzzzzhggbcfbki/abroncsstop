import type { Metadata } from "next";
import { Bevezeto, Cimsor, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";

export const metadata: Metadata = {
  title: "Jó tudni",
  description:
    "Négyévszakos gumik, méretek, levegőnyomás, kerékcsavarok meghúzása, DOT szám, profilmélység, a gumiabroncs szerkezete és a téli-nyári gumi közötti különbség.",
  alternates: { canonical: "/jo-tudni" },
};

// A régi oldal „Jó tudni!” cikkének teljes tartalma, a forrás tagolását követve.
const temak = [
  {
    id: "negyevszakos",
    cim: "4 évszakos gumik",
    bekezdesek: [
      "A négyévszakos abroncsok átmeneti megoldást jelentenek a téli és nyári abroncsok között. A téves közhiedelemmel ellentétben nem egyesítik magukban a téli és nyári abroncsok jó tulajdonságait.",
      "Mintázatuk általában a téli és nyári mintázatok egyfajta keveréke, tehát megtalálható rajtuk a téli abroncsokra jellemző lamellák, de vannak összefüggő mintablokkok, melyek nyári útviszonyok között hivatottak biztosítani a téli abroncsoknál jobb tapadást. Anyagkeverékük jellemzően lágyabb a nyári gumikénál, hogy hideg időben kevésbé váljanak rideggé.",
      "Mindezek ellenére kimondottan téli útviszonyok között, főleg a mintázat felemássága miatt, elmarad a teljesítményük a téli abroncsokétól.",
    ],
  },
  {
    id: "meretek",
    cim: "Méretek",
    bekezdesek: [
      "Az abroncs méretének megváltoztatása növelheti a talajjal érintkező gumi területét. Ez jobb kormányzási és kanyarodási tulajdonságokat eredményez.",
      "Ennek ellenére, bár az alacsonyabb oldalfalú, alacsony profilú gumiabroncsok jobban mutathatnak, általában keményebb rugózást eredményeznek. Jobban érezhetők lesznek az útfelület egyenetlenségei. Emellett befolyásolja a fékezést, a motor teljesítményét, az üzemanyag-fogyasztást.",
      "Saját biztonsága érdekében a lehető legnagyobb mértékben ragaszkodjon az eredeti külső átmérőhöz. Az optimális vezetési tulajdonságok megtartása érdekében inkább a keréktárcsa méretét változtassa. Ajánljuk, hogy konzultáljon szakemberrel, ha más méretű abroncsra szeretne váltani.",
    ],
  },
  {
    id: "nyomas",
    cim: "Levegőnyomás",
    bekezdesek: [
      "A használat mellett a talaj kicsi szemcsékben gumidarabkákat dörzsöl le az abroncs futófelületéről. Ez természetes folyamat, de nem mindegy, hogy mennyi idő, illetve kilométer után kell új abroncsokat beszereznünk. A kopást megállítani nem lehet, de lassítani igen, és ehhez a legtöbb esetben elég havonta néhány perc.",
      "A megfelelő keménységűre pumpált gumiabroncsok élettartama hosszabb, tapadásuk biztosabb, az autó úttartása jobb, és a fogyasztása pedig kisebb. És ami a legfontosabb: a vezetésbiztonság és az abroncsok élettartama is nő, ha odafigyelünk a megfelelő nyomásértékre.",
      "Egyes becslések szerint, ha a Magyarországon közlekedő valamennyi gépjármű abroncsát a megfelelő értékre pumpálnák fel, az ország üzemanyag-fogyasztása azonnal csökkenne tíz százalékkal.",
      "A legtöbben elfelejtik a csomagtartó mélyére elásott pótkerékben ellenőrizni a nyomást, ebben az esetben egy esetleges kerékcserénél kínos meglepetés érhet bennünket.",
    ],
  },
  {
    id: "nyomatek",
    cim: "Kerékcsavarok meghúzása",
    bekezdesek: [
      "A kerékrögzítő csavarok, illetve anyák kézzel, érzés szerinti meghúzása nem mondható biztonságosnak. Ezért érdemes e feladatot üzembiztonsági szempontból szakműhelyünkben elvégeztetni, ahol nyomatékkulcsot használunk, amely lehetővé teszi az előírt meghúzási nyomaték pontos betartását.",
    ],
    lista: [
      "A kerékrögzítő menetes csapjai, csavarjai és anyái ne sérüljenek",
      "Az összes csavar egyenletesen, azonos nyomatékkal legyen meghúzva",
      "A leszerelés megkönnyítésére",
    ],
  },
  {
    id: "dot",
    cim: "Használt abroncsok, DOT szám",
    bekezdesek: [
      "Amikor egy fogyasztó olyan abroncsot vásárol a kereskedésekben, melynek az oldalfalán feltüntetett gyártási dátum legalább egy évnél régebbi időpontot mutat, nyugtalanság és gyanakvás lesz úrrá rajta. Európa vezető gumiabroncs gyártója, a Continental AG által lefolytatott tanulmány szerint ilyenkor két fő kérdés fogalmazódik meg a fogyasztókban. Az egyik, hogy az árut helyesen tárolták-e az eltelt időszak alatt, a másik, hogy a gyártás dátuma esetleg miért jóval korábbi, mint a vásárlás időpontja.",
      "„Ha az abroncsokat helyesen tárolják, akkor állagromlás nem mutatható ki” kommentálja Björn Bolze, a Continental vállalat vevőszolgálati vezetője.",
      "Szakértői vélemények alapján a gyártástól számított 5 évvel később is ugyanolyan teljesítményt nyújtanak az abroncsok, mintha most gördültek volna le a gyártószalagról. Azt azonban fontos kihangsúlyozni, hogy csak akkor, ha megfelelő módon tárolják őket.",
      "„Jelenleg nincs olyan törvény vagy jogszabály, amely szabályozná az abroncsok élettartamát” mutat rá Björn Bolze, és hozzáteszi: „Mi általánosan azt szoktuk javasolni, hogy a 10 évnél idősebb abroncsokat cseréljék le az állapotuktól függetlenül.” Azonban teljesen normál használat esetén az abroncsok futófelülete jóval korábban elkopik, mint az előbb említett 10 év.",
    ],
  },
  {
    id: "profilmelyseg",
    cim: "Profilmélység",
    bekezdesek: [
      "A futófelület bordái között jelzőcsíkokat, esetleg kidudorodásokat találunk. Ha ezek a csíkok egy szintbe kerülnek a bordák felszínével, mindenképpen le kell cserélni az abroncsot. Ilyenkor a bordák magassága már csak 1,6 mm.",
      "Ez a hazai és több európai szabályozás szerinti minimális árokmélység, de nem éri meg feszegetni a határokat. A szakemberek egybehangzó ajánlása alapján nyári gumiknál 3 mm, a téli szett esetén 4 mm-es értéknél vegyünk új abroncsokat.",
    ],
  },
  {
    id: "szerkezet",
    cim: "A gumiabroncs szerkezete",
    bekezdesek: [
      "Külső megjelenése alapján azt hihetnénk, hogy az autók, motorok gumiabroncsa kizárólag gumiból készül, noha valójában négy fő összetevőjük van: gumi, kordszövet, vegyi anyagok és fém. Mindegyik egy-egy speciális feladatot lát el, és ezek együttesen adják a gumiabroncsoktól megkívánt tulajdonságokat.",
      "Napjaink tipikus radiál gumiabroncsának csak alig több mint egy harmada áll gumiból, és a gumitartalomnak körülbelül 70 százaléka kőolajból nyert szintetikus gumi polimer. Belülről a gumiabroncs szilárdságát a vázszerkezete adja, amelyet elsősorban gumírozott kordszövet rétegek alkotnak, de nagyobb igénybevételű abroncsok acélbetéteket is tartalmaznak.",
    ],
    fogalmak: [
      ["Légzáró réteg", "A gumiabroncs légtartását biztosítja."],
      ["Öv", "Radiál gumiabroncs esetében a karkaszvázon elhelyezkedő övbetétek, amelyek a futófelület stabilitását biztosítják."],
      ["Karkasz", "A gumiabroncs teherhordó váza. Ha ez a rész sérül meg, az abroncs csak speciális esetben javítható."],
      ["Futófelület", "Mintával ellátott felület, amely biztosítja a gumiabroncs optimális kapcsolatát az útfelülettel."],
      ["Oldalfal", "A gumiabroncs oldalsó része."],
      ["Peremhuzalkarika", "A gumiba ágyazott tekercselt acélhuzal-karika. Ez biztosítja a feszes illeszkedést a kerékpánton."],
      ["Tubeless (TL)", "Tömlő nélküli gumiabroncs beépített légzáró réteggel."],
      ["Tube Type (TT)", "Csak belső tömlővel használható gumiabroncs."],
      ["TWI", "Futófelületi kopásjelző, a hatóságilag megengedett minimális 1,6 mm-es mintázatmélységet mutatja."],
      ["Szelep", "A kerékpántra rögzítve vagy a tömlőbe vulkanizálva teszi lehetővé a felfújást és a nyomásellenőrzést."],
      ["Szelepvédő sapka", "Védi a szelep szerkezetét a szennyeződéstől és nedvességtől. A szelep tömítése érdekében elengedhetetlen."],
    ],
  },
  {
    id: "teli-nyari",
    cim: "Téli és nyári gumi",
    bekezdesek: [
      "A nyári és a téli gumikat különböző feltételekre szabták. A nyári gumik nagyobb, zárt mintázatúak, keményebb gumikeverékből készülnek. Ezáltal biztosítják a megfelelő tapadást magas hőmérsékleten, nagy ellenállás és nagy sebesség esetén. Ezzel szemben alacsony hőmérsékleten, mivel kevésbé rugalmasak, hiányzik a szükséges tapadás.",
      "A modern téli gumik puhább anyagkeverékből készülnek, mintázatuk kis egységekből áll, éles kereszt- és hosszirányú barázdákkal. A kis lamellák nagyobb biztonságot nyújtanak kis súrlódási együtthatójú utakon is, alacsony hőmérsékleten, hóban és jégen.",
    ],
  },
];

export default function Oldal() {
  return (
    <>
      <Szakasz className="pt-10 pb-8 md:pt-14 md:pb-10">
        <Cimsor as="h1" className="text-balance">
          Jó tudni
        </Cimsor>
        <Bevezeto className="mt-6 text-[1.15rem]">
          Amit érdemes tudni az abroncsokról, a négyévszakos gumiktól a
          profilmélységig.
        </Bevezeto>
      </Szakasz>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 md:grid-cols-12 md:gap-16">
          <nav className="md:col-span-4 lg:col-span-3" aria-label="Tartalom">
            <div className="sticky top-[92px] rounded-[14px] border border-vonal bg-lap p-6">
              <h2 className="plakat-vekony text-[12px] text-tinta-halvany">Tartalom</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {temak.map((t, i) => (
                  <li key={t.id} className="flex gap-3">
                    <span className="font-display text-sm font-semibold tabular-nums text-piros">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${t.id}`}
                      className="text-[0.98rem] leading-snug text-tinta-halvany transition-colors hover:text-piros"
                    >
                      {t.cim}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="md:col-span-8 lg:col-span-9">
            {temak.map((t, i) => (
              <Reveal key={t.id} delay={0.04}>
                <article
                  id={t.id}
                  className={`scroll-mt-28 ${i > 0 ? "mt-14 border-t border-vonal pt-14" : ""}`}
                >
                  <h2 className="plakat text-[1.9rem] text-tinta sm:text-[2.4rem]">{t.cim}</h2>
                  {t.bekezdesek.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-5 max-w-[68ch] text-[1.05rem] leading-[1.75] text-tinta-halvany"
                    >
                      {p}
                    </p>
                  ))}

                  {t.lista && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {t.lista.map((l) => (
                        <li
                          key={l}
                          className="flex gap-3 rounded-[14px] border border-vonal bg-lap p-4 text-[0.98rem] leading-relaxed text-tinta"
                        >
                          <span aria-hidden className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-piros" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}

                  {t.fogalmak && (
                    <dl className="mt-8 divide-y divide-vonal border-y border-vonal">
                      {t.fogalmak.map(([nev, leiras]) => (
                        <div key={nev} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                          <dt className="font-display font-semibold text-tinta">{nev}</dt>
                          <dd className="leading-relaxed text-tinta-halvany">{leiras}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HivasSav />
    </>
  );
}
