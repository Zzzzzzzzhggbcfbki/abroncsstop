"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ArrowsHorizontal } from "@phosphor-icons/react";

/*
  Előtte-utána csúszka. A vezérlő egy valódi input[type=range], ami átlátszóan
  fekszik a kép középső sávján: így egérrel húzható, érintéssel csúsztatható és
  billentyűzetről is állítható, külön kezelő nélkül. Csak a középső sávot fedi le,
  hogy mobilon a kép többi részén maradjon függőleges görgetés.
*/
export function ElotteUtana({
  elotte,
  utana,
  alt,
  className = "",
}: {
  elotte: string;
  utana: string;
  alt: string;
  className?: string;
}) {
  const [ertek, setErtek] = useState(50);
  const azonosito = useId();
  const tarolo = useRef<HTMLDivElement>(null);

  return (
    <div ref={tarolo} className={`relative select-none overflow-hidden rounded-[14px] bg-papir-melyebb has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-piros-tolt has-[input:focus-visible]:ring-offset-2 has-[input:focus-visible]:ring-offset-papir ${className}`}>
      <Image
        src={utana}
        alt={`${alt} a felújítás után`}
        fill
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - ertek}% 0 0)` }}
      >
        <Image
          src={elotte}
          alt={`${alt} a felújítás előtt`}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
      </div>

      <span className="plakat-vekony pointer-events-none absolute left-4 top-4 rounded-[6px] bg-[#11100e]/75 px-2.5 py-1.5 text-[11px] text-white">
        Előtte
      </span>
      <span className="plakat-vekony pointer-events-none absolute right-4 top-4 rounded-[6px] bg-[#11100e]/75 px-2.5 py-1.5 text-[11px] text-white">
        Utána
      </span>

      <label htmlFor={azonosito} className="sr-only">
        {alt}: húzza vagy a nyílbillentyűkkel mozgassa az elválasztót a felújítás
        előtti és utáni állapot között
      </label>
      <input
        id={azonosito}
        type="range"
        min={0}
        max={100}
        step={1}
        value={ertek}
        onChange={(e) => setErtek(Number(e.target.value))}
        className="absolute inset-x-0 top-1/2 z-20 h-20 w-full -translate-y-1/2 cursor-ew-resize appearance-none bg-transparent opacity-0 focus:outline-none"
      />

      {/* A vonal és a fogantyú csak megjelenít, a range viszi az interakciót.
          A fókuszgyűrű a tárolóra kerül, mert a range maga átlátszó. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-white shadow-[0_0_0_1px_rgba(17,16,14,0.28)]"
        style={{ left: `${ertek}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-tinta shadow-emelt">
          <ArrowsHorizontal size={20} weight="bold" />
        </span>
      </div>
    </div>
  );
}
