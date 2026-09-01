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
      {/* 1. Hero: aszimmetrikus osztás, bal oldalon a mondanivaló, jobbon a kép. */}
      <section className="px-5 pb-4 pt-10 sm:px-8 md:pb-10 md:pt-16">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Cimsor as="h1" className="text-balance">
              Gumiszerviz Isaszegen, a{" "}
              <span className="text-piros">Kossuth Lajos</span> utcában.
            </Cimsor>
            <Bevezeto className="mt-6">
              Szerelés, centírozás, defektjavítás, TPMS és gumihotel egy helyen.
              Hívjon, és megmondjuk, mikor tudjuk fogadni.
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

          <div className="md:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-[14px] bg-papir-melyebb shadow-emelt">
              <Image
                src="/fotok/hero-gumiszereles.jpg"
                alt="Kerékcsere az Abroncs Stop műhelyében"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Adatsáv: a három dolog, amiért egy helyi műhely oldalára jönnek. */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto w-full max-w-[1240px] rounded-[14px] border border-vonal bg-lap shadow-lagy">
          <dl className="grid divide-y divide-vonal sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <Clock size={22} className="mt-0.5 shrink-0 text-piros" aria-hidden />
              <div className="min-w-0">
                <dt className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-tinta-halvany">
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
                <dt className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-tinta-halvany">
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
                <dt className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-tinta-halvany">
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
          <Cimsor className="max-w-[20ch] text-balance">
            Amit a kerék körül helyben elvégzünk
          </Cimsor>
          <Bevezeto className="mt-5">
            A gumitól a klímán át a fényszóróig. Ha valamihez nem mi kellünk,
            megmondjuk, kihez érdemes vinni.
          </Bevezeto>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {szolgaltatasok.map((sz, i) => {
            // Bento ritmus: 4+2 / 2+2+2 / 6. Pontosan hat cella, üres hely nélkül.
            const oszlop =
              i === 0 ? "md:col-span-4" : i === 5 ? "md:col-span-6" : "md:col-span-2";
            const kepHelye =
              i === 0 || i === 5 ? "oldalt" : i === 1 ? "nincs" : "felul";

            return (
              <Reveal key={sz.slug} delay={i * 0.05} className={oszlop}>
                <Link
                  href={`/${sz.slug}`}
                  className={`group flex h-full overflow-hidden rounded-[14px] border shadow-lagy transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-tinta-halvany hover:shadow-emelt ${
                    kepHelye === "nincs"
                      ? "border-vonal bg-papir-melyebb"
                      : "border-vonal bg-lap"
                  } ${kepHelye === "oldalt" ? "flex-col sm:flex-row-reverse" : "flex-col"}`}
                >
                  {kepHelye !== "nincs" && (
                    <div
                      className={`relative shrink-0 overflow-hidden bg-papir-melyebb ${
                        kepHelye === "oldalt"
                          ? "h-48 sm:h-auto sm:w-[38%]"
                          : "aspect-16/10"
                      }`}
                    >
                      <Image
                        src={sz.kep}
                        alt={sz.kepAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-tinta">
                      {sz.cim}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[0.98rem] leading-relaxed text-tinta-halvany">
                      {sz.osszefoglalo}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-display text-sm font-semibold text-piros">
                      Részletek
                      <ArrowRight
                        size={15}
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
              <Cimsor className="text-balance">
                A megsárgult búra kevesebb fényt enged ki
              </Cimsor>
              <Bevezeto className="mt-5">
                A búra idővel bepárásodik, megkarcolódik, megsárgul. Polírozással
                visszahozzuk az átlátszóságát, így este megint annyit lát, amennyit
                kellene. Az alábbi négy fotó a saját munkánk.
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
            <Cimsor className="max-w-[22ch] text-balance">
              Csomagajánlat négy gumi szerelése mellé
            </Cimsor>
            <Bevezeto>
              Egyszer fizet, és egy évig nem kell külön gondolkodnia a
              gumijavításon. A csomag a szereléssel együtt vásárolható meg.
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
                  <span className="font-display text-[2.6rem] font-bold leading-none tracking-[-0.04em] text-tinta">
                    {cs.kod}
                  </span>
                  {cs.kiemelt && (
                    <span className="rounded-[6px] bg-piros-halvany px-2.5 py-1 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-piros">
                      A teljes
                    </span>
                  )}
                </div>
                <p className="mt-5 font-display text-3xl font-semibold tracking-[-0.03em] text-piros tabular-nums">
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
            <Cimsor className="max-w-[20ch] text-balance">
              Nyáron a télit, télen a nyárit nálunk hagyhatja
            </Cimsor>
            <Bevezeto className="mt-5">
              Nem kell hazacipelni a garnitúrát, és nem kell helyet keresni neki a
              garázsban. Ha esedékes a csere, elég telefonálnia: mire ideér, a
              kerekek elő vannak készítve. Fizetni a tárolás végén kell.
            </Bevezeto>

            <dl className="mt-8 divide-y divide-vonal border-y border-vonal">
              {gumihotelArak.map((a) => (
                <div key={a.tetel} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-tinta">{a.tetel}</dt>
                  <dd className="font-display text-lg font-semibold tabular-nums text-tinta">
                    {a.ar}
                  </dd>
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
          <h2 className="font-display text-lg font-semibold tracking-[-0.02em] text-tinta">
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
