import type { Metadata } from "next";
import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { csomagok, csomagFeltetel } from "@/lib/site";
import { Bevezeto, Cimsor, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";

export const metadata: Metadata = {
  title: "Csomagajánlat",
  description:
    "Vásárolható csomagajánlat 4 db gumi szerelése mellé: S 5 000 Ft, M 10 000 Ft, XL 25 000 Ft. Gumijavítás, szelepcsere, ózonos klímatisztítás és szezonális gumitárolás.",
  alternates: { canonical: "/csomagajanlat" },
};

export default function Oldal() {
  return (
    <>
      <Szakasz className="pt-10 pb-10 md:pt-14 md:pb-12">
        <Cimsor as="h1" className="text-balance">
          Csomagajánlat
        </Cimsor>
        <Bevezeto className="mt-6 text-[1.15rem]">
          {csomagFeltetel.megkotes} {csomagFeltetel.ervenyesseg}
        </Bevezeto>
      </Szakasz>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-4 lg:grid-cols-3">
          {csomagok.map((cs, i) => (
            <Reveal key={cs.kod} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy sm:p-9">
                <span className="plakat text-[3.6rem] text-tinta">{cs.kod}</span>
                <p className="plakat mt-6 text-[2.8rem] tabular-nums text-piros">
                  {cs.ar.toLocaleString("hu-HU")} Ft
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-4 border-t border-vonal pt-8">
                  {cs.tartalom.map((t) => (
                    <li key={t} className="flex gap-3 leading-relaxed text-tinta">
                      <Check size={19} weight="bold" className="mt-0.5 shrink-0 text-piros" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Szakasz className="bg-papir-melyebb">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[14px] border border-vonal bg-lap p-8">
              <h2 className="plakat text-[1.8rem] text-tinta">Normál gumijavítás</h2>
              <p className="mt-4 leading-[1.7] text-tinta-halvany">
                {csomagFeltetel.normalGumijavitas}
              </p>
              <p className="mt-4 leading-[1.7] text-tinta-halvany">
                {csomagFeltetel.bovebben}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] border border-vonal bg-lap p-8">
              <h2 className="plakat text-[1.8rem] text-tinta">Mire nem vonatkozik</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {csomagFeltetel.nemVonatkozik.map((n) => (
                  <li key={n} className="flex gap-3 leading-relaxed text-tinta">
                    <X size={19} weight="bold" className="mt-0.5 shrink-0 text-tinta-halvany" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Szakasz>

      <HivasSav />
    </>
  );
}
