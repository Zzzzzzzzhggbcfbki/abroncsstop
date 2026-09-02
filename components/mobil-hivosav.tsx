"use client";

import { Phone, NavigationArrow } from "@phosphor-icons/react";
import { ceg } from "@/lib/site";

/*
  Telefonon mindig kéznél lévő hívás és útvonal. A cég helyszíni, sürgős
  munkát is vállal, és a látogatók többsége mobilról, az út szélén nyitja meg
  az oldalt: ilyenkor nem szabad, hogy görgetni kelljen a telefonszámért.
  Csak lg alatt jelenik meg, ott a fejlécben úgyis ott a szám.
*/
export function MobilHivosav() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-vonal bg-papir/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch gap-2.5 px-4 py-2.5">
        <a
          href={ceg.telefonHref}
          className="plakat-vekony flex min-h-[54px] flex-[3] touch-manipulation items-center justify-center gap-2.5 rounded-[10px] bg-piros-tolt px-4 text-[15px] tracking-[0.045em] text-white transition-colors active:bg-piros-tolt-erosebb"
        >
          <Phone size={20} weight="fill" aria-hidden />
          Hívás most
        </a>
        <a
          href={ceg.terkepLink}
          target="_blank"
          rel="noreferrer"
          className="plakat-vekony flex min-h-[54px] flex-[2] touch-manipulation items-center justify-center gap-2 rounded-[10px] border border-vonal bg-lap px-4 text-[14px] tracking-[0.045em] text-tinta transition-colors active:bg-papir-melyebb"
        >
          <NavigationArrow size={18} weight="fill" className="text-piros" aria-hidden />
          Útvonal
        </a>
      </div>
    </div>
  );
}
