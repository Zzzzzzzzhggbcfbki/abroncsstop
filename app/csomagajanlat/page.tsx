import type { Metadata } from "next";
import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { csomagok, csomagFeltetel } from "@/lib/site";
import { Bevezeto, Cimsor, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HivasSav } from "@/components/hivas-sav";

export const metadata: Metadata = {
  title: "Csomagajánlat",
  description:
    "S, M és XL csomag négy gumi szerelése mellé: gumijavítás, szelepcsere, ózonos klímatisztítás és szezonális tárolás egy évig. 5 000, 10 000 és 25 000 Ft.",
  alternates: { canonical: "/csomagajanlat" },
};

const nemVonatkozik = [
  "Oldalfalsérülés",
  "Vágás vagy hasadás",
  "Keréktárcsa oxidációja",
  "Sérült keréktárcsa",
];

export default function Oldal() {
  return (
    <>
      <Szakasz className="pt-10 pb-10 md:pt-14 md:pb-12">
        <Cimsor as="h1" className="text-balance">
          Csomagajánlat
        </Cimsor>
        <Bevezeto className="mt-6 text-[1.15rem]">
          Négy gumi szerelése mellé megvásárolható csomagok. Egyszer fizet, és a
          vásárlástól számított egy évig nem kell külön intéznie a benne foglalt
          munkákat.
        </Bevezeto>
      </Szakasz>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-4 lg:grid-cols-4">
          {csomagok.map((cs, i) => (
            <Reveal
              key={cs.kod}
              delay={i * 0.06}
              className={cs.kiemelt ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <div
                className={`flex h-full flex-col rounded-[14px] border p-7 sm:p-9 ${
                  cs.kiemelt ? "border-piros bg-lap shadow-emelt" : "border-vonal bg-lap shadow-lagy"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-tinta">
                    {cs.kod}
                  </span>
                  {cs.kiemelt && (
                    <span className="rounded-[6px] bg-piros-halvany px-2.5 py-1 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-piros">
                      A teljes
                    </span>
                  )}
                </div>
                <p className="mt-6 font-display text-4xl font-semibold tracking-[-0.035em] tabular-nums text-piros">
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
              <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-tinta">
                Mit jelent a normál gumijavítás
              </h2>
              <p className="mt-4 leading-[1.7] text-tinta-halvany">
                {csomagFeltetel.mireVonatkozik} Ez a leggyakoribb defekttípus, és a
                csomagban foglalt javítások erre vonatkoznak.
              </p>
              <p className="mt-4 leading-[1.7] text-tinta-halvany">
                {csomagFeltetel.megkotes}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] border border-vonal bg-lap p-8">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-tinta">
                Mire nem vonatkozik
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {nemVonatkozik.map((n) => (
                  <li key={n} className="flex gap-3 leading-relaxed text-tinta">
                    <X size={19} weight="bold" className="mt-0.5 shrink-0 text-tinta-halvany" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-tinta-halvany">
                Ezekben az esetekben egyedi árajánlatot adunk, mert a javíthatóság
                a sérülés mértékén múlik.
              </p>
            </div>
          </Reveal>
        </div>
      </Szakasz>

      <HivasSav
        cim="Melyik csomag éri meg Önnek?"
        szoveg="Attól függ, mennyit autózik és milyen úton. Mondja el, és megmondjuk, melyik hozza vissza az árát."
      />
    </>
  );
}
