import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Clock } from "@phosphor-icons/react/dist/ssr";
import { ceg, nyitvatartas } from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf } from "./ui";
import { Reveal } from "./reveal";
import { HivasSav } from "./hivas-sav";
import { ElotteUtana } from "./elotte-utana";

export type Blokk = {
  cim?: string;
  bekezdesek?: string[];
  lista?: string[];
};

export type ArTetel = { tetel: string; ar: string };

export function SzolgaltatasOldal({
  cim,
  bevezeto,
  kep,
  kepAlt,
  blokkok,
  arak,
  arakCime = "Árak",
  parok,
  ctaCim,
  ctaSzoveg,
}: {
  cim: string;
  bevezeto: string;
  kep: string;
  kepAlt: string;
  blokkok: Blokk[];
  arak?: ArTetel[];
  arakCime?: string;
  parok?: readonly { elotte: string; utana: string; alt: string }[];
  ctaCim?: string;
  ctaSzoveg?: string;
}) {
  return (
    <>
      <section className="px-5 pt-10 sm:px-8 md:pt-14">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href="/#szolgaltatasok"
            className="plakat-vekony inline-flex items-center gap-2 text-[12px] text-tinta-halvany transition-colors hover:text-piros"
          >
            <ArrowLeft size={15} aria-hidden />
            Szolgáltatások
          </Link>

          <Cimsor as="h1" className="mt-6 max-w-[13ch] text-balance">
            {cim}
          </Cimsor>
          <Bevezeto className="mt-6 text-[1.15rem]">{bevezeto}</Bevezeto>

          <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-[14px] bg-papir-melyebb shadow-lagy sm:aspect-16/9">
            <Image
              src={kep}
              alt={kepAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 lg:col-span-8">
            {blokkok.map((b, i) => (
              <Reveal key={b.cim ?? i} delay={i * 0.05}>
                <div className={i > 0 ? "mt-12" : ""}>
                  {b.cim && (
                    <h2 className="plakat text-[1.8rem] text-tinta sm:text-[2.1rem]">
                      {b.cim}
                    </h2>
                  )}
                  {b.bekezdesek?.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 max-w-[68ch] text-[1.05rem] leading-[1.7] text-tinta-halvany"
                    >
                      {p}
                    </p>
                  ))}
                  {b.lista && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {b.lista.map((l) => (
                        <li
                          key={l}
                          className="flex gap-3 rounded-[14px] border border-vonal bg-lap p-4 text-[0.98rem] leading-relaxed text-tinta"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-piros"
                          />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            {parok && (
              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {parok.map((par) => (
                    <ElotteUtana
                      key={par.elotte}
                      elotte={par.elotte}
                      utana={par.utana}
                      alt={par.alt}
                      className="aspect-3/4"
                    />
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <aside className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-[92px] flex flex-col gap-4">
              {arak && (
                <div className="rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy">
                  <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
                    {arakCime}
                  </h2>
                  <dl className="mt-5 divide-y divide-vonal">
                    {arak.map((a) => (
                      <div
                        key={a.tetel}
                        className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                      >
                        <dt className="text-[0.98rem] text-tinta-halvany">{a.tetel}</dt>
                        <dd className="shrink-0 font-display font-semibold tabular-nums text-tinta">
                          {a.ar}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy">
                <h2 className="plakat text-[1.5rem] text-tinta">
                  Időpontot kérne?
                </h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-tinta-halvany">
                  Hívjon, és megbeszéljük, mikor tudjuk fogadni. {ceg.kapcsolattarto} veszi fel.
                </p>
                <GombHoraf href={ceg.telefonHref} className="mt-6 w-full">
                  <Phone size={18} weight="fill" aria-hidden />
                  {ceg.telefonKiiras}
                </GombHoraf>
                <div className="mt-6 flex gap-3 border-t border-vonal pt-6">
                  <Clock size={19} className="mt-0.5 shrink-0 text-piros" aria-hidden />
                  <dl className="flex-1 space-y-1.5 text-[0.95rem]">
                    {nyitvatartas.map((n) => (
                      <div key={n.nap} className="flex items-baseline justify-between gap-3">
                        <dt className="text-tinta-halvany">{n.nap}</dt>
                        <dd
                          className={`tabular-nums ${
                            n.nyitva ? "font-semibold text-tinta" : "text-tinta-halvany"
                          }`}
                        >
                          {n.ora}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <HivasSav cim={ctaCim} szoveg={ctaSzoveg} />
    </>
  );
}
