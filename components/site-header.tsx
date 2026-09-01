"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { ceg, navLinkek } from "@/lib/site";

export function SiteHeader() {
  const [nyitva, setNyitva] = useState(false);
  const utvonal = usePathname();

  // Útvonalváltáskor csukódjon be a mobilmenü.
  useEffect(() => setNyitva(false), [utvonal]);

  // Nyitott menü alatt ne görögjön a háttér.
  useEffect(() => {
    document.body.style.overflow = nyitva ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nyitva]);

  return (
    <header className="sticky top-0 z-50 border-b border-vonal bg-papir/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center gap-3 px-5 sm:gap-6 sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-baseline gap-[7px] font-display text-[1.3rem] font-bold tracking-[-0.035em] text-tinta"
          aria-label="Abroncs Stop, vissza a főoldalra"
          translate="no"
        >
          <span>Abroncs</span>
          <span className="text-piros">Stop</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Fő navigáció">
          {navLinkek.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-[15px] font-medium tracking-[-0.01em] text-tinta-halvany transition-colors hover:text-tinta"
            >
              {l.cim}
            </Link>
          ))}
        </nav>

        <a
          href={ceg.telefonHref}
          className="ml-auto inline-flex shrink-0 touch-manipulation items-center gap-2 rounded-[10px] bg-piros-tolt px-3 py-2.5 font-display text-[14px] font-semibold text-white transition-colors hover:bg-piros-tolt-erosebb active:translate-y-px sm:px-4 sm:text-[15px] lg:ml-0"
        >
          <Phone size={17} weight="fill" aria-hidden />
          {ceg.telefonKiiras}
        </a>

        <button
          type="button"
          onClick={() => setNyitva((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-[10px] border border-vonal text-tinta lg:hidden"
          aria-expanded={nyitva}
          aria-controls="mobilmenu"
          aria-label={nyitva ? "Menü bezárása" : "Menü megnyitása"}
        >
          {nyitva ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {nyitva && (
        <div
          id="mobilmenu"
          className="border-t border-vonal bg-papir px-5 pb-8 pt-4 sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobil navigáció">
            {navLinkek.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-vonal py-4 font-display text-lg font-medium text-tinta"
              >
                {l.cim}
              </Link>
            ))}
          </nav>
          <a
            href={ceg.telefonHref}
            className="mt-6 inline-flex w-full touch-manipulation items-center justify-center gap-2 rounded-[10px] bg-piros-tolt px-5 py-3.5 font-display text-base font-semibold text-white"
          >
            <Phone size={18} weight="fill" aria-hidden />
            {ceg.telefonKiiras}
          </a>
        </div>
      )}
    </header>
  );
}
