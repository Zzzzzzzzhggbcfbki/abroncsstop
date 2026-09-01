import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  ceg,
  nyitvatartas,
  szolgaltatasok,
  fenyszoro,
  csomagok,
  csomagFeltetel,
  gumihotelArak,
  markak,
  markaNevek,
} from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf, GombLink, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";

const jotudniKivonat = [
  {
    cim: "A négyévszakos gumi nem két gumi egyben",
    szoveg:
      "Átmeneti megoldás a téli és a nyári között. A mintázata keverék, télen ezért marad el a teljesítménye a téli abroncsétól.",
  },
  {
    cim: "A guminyomás havi pár perc, és sokat számít",
    szoveg:
      "A jól felfújt abroncs tovább bírja, jobban tapad, és kevesebbet fogyaszt vele az autó. A pótkerékben is érdemes ránézni.",
  },
  {
    cim: "A kerékcsavart nyomatékkulcs húzza meg, nem az érzés",
    szoveg:
      "Így nem sérül a menetes csap, minden csavar ugyanakkora nyomatékot kap, és a következő szerelésnél könnyebb leszedni.",
  },
];

export default function Fooldal() {
  return (
    <>
      {/* 1. Hero: a fotó a jobb képernyőszélig fut, ferde éllel. A cím
          keskenyített verzál, mert a műhely nyelve ez, nem a magazintipográfia. */}
      <section className="relative">
        <div
          className="absolute inset-y-0 right-0 hidden w-[47%] lg:block"
          aria-hidden
        >
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
              Szerelés, centírozás, defektjavítás, TPMS és gumihotel egy helyen, a
              Kossuth Lajos utcában. Hívjon, és megmondjuk, mikor tudjuk fogadni.
            </Bevezeto>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GombHoraf href={ceg.telefonHref}>
                <Phone size={18} weight="fill" aria-hidden />
                {ceg.telefonKiiras}
              </GombHoraf>
              <GombLink href="#szolgaltatasok" variant="masodlagos">
                Mit csinálunk
                <ArrowRight size={17} aria-hidden />
              </GombLink>
            </div>
          </div>
        </div>

        {/* Mobilon a kép a szöveg alá kerül, teljes szélességben. */}
        <div className="relative aspect-16/11 w-full lg:hidden">
          <Image
            src="/fotok/hero-gumiszereles.jpg"
            alt="Kerékcsere az Abroncs Stop műhelyében"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Adatsáv: a három dolog, amiért egy helyi műhely oldalára jönnek. */}
      <section className="px-5 pt-10 sm:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-[1240px] rounded-[14px] border border-vonal bg-lap shadow-lagy">
          <dl className="grid divide-y divide-vonal sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <Clock size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">
                  Nyitvatartás
                </dt>
                <dd className="mt-2 space-y-1">
                  {nyitvatartas
                    .filter((n) => n.nyitva)
                    .map((n) => (
                      <span key={n.nap} className="block text-tinta">
                        {n.nap}: <strong className="font-semibold tabular-nums">{n.ora}</strong>
                      </span>
                    ))}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 sm:p-7">
              <MapPin size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">
                  Cím
                </dt>
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
                <dt className="plakat-vekony text-[12px] text-tinta-halvany">
                  Telefon
                </dt>
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

      {/* 3. Szolgáltatások: bento, hat cella, három közülük képes. */}
      <Szakasz id="szolgaltatasok">
        <Reveal>
          <Cimsor className="max-w-[14ch] text-balance">
            Amit elvégzünk
          </Cimsor>
          <Bevezeto className="mt-6">
            A gumitól a klímán át a fényszóróig, a kerék körüli munkák nagy részét
            helyben megoldjuk. Ha valamihez nem mi kellünk, megmondjuk, kihez
            érdemes vinni.
          </Bevezeto>
        </Reveal>

        {/* Fotóra ülő kártyák, változó méretben: 3x2 nagy, két 3x1, három 2x1.
            Pontosan hat cella, üres hely nélkül. */}
        <div className="mt-12 grid gap-4 md:auto-rows-[248px] md:grid-cols-6">
          {szolgaltatasok.map((sz, i) => {
            const meret = [
              "md:col-span-3 md:row-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-2",
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
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#14120f]/95 via-[#14120f]/55 to-[#14120f]/10"
                  />
                  <div className="relative p-6 sm:p-7">
                    <span className="plakat block text-[1.4rem] text-white/45">
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
                      className={`mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-white/75 ${
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

      {/* 4. Fényszóró: valódi munkafotók vízszintes sávban. */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-[46ch]">
              <Cimsor className="max-w-[13ch] text-balance">
                Fényszóró felújítás
              </Cimsor>
              <Bevezeto className="mt-6">
                A megsárgult búra nemcsak csúnya, kevesebb fényt is enged ki.
                Polírozással visszahozzuk az átlátszóságát, így este megint annyit
                lát, amennyit kellene. Az alábbi négy fotó a saját munkánk.
              </Bevezeto>
              <GombLink href={`/${fenyszoro.slug}`} variant="csendes" className="mt-6">
                Fényszóró felújítás
                <ArrowRight size={15} aria-hidden />
              </GombLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:thin]">
            {fenyszoro.kepek.map((k) => (
              <li
                key={k.src}
                className="relative aspect-3/4 w-[74vw] shrink-0 snap-start overflow-hidden rounded-[14px] bg-papir-melyebb sm:w-[38vw] lg:w-[23vw]"
              >
                <Image
                  src={k.src}
                  alt={k.alt}
                  fill
                  sizes="(max-width: 640px) 74vw, (max-width: 1024px) 38vw, 23vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 5. Csomagok: három szint, az XL szélesebb, mert az a teljes. */}
      <Szakasz className="bg-papir-melyebb">
        <Reveal>
          <div className="flex flex-col gap-5">
            <Cimsor className="max-w-[14ch] text-balance">
              Csomagajánlat
            </Cimsor>
            <Bevezeto>
              Négy gumi szerelése mellé megvásárolható. Egyszer fizet, és egy évig
              nem kell külön gondolkodnia a gumijavításon.
            </Bevezeto>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {csomagok.map((cs, i) => (
            <Reveal
              key={cs.kod}
              delay={i * 0.06}
              className={cs.kiemelt ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <div
                className={`flex h-full flex-col rounded-[14px] border p-7 sm:p-8 ${
                  cs.kiemelt
                    ? "border-piros bg-lap shadow-emelt"
                    : "border-vonal bg-lap shadow-lagy"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="plakat text-[3.2rem] text-tinta">
                    {cs.kod}
                  </span>
                  {cs.kiemelt && (
                    <span className="plakat-vekony rounded-[6px] bg-piros-halvany px-2.5 py-1 text-[11px] text-piros">
                      A teljes
                    </span>
                  )}
                </div>
                <p className="plakat mt-5 text-[2.4rem] text-piros tabular-nums">
                  {cs.ar.toLocaleString("hu-HU")} Ft
                </p>
                <ul className="mt-7 flex flex-col gap-3 border-t border-vonal pt-7">
                  {cs.tartalom.map((t) => (
                    <li key={t} className="flex gap-3 text-[0.98rem] leading-relaxed text-tinta">
                      <span
                        aria-hidden
                        className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-piros"
                      />
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
              {csomagFeltetel.mireVonatkozik} {csomagFeltetel.mireNem}
            </p>
            <GombLink href="/csomagajanlat" variant="masodlagos" className="shrink-0">
              Csomagok részletesen
            </GombLink>
          </div>
        </Reveal>
      </Szakasz>

      {/* 6. Gumihotel: fordított osztás, bal oldalt a kép. */}
      <Szakasz>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-papir-melyebb shadow-lagy">
              <Image
                src="/fotok/gumihotel-polc.jpg"
                alt="Gumiabroncsok a gumihotel polcain"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <Cimsor className="max-w-[12ch] text-balance">
              Gumihotel
            </Cimsor>
            <Bevezeto className="mt-6">
              Nyáron a télit, télen a nyárit nálunk hagyhatja.{" "}
              Nem kell hazacipelni a garnitúrát, és nem kell helyet keresni neki a
              garázsban. Ha esedékes a csere, elég telefonálnia: mire ideér, a
              kerekek elő vannak készítve. Fizetni a tárolás végén kell.
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
              A nálunk tárolt kerekeket riasztórendszer és vonuló biztonsági
              szolgálat védi.
            </p>

            <GombLink href="/gumihotel" variant="csendes" className="mt-6">
              Gumihotel
              <ArrowRight size={15} aria-hidden />
            </GombLink>
          </Reveal>
        </div>
      </Szakasz>

      {/* 7. Márkák: egyetlen futósáv az oldalon, ezért nem terhelő. */}
      <section className="border-y border-vonal bg-papir-melyebb py-14">
        <div className="mx-auto mb-9 w-full max-w-[1240px] px-5 sm:px-8">
          <h2 className="plakat-vekony text-[13px] text-tinta-halvany">
            Ezekhez a márkákhoz szerzünk be abroncsot
          </h2>
        </div>
        <div
          className="markasav-tarolo relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <div className="markasav flex w-max gap-3">
            {[...markak, ...markak].map((m, i) => (
              <div
                key={`${m}-${i}`}
                className="flex h-[76px] w-[172px] shrink-0 items-center justify-center rounded-[14px] border border-vonal bg-white px-5"
              >
                <Image
                  src={`/logok/${m}.png`}
                  alt={markaNevek[m]}
                  width={400}
                  height={130}
                  className="h-auto max-h-[42px] w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Jó tudni: számozott, szerkesztőségi ritmusú lista. */}
      <Szakasz>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Cimsor className="text-balance">Jó tudni</Cimsor>
            <Bevezeto className="mt-5">
              Három dolog, amit gyakran kérdeznek tőlünk a pult mellett.
            </Bevezeto>
            <GombLink href="/jo-tudni" variant="csendes" className="mt-6">
              A teljes összefoglaló
              <ArrowRight size={15} aria-hidden />
            </GombLink>
          </Reveal>

          <ol className="md:col-span-8">
            {jotudniKivonat.map((j, i) => (
              <Reveal as="li" key={j.cim} delay={i * 0.07}>
                <div className="flex gap-6 border-t border-vonal py-8 first:border-t-0 first:pt-0 md:gap-9">
                  <span className="font-display text-2xl font-semibold tabular-nums text-piros">
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
