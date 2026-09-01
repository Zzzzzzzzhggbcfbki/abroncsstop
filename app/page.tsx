import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  ceg,
  nyitvatartas,
  szolgaltatasok,
  fenyszoro,
  csomagok,
  csomagFeltetel,
  gumihotelArak,
} from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf, GombLink, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";
import { ElotteUtana } from "@/components/elotte-utana";

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
      {/* 1. Hero. A cím és az alatta lévő sor a régi oldal saját szövege. */}
      <section className="relative">
        <div className="absolute inset-y-0 right-0 hidden w-[47%] lg:block" aria-hidden>
          <div
            className="relative h-full w-full"
            style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <Image
              src="/fotok/hero-gumiszereles.jpg"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-center py-14 lg:min-h-[620px] lg:w-[53%] lg:py-20 lg:pr-8">
            <Cimsor as="h1" className="text-balance">
              Gumiszerviz <span className="text-piros">Isaszegen</span>
            </Cimsor>
            <Bevezeto className="mt-7 text-[1.1rem]">
              {ceg.szlogen}. Fényszóró felújítás, TPMS diagnosztika, gumihotel,
              klímatisztítás és felnijavítás.
            </Bevezeto>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GombHoraf href={ceg.telefonHref}>
                <Phone size={18} weight="fill" aria-hidden />
                {ceg.telefonKiiras}
              </GombHoraf>
              <GombLink href="#szolgaltatasok" variant="masodlagos">
                Szolgáltatások
                <ArrowRight size={17} aria-hidden />
              </GombLink>
            </div>
          </div>
        </div>

        <div className="relative aspect-16/11 w-full lg:hidden">
          <Image
            src="/fotok/hero-gumiszereles.jpg"
            alt="Kerékszerelés az Abroncs Stop műhelyében"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Adatsáv. Nyitvatartás, cím, telefon: mind a régi oldal fejlécéből
          és kapcsolat oldaláról. */}
      <section className="px-5 pt-10 sm:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-[1240px] rounded-[14px] border border-vonal bg-lap shadow-lagy">
          <dl className="grid divide-y divide-vonal sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <Clock size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">Nyitvatartás</dt>
                {nyitvatartas.map((n) => (
                  <dd key={n.nap} className="mt-2 text-tinta">
                    {n.nap}:{" "}
                    <strong className="font-semibold tabular-nums">{n.ora}</strong>
                  </dd>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 sm:p-7">
              <MapPin size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">Cím</dt>
                <dd className="mt-2 text-tinta">
                  {ceg.cim.iranyitoszam} {ceg.cim.telepules},<br />
                  {ceg.cim.utca}
                </dd>
                <dd className="mt-2">
                  <a
                    href={ceg.terkepLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-piros hover:underline"
                  >
                    Útvonal
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 sm:p-7">
              <Phone size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">Telefon</dt>
                <dd className="mt-2">
                  <a
                    href={ceg.telefonHref}
                    className="font-display text-xl font-semibold text-tinta hover:text-piros"
                  >
                    {ceg.telefonKiiras}
                  </a>
                  <span className="mt-1 block text-sm text-tinta-halvany">
                    {ceg.kapcsolattarto}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* 3. Szolgáltatások: pontosan a régi menü öt szolgáltatása.
          Bento ritmus 3x2 / 3 / 3 / 3, öt cella, üres hely nélkül. */}
      <Szakasz id="szolgaltatasok">
        <Reveal>
          <Cimsor className="max-w-[14ch] text-balance">Szolgáltatásaink</Cimsor>
          <Bevezeto className="mt-6">{ceg.mottó}.</Bevezeto>
        </Reveal>

        <div className="mt-12 grid gap-4 md:auto-rows-[248px] md:grid-cols-6">
          {szolgaltatasok.map((sz, i) => {
            const meret = [
              "md:col-span-3 md:row-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
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
                  {/* Erős fátyol a szövegsáv alatt: e nélkül a fehér szöveg
                      a világosabb fotórészeken nem érné el a WCAG AA-t. */}
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

      {/* 4. „Munkáinkból ízelítő”: a régi fényszóró oldal négy fotója,
          két előtte-utána párként. */}
      <Szakasz className="bg-papir-melyebb">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-6">
            <Cimsor className="max-w-[13ch] text-balance">Munkáinkból ízelítő</Cimsor>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-6">
            <Bevezeto>
              Autója fényszóróit újjá varázsoljuk. Húzza el a csúszkát: mind a négy
              fotó a saját műhelyünkben készült, ugyanarról a lámpáról felújítás
              előtt és után.
            </Bevezeto>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {fenyszoro.parok.map((par, i) => (
            <Reveal key={par.elotte} delay={i * 0.08}>
              <ElotteUtana
                elotte={par.elotte}
                utana={par.utana}
                alt={par.alt}
                className="aspect-3/4"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <GombLink href={`/${fenyszoro.slug}`} variant="csendes" className="mt-10">
            Fényszóró felújítás
            <ArrowRight size={15} aria-hidden />
          </GombLink>
        </Reveal>
      </Szakasz>

      {/* 5. Csomagajánlat, a „termek” oldal tartalmával. */}
      <Szakasz>
        <Reveal>
          <div className="flex flex-col gap-5">
            <Cimsor className="max-w-[14ch] text-balance">Csomagajánlat</Cimsor>
            <Bevezeto>
              {csomagFeltetel.megkotes} {csomagFeltetel.ervenyesseg}
            </Bevezeto>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {csomagok.map((cs, i) => (
            <Reveal key={cs.kod} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy sm:p-8">
                <span className="plakat text-[3.2rem] text-tinta">{cs.kod}</span>
                <p className="plakat mt-5 text-[2.4rem] tabular-nums text-piros">
                  {cs.ar.toLocaleString("hu-HU")} Ft
                </p>
                <ul className="mt-7 flex flex-col gap-3 border-t border-vonal pt-7">
                  {cs.tartalom.map((t) => (
                    <li key={t} className="flex gap-3 text-[0.98rem] leading-relaxed text-tinta">
                      <span aria-hidden className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-piros" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-6 rounded-[14px] border border-vonal bg-lap p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-tinta-halvany">
              <strong className="font-semibold text-tinta">Normál gumijavítás:</strong>{" "}
              {csomagFeltetel.normalGumijavitas} Nem vonatkozik:{" "}
              {csomagFeltetel.nemVonatkozik.join(", ").toLowerCase()}.
            </p>
            <GombLink href="/csomagajanlat" variant="masodlagos" className="shrink-0">
              Csomagok részletesen
            </GombLink>
          </div>
        </Reveal>
      </Szakasz>

      {/* 6. Gumihotel, a „ghotel” oldal szövegével és áraival. */}
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
              {gumihotelArak.map((a) => (
                <div key={a.tetel} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-tinta">{a.tetel}</dt>
                  <dd className="plakat text-[1.5rem] tabular-nums text-tinta">{a.ar}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[0.95rem] leading-relaxed text-tinta-halvany">
              A nálunk tárolt kerekeit vagy abroncsait korszerű riasztórendszer és
              vonuló biztonsági szolgálat védi.
            </p>

            <GombLink href="/gumihotel" variant="csendes" className="mt-6">
              Gumihotel
              <ArrowRight size={15} aria-hidden />
            </GombLink>
          </Reveal>
        </div>
      </Szakasz>

      {/* 7. Jó tudni: a régi oldal cikkének első három témája. */}
      <Szakasz>
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

      <HivasSav />
    </>
  );
}
