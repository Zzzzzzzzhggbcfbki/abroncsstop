import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ceg, nyitvatartas, szolgaltatasok } from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf, GombLink, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { AbroncsMinta } from "@/components/abroncs-minta";

// A „Jó tudni” oldal első három témájának nyitómondatai, szó szerint.
const jotudniKivonat = [
  {
    cim: "4 évszakos gumik",
    szoveg:
      "A négyévszakos abroncsok átmeneti megoldást jelentenek a téli és nyári abroncsok között. A téves közhiedelemmel ellentétben nem egyesítik magukban a téli és nyári abroncsok jó tulajdonságait.",
  },
  {
    cim: "Levegőnyomás",
    szoveg:
      "A megfelelő keménységűre pumpált gumiabroncsok élettartama hosszabb, tapadásuk biztosabb, az autó úttartása jobb, és a fogyasztása pedig kisebb.",
  },
  {
    cim: "Kerékcsavarok meghúzása",
    szoveg:
      "A kerékrögzítő csavarok, illetve anyák kézzel, érzés szerinti meghúzása nem mondható biztonságosnak. Szakműhelyünkben nyomatékkulcsot használunk.",
  },
];

export default function Fooldal() {
  return (
    <>
      {/* 1. Hero. A cím és az alatta lévő sor a régi oldal saját szövege.
          Egyetlen képelem, hogy mobilon ne töltsön le két hero fotót. */}
      <section className="relative">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-center py-10 sm:py-14 lg:min-h-[620px] lg:w-[53%] lg:py-20 lg:pr-8">
            <Cimsor as="h1" className="text-balance">
              Isaszeg <span className="text-piros">Gumiszerviz</span>
            </Cimsor>
            <Bevezeto className="mt-5 text-[1.05rem] sm:mt-7 sm:text-[1.1rem]">
              {ceg.szlogen}. TPMS diagnosztika, gumihotel, klímatisztítás és
              felnijavítás.
            </Bevezeto>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <GombHoraf href={ceg.telefonHref}>
                <Phone size={18} weight="fill" aria-hidden />
                {ceg.telefonKiiras}
              </GombHoraf>
              <GombLink href="#szolgaltatasok" variant="masodlagos">
                Szolgáltatások
                <ArrowRight size={17} aria-hidden />
              </GombLink>
            </div>

            {/* A cím külön kártyán, mert ez a második legfontosabb adat a
                telefonszám után: aki idejön, tudni akarja, hova induljon. */}
            <a
              href={ceg.terkepLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex max-w-[26rem] items-center gap-5 rounded-[14px] border-l-4 border-piros-tolt bg-lap py-5 pl-5 pr-6 shadow-emelt transition-transform duration-200 hover:-translate-y-0.5 sm:mt-8"
            >
              <MapPin size={30} weight="fill" className="shrink-0 text-piros" aria-hidden />
              <span className="min-w-0">
                <span className="plakat-vekony block text-[11px] text-tinta-halvany">
                  Itt talál minket
                </span>
                <span className="plakat mt-1.5 block text-[1.45rem] leading-[1.1] text-tinta">
                  {ceg.cim.telepules}, {ceg.cim.utca}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 font-display text-sm font-semibold text-piros">
                  Útvonaltervezés
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="relative aspect-16/11 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[47%] lg:[clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
          <Image
            src="/fotok/muhely-homlokzat-tabla.jpg"
            alt="Az Abroncs Stop műhelye Isaszegen, nyitott szerelőkapukkal"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Adatsáv. Nyitvatartás és telefon a régi oldal fejlécéből.
          A cím feljebb, a heróban van, kiemelt kártyán. */}
      <section className="px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-14">
        <div className="mx-auto w-full max-w-[1240px] rounded-[14px] border border-vonal bg-lap shadow-lagy">
          <dl className="grid divide-y divide-vonal sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <Clock size={22} className="mt-1 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">Nyitvatartás</dt>
                {nyitvatartas.map((n) => (
                  <dd key={n.nap} className="mt-1">
                    <span className="plakat block text-[1.35rem] leading-[1.15] text-tinta sm:text-[1.5rem]">
                      {n.ora}
                    </span>
                    <span className="mt-0.5 block text-[0.95rem] text-tinta-halvany">
                      {n.nap}
                    </span>
                  </dd>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6">
              <Phone size={22} className="mt-1 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">Telefon</dt>
                <dd className="mt-1">
                  <a
                    href={ceg.telefonHref}
                    className="plakat block text-[1.35rem] leading-[1.15] text-tinta transition-colors hover:text-piros sm:text-[1.5rem]"
                  >
                    {ceg.telefonKiiras}
                  </a>
                  <span className="mt-0.5 block text-[0.95rem] text-tinta-halvany">
                    {ceg.kapcsolattarto}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* 3. Szolgáltatások: a régi menü szolgáltatásai a fényszóró nélkül.
          Bento ritmus 3x2 / 3 / 3 / 6, négy cella, üres hely nélkül. */}
      <Szakasz
        id="szolgaltatasok"
        className="relative overflow-hidden border-y border-vonal bg-papir-melyebb"
      >
        <AbroncsMinta className="-right-[18%] top-[2%] aspect-[1400/458] w-[120%] -rotate-[6deg]" />
        <Reveal>
          <Cimsor className="max-w-[14ch] text-balance">Szolgáltatásaink</Cimsor>
        </Reveal>

        <div className="mt-12 grid gap-4 md:auto-rows-[248px] md:grid-cols-6">
          {szolgaltatasok.map((sz, i) => {
            const meret = [
              "md:col-span-3 md:row-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-6",
            ][i];
            const nagy = i === 0;

            return (
              <Reveal key={sz.slug} delay={i * 0.05} className={meret}>
                <Link
                  href={`/${sz.slug}`}
                  className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[14px] md:min-h-0"
                >
                  <Image
                    src={sz.kep}
                    alt={sz.kepAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                  />
                  {/* A szövegsáv alá erős fátyol kell, mert a fotók alsó harmada
                      helyenként világos: e nélkül a fehér szöveg nem érné el az AA-t. */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17,15,13,0.96) 0%, rgba(17,15,13,0.92) 38%, rgba(17,15,13,0.62) 66%, rgba(17,15,13,0.14) 100%)",
                    }}
                  />
                  <div className="relative p-6 sm:p-7">
                    <span className="plakat block text-[1.4rem] text-white/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`plakat mt-2.5 text-white ${
                        nagy ? "text-[2rem] sm:text-[2.5rem]" : "text-[1.55rem]"
                      }`}
                    >
                      {sz.cim}
                    </h3>
                    <p
                      className={`mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-white/85 ${
                        nagy ? "" : "line-clamp-2"
                      }`}
                    >
                      {sz.osszefoglalo}
                    </p>
                    <span className="plakat-vekony mt-5 inline-flex items-center gap-1.5 text-[13px] text-white">
                      Részletek
                      <ArrowRight
                        size={14}
                        weight="bold"
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Szakasz>

      {/* 4. Hívás. Ez az oldal fő konverziós pontja, ezért a telefonszám
          maga a főcím, nem egy gomb felirata. */}
      <section className="px-5 py-4 sm:px-8">
        <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[14px] bg-piros-tolt">
          <div className="grid gap-10 px-7 py-12 sm:px-12 sm:py-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="plakat-vekony text-[12px] text-white">Bejelentkezés</p>
              <h2 className="plakat mt-3 max-w-[13ch] text-[2.3rem] text-white sm:text-[3rem]">
                Hívjon most
              </h2>
              <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-white">
                {ceg.kapcsolattarto} veszi fel. Mondja el, mi a gond az autóval, és
                megbeszéljük a többit.
              </p>
            </div>

            <div className="lg:col-span-5">
              <a
                href={ceg.telefonHref}
                className="plakat block text-[2.2rem] leading-none text-white transition-opacity hover:opacity-85 sm:text-[3.1rem] lg:text-right"
              >
                {ceg.telefonKiiras}
              </a>
              <dl className="mt-6 flex flex-col gap-2 border-t border-white/60 pt-6 lg:items-end">
                {nyitvatartas.map((n) => (
                  <div key={n.nap} className="flex items-baseline gap-3 text-white">
                    <dt>{n.nap}</dt>
                    <dd className="font-display font-semibold tabular-nums text-white">
                      {n.ora}
                    </dd>
                  </div>
                ))}
                <a
                  href={`mailto:${ceg.email}`}
                  className="mt-1 text-white underline decoration-white/70 underline-offset-4 hover:decoration-white"
                >
                  {ceg.email}
                </a>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gumihotel, a „ghotel” oldal szövegével és áraival. */}
      <Szakasz className="bg-papir-melyebb">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-papir shadow-lagy">
              <Image
                src="/fotok/gumihotel-polc.jpg"
                alt="Gumiabroncsok és keréktárcsák a gumihotel állványain"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <Cimsor className="max-w-[12ch] text-balance">Gumihotel</Cimsor>
            <Bevezeto className="mt-6">
              Nyáron téli gumi, télen nyári gumi garnitúráját nem kell hazavinnie.
              Mi tároljuk. Önnek csak telefonálnia kell, ha esedékes a gumicsere:
              mire megérkezik szervizünkbe, addigra előkészítjük. Fizetnie csak
              utólag, a tárolás végén kell.
            </Bevezeto>

            <dl className="mt-8 divide-y divide-vonal border-y border-vonal">
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-tinta">Fizetés</dt>
                <dd className="plakat text-[1.35rem] text-tinta">Utólag, a tárolás végén</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-tinta">Védelem</dt>
                <dd className="plakat text-[1.35rem] text-tinta">Riasztó és őrszolgálat</dd>
              </div>
            </dl>

            <p className="mt-6 text-[0.95rem] leading-relaxed text-tinta-halvany">
              A nálunk tárolt kerekeit vagy abroncsait korszerű riasztórendszer és
              vonuló biztonsági szolgálat védi. A tárolás díjáról telefonon
              tájékoztatjuk.
            </p>

            <GombLink href="/gumihotel" variant="csendes" className="mt-6">
              Gumihotel
              <ArrowRight size={15} aria-hidden />
            </GombLink>
          </Reveal>
        </div>
      </Szakasz>

      {/* 6. Jó tudni: a régi oldal cikkének első három témája. */}
      <Szakasz className="relative overflow-hidden">
        <AbroncsMinta className="-left-[18%] bottom-0 aspect-[1400/458] w-[115%] rotate-[4deg]" />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Cimsor className="text-balance">Jó tudni</Cimsor>
            <GombLink href="/jo-tudni" variant="csendes" className="mt-7">
              A teljes összefoglaló
              <ArrowRight size={15} aria-hidden />
            </GombLink>
          </Reveal>

          <ol className="md:col-span-8">
            {jotudniKivonat.map((j, i) => (
              <Reveal as="li" key={j.cim} delay={i * 0.07}>
                <div className="flex gap-6 border-t border-vonal py-8 first:border-t-0 first:pt-0 md:gap-9">
                  <span className="plakat text-[1.4rem] tabular-nums text-piros">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-tinta">
                      {j.cim}
                    </h3>
                    <p className="mt-3 max-w-[58ch] leading-relaxed text-tinta-halvany">
                      {j.szoveg}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Szakasz>
    </>
  );
}
