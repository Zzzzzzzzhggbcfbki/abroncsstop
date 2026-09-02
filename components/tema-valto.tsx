"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export const TEMA_KULCS = "abroncsstop-tema";

const HATTER = { vilagos: "#e9ebeb", sotet: "#15181a" } as const;

function alkalmaz(sotet: boolean) {
  const gyoker = document.documentElement;
  if (sotet) gyoker.setAttribute("data-tema", "sotet");
  else gyoker.removeAttribute("data-tema");

  // A böngésző felső sávja kövesse az oldal hátterét.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", sotet ? HATTER.sotet : HATTER.vilagos);
}

export function TemaValto({ className = "" }: { className?: string }) {
  // A szerver mindig világos állapotot renderel, ezért a gomb tartalmát
  // csak beillesztés után cseréljük: így nincs hidratálási eltérés.
  const [sotet, setSotet] = useState(false);
  const [beilleszve, setBeilleszve] = useState(false);

  useEffect(() => {
    setSotet(document.documentElement.getAttribute("data-tema") === "sotet");
    setBeilleszve(true);
  }, []);

  function valt() {
    const uj = !sotet;
    setSotet(uj);
    alkalmaz(uj);
    try {
      window.localStorage.setItem(TEMA_KULCS, uj ? "sotet" : "vilagos");
    } catch {
      /* privát ablakban nem őrizhető meg, az adott munkamenetre így is működik */
    }
  }

  return (
    <button
      type="button"
      onClick={valt}
      aria-pressed={beilleszve ? sotet : undefined}
      aria-label={sotet ? "Váltás világos módra" : "Váltás sötét módra"}
      title={sotet ? "Világos mód" : "Sötét mód"}
      className={`inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-[10px] border border-vonal text-tinta transition-colors hover:bg-papir-melyebb ${className}`}
    >
      {beilleszve && sotet ? (
        <Sun size={19} weight="fill" aria-hidden />
      ) : (
        <Moon size={19} weight="fill" aria-hidden />
      )}
    </button>
  );
}
