"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Gomb } from "./ui";

export const SUTI_KULCS = "abroncsstop-suti-hozzajarulas";
export const SUTI_ESEMENY = "abroncsstop-suti-valtozas";

export type SutiDontes = "elfogadva" | "elutasitva" | null;

export function olvasDontes(): SutiDontes {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(SUTI_KULCS);
    return v === "elfogadva" || v === "elutasitva" ? v : null;
  } catch {
    // Privát ablakban vagy letiltott tárolásnál a hozzájárulás nem őrizhető meg,
    // ilyenkor minden alkalommal újra kérdezünk.
    return null;
  }
}

export function irDontes(dontes: Exclude<SutiDontes, null>) {
  try {
    window.localStorage.setItem(SUTI_KULCS, dontes);
  } catch {
    /* tárolás nélkül is működjön a döntés az adott munkamenetre */
  }
  window.dispatchEvent(new CustomEvent(SUTI_ESEMENY, { detail: dontes }));
}

export function nyissMegSav() {
  try {
    window.localStorage.removeItem(SUTI_KULCS);
  } catch {
    /* nincs teendő */
  }
  window.dispatchEvent(new CustomEvent(SUTI_ESEMENY, { detail: null }));
}

export function SutiSav() {
  const [dontes, setDontes] = useState<SutiDontes>(null);
  const [betoltve, setBetoltve] = useState(false);

  useEffect(() => {
    setDontes(olvasDontes());
    setBetoltve(true);
    const figyelo = (e: Event) => setDontes((e as CustomEvent).detail ?? null);
    window.addEventListener(SUTI_ESEMENY, figyelo);
    return () => window.removeEventListener(SUTI_ESEMENY, figyelo);
  }, []);

  const valaszt = useCallback((v: Exclude<SutiDontes, null>) => {
    irDontes(v);
    setDontes(v);
  }, []);

  // A szerveren és a döntés beolvasásáig nem rendereljük, hogy ne villanjon fel.
  if (!betoltve || dontes !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="suti-cim"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-5 rounded-[14px] border border-vonal bg-lap p-6 shadow-emelt sm:p-7 md:flex-row md:items-center md:gap-8">
        <div className="md:flex-1">
          <h2 id="suti-cim" className="plakat text-[1.35rem] text-tinta">
            Beágyazott térkép
          </h2>
          <p className="mt-2.5 text-[0.97rem] leading-relaxed text-tinta-halvany">
            Ez az oldal nem használ analitikai vagy hirdetési sütiket. Egyetlen
            dologhoz kérünk engedélyt: a kapcsolat oldalon lévő Google-térkép
            betöltéséhez, mert az a Google szervereihez csatlakozik. Enélkül is
            megtalál minket, a cím és az útvonal-hivatkozás mindig látszik.{" "}
            <Link
              href="/cookie-tajekoztato"
              className="font-semibold text-piros underline decoration-piros/40 underline-offset-4 hover:decoration-piros"
            >
              Cookie tájékoztató
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Gomb onClick={() => valaszt("elfogadva")}>Térkép engedélyezése</Gomb>
          <Gomb variant="masodlagos" onClick={() => valaszt("elutasitva")}>
            Nem kérem
          </Gomb>
        </div>
      </div>
    </div>
  );
}
