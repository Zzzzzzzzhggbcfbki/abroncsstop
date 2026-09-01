"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowUpRight } from "@phosphor-icons/react";
import { ceg } from "@/lib/site";
import {
  SUTI_ESEMENY,
  irDontes,
  olvasDontes,
  type SutiDontes,
} from "./suti-sav";
import { Gomb } from "./ui";

/*
  A Google-térkép beágyazása a Google szervereihez csatlakozik és sütit
  helyezhet el, ezért csak kifejezett hozzájárulás után töltjük be.
  Hozzájárulás nélkül a cím és egy külső hivatkozás marad, vagyis a
  szolgáltatás használható marad.
*/
export function Terkep() {
  const [dontes, setDontes] = useState<SutiDontes>(null);
  const [betoltve, setBetoltve] = useState(false);

  useEffect(() => {
    setDontes(olvasDontes());
    setBetoltve(true);
    const figyelo = (e: Event) => setDontes((e as CustomEvent).detail ?? null);
    window.addEventListener(SUTI_ESEMENY, figyelo);
    return () => window.removeEventListener(SUTI_ESEMENY, figyelo);
  }, []);

  if (betoltve && dontes === "elfogadva") {
    return (
      <div className="overflow-hidden rounded-[14px] border border-vonal bg-papir-melyebb">
        <iframe
          src={ceg.terkep}
          title="Az Abroncs Stop műhelye a térképen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full border-0 sm:h-[440px]"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[380px] flex-col items-start justify-center gap-5 rounded-[14px] border border-dashed border-vonal bg-papir-melyebb p-8 sm:h-[440px]">
      <MapPin size={30} className="text-piros" aria-hidden />
      <div>
        <p className="plakat text-[1.35rem] text-tinta">A műhely címe</p>
        <p className="mt-2 text-[1.05rem] leading-relaxed text-tinta-halvany">
          {ceg.cim.teljes}
        </p>
      </div>
      <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-tinta-halvany">
        Az interaktív térképet a Google szolgáltatja, ezért csak az Ön
        hozzájárulásával töltjük be.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Gomb
          onClick={() => {
            irDontes("elfogadva");
            setDontes("elfogadva");
          }}
        >
          Térkép betöltése
        </Gomb>
        <a
          href={ceg.terkepLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 self-center font-display text-sm font-semibold text-piros hover:underline"
        >
          Megnyitás a Google Maps oldalán
          <ArrowUpRight size={14} aria-hidden />
        </a>
      </div>
    </div>
  );
}
