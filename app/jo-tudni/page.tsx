import type { Metadata } from "next";
import { Bevezeto, Cimsor, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";

export const metadata: Metadata = {
  title: "Jó tudni",
  description:
    "Négyévszakos gumi, méretváltás, guminyomás, kerékcsavarok nyomatéka és a DOT szám. Amit érdemes tudni az abroncsokról, közérthetően.",
  alternates: { canonical: "/jo-tudni" },
};

const temak = [
  {
    id: "negyevszakos",
    cim: "A négyévszakos gumi",
    bekezdesek: [
      "A négyévszakos abroncs átmeneti megoldás a téli és a nyári között. A közhiedelemmel ellentétben nem egyesíti a kettő jó tulajdonságait.",
      "A mintázata keverék: megtalálhatók rajta a télire jellemző lamellák, de vannak összefüggő mintablokkok is, amelyek nyári útviszonyok között adnak jobb tapadást a télinél. Az anyagkeveréke lágyabb a nyári guminál, hogy hidegben kevésbé váljon ridegge.",
      "Kimondottan téli útviszonyok között viszont, főleg a mintázat felemássága miatt, elmarad a teljesítménye a téli abroncsétól. Ha sokat jár hegyvidéken vagy rendszeresen kell havas úton közlekednie, jobban jár két garnitúrával.",
    ],
  },
  {
    id: "meretek",
    cim: "Méretváltás",
    bekezdesek: [
      "Az abroncs méretének megváltoztatása növelheti a talajjal érintkező felületet, ez pedig jobb kormányzási és kanyarodási tulajdonságokat eredményez.",
      "Az alacsonyabb oldalfalú, alacsony profilú gumik jobban mutathatnak, de általában keményebb rugózást jelentenek, és jobban érezhetők lesznek az útfelület egyenetlenségei. Emellett befolyásolják a fékezést, a motor teljesítményét és a fogyasztást is.",
      "A saját biztonsága érdekében ragaszkodjon a lehető legnagyobb mértékben az eredeti külső átmérőhöz. Ha jó vezetési tulajdonságokat szeretne megtartani, inkább a keréktárcsa méretén változtasson, és konzultáljon szakemberrel, mielőtt megrendeli az új szettet.",
    ],
  },
  {
    id: "nyomas",
    cim: "Guminyomás",
    bekezdesek: [
      "Használat közben a talaj apró szemcsékben dörzsöl le gumidarabkákat az abroncs futófelületéről. Ez természetes folyamat, a kopást megállítani nem lehet. Lassítani viszont igen, és ehhez a legtöbb esetben elég havonta néhány perc.",
      "A megfelelő keménységűre fújt abroncs élettartama hosszabb, a tapadása biztosabb, az autó úttartása jobb, a fogyasztása pedig kisebb. Egyes becslések szerint, ha Magyarországon minden gépjármű abroncsát a megfelelő értékre fújnák, az ország üzemanyag-fogyasztása azonnal tíz százalékkal csökkenne.",
      "A pótkerékről a legtöbben megfeledkeznek. Pedig egy kerékcserénél kínos meglepetés érheti az embert, ha kiderül, hogy abban sincs nyomás.",
    ],
  },
  {
    id: "nyomatek",
    cim: "A kerékcsavarok meghúzása",
    bekezdesek: [
      "A kerékrögzítő csavarok és anyák kézzel, érzés szerinti meghúzása nem mondható biztonságosnak. Ezt a feladatot érdemes szakműhelyben elvégeztetni, ahol nyomatékkulcs biztosítja az előírt meghúzási nyomaték pontos betartását.",
      "Így nem sérülnek a kerékrögzítő menetes csapok, csavarok és anyák, minden csavar egyenletesen, azonos nyomatékkal lesz meghúzva, és a következő leszerelés is könnyebben megy.",
    ],
  },
  {
    id: "dot",
    cim: "A DOT szám, vagyis a gyártási dátum",
    bekezdesek: [
      "Sok vásárlót nyugtalanít, ha a megvett abroncs oldalfalán legalább egy évvel korábbi gyártási dátum szerepel. Két kérdés merül fel ilyenkor: jól tárolták-e az árut, és miért ilyen régi a gyártás dátuma a vásárláshoz képest.",
      "A Continental vizsgálata szerint helyes tárolás mellett állagromlás nem mutatható ki. Vagyis a néhány hónapos vagy egyéves gyártási dátum önmagában nem jelent rosszabb abroncsot, ha a raktározás megfelelő volt.",
      "Ettől függetlenül jogos kérdés a boltban, és mi is szívesen megmutatjuk a DOT számot azon, amit ajánlunk.",
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
          Amit gyakran kérdeznek tőlünk a pult mellett, összeszedve. Semmi
          szakzsargon, csak az, ami tényleg számít a saját autóján.
        </Bevezeto>
      </Szakasz>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 md:grid-cols-12 md:gap-16">
          <nav className="md:col-span-4 lg:col-span-3" aria-label="Tartalom">
            <div className="sticky top-[92px] rounded-[14px] border border-vonal bg-lap p-6">
              <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
                Tartalom
              </h2>
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
                  <h2 className="plakat text-[1.9rem] text-tinta sm:text-[2.4rem]">
                    {t.cim}
                  </h2>
                  {t.bekezdesek.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-5 max-w-[68ch] text-[1.05rem] leading-[1.75] text-tinta-halvany"
                    >
                      {p}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HivasSav
        cim="Nem biztos benne, mi kell az autójára?"
        szoveg="Mondja el, milyen autója van és mennyit jár vele, és megmondjuk, milyen abroncsot érdemes rátenni."
      />
    </>
  );
}
