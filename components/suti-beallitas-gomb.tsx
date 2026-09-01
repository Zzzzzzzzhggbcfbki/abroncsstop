"use client";

import { nyissMegSav } from "./suti-sav";

export function SutiBeallitasGomb() {
  return (
    <button
      type="button"
      onClick={nyissMegSav}
      className="text-tinta-halvany underline decoration-vonal underline-offset-4 transition-colors hover:text-piros hover:decoration-piros"
    >
      Süti beállítások
    </button>
  );
}
