import type { ReactNode } from "react";
import { Bevezeto, Cimsor, Szakasz } from "./ui";

export type JogiBlokk = {
  cim: string;
  bekezdesek?: string[];
  lista?: string[];
  adatok?: [string, string][];
};

export function HianyzoJeloles({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-[6px] bg-piros-halvany px-1.5 py-0.5 font-display text-[0.9em] font-semibold text-piros">
      {children}
    </mark>
  );
}

export function JogiOldal({
  cim,
  bevezeto,
  frissitve,
  blokkok,
}: {
  cim: string;
  bevezeto: string;
  frissitve: string;
  blokkok: JogiBlokk[];
}) {
  return (
    <>
      <Szakasz className="pt-10 pb-6 md:pt-14 md:pb-8">
        <Cimsor as="h1" className="max-w-[16ch] text-balance">
          {cim}
        </Cimsor>
        <Bevezeto className="mt-6 text-[1.1rem]">{bevezeto}</Bevezeto>
        <p className="mt-4 text-sm text-tinta-halvany">Hatályos: {frissitve}</p>
      </Szakasz>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto w-full max-w-[820px]">
          {blokkok.map((b, i) => (
            <section
              key={b.cim}
              className={i > 0 ? "mt-12 border-t border-vonal pt-12" : ""}
            >
              <h2 className="plakat text-[1.6rem] text-tinta sm:text-[1.9rem]">{b.cim}</h2>

              {b.bekezdesek?.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mt-4 text-[1.02rem] leading-[1.75] text-tinta-halvany"
                >
                  {p.split(/(KITÖLTENDŐ)/).map((resz, k) =>
                    resz === "KITÖLTENDŐ" ? (
                      <HianyzoJeloles key={k}>kitöltendő</HianyzoJeloles>
                    ) : (
                      resz
                    ),
                  )}
                </p>
              ))}

              {b.adatok && (
                <dl className="mt-6 divide-y divide-vonal border-y border-vonal">
                  {b.adatok.map(([nev, ertek]) => (
                    <div key={nev} className="grid gap-1 py-3.5 sm:grid-cols-[16rem_1fr] sm:gap-6">
                      <dt className="font-display font-semibold text-tinta">{nev}</dt>
                      <dd className="leading-relaxed text-tinta-halvany">
                        {ertek === "KITÖLTENDŐ" ? (
                          <HianyzoJeloles>kitöltendő</HianyzoJeloles>
                        ) : (
                          ertek
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {b.lista && (
                <ul className="mt-5 flex flex-col gap-2.5">
                  {b.lista.map((l) => (
                    <li key={l} className="flex gap-3 leading-relaxed text-tinta-halvany">
                      <span aria-hidden className="mt-2.5 h-[3px] w-4 shrink-0 rounded-full bg-piros" />
                      {l}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
