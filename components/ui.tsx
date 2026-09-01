import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* Egyetlen sarokrendszer az egész oldalon:
   panel 14px, vezérlő (gomb, input) 10px, apró jelölő 6px. */

type GombVariant = "elsodleges" | "masodlagos" | "csendes";

const gombAlap =
  "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-[10px] px-5 py-3 font-display text-[15px] font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color] duration-200 active:translate-y-px";

const gombVariansok: Record<GombVariant, string> = {
  elsodleges:
    "bg-piros-tolt text-white shadow-lagy hover:bg-piros-tolt-erosebb hover:text-white",
  masodlagos:
    "border border-vonal bg-lap text-tinta hover:border-tinta-halvany hover:bg-papir-melyebb",
  csendes:
    "text-tinta underline decoration-vonal decoration-2 underline-offset-[6px] hover:decoration-piros px-0 py-1",
};

export function GombLink({
  variant = "elsodleges",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: GombVariant }) {
  return (
    <Link className={`${gombAlap} ${gombVariansok[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function GombHoraf({
  variant = "elsodleges",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: GombVariant }) {
  return (
    <a className={`${gombAlap} ${gombVariansok[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Szakasz({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 md:py-28 ${id ? "scroll-mt-24" : ""} ${className}`}>
      <div className="mx-auto w-full max-w-[1240px]">{children}</div>
    </section>
  );
}

export function Cimsor({
  children,
  className = "",
  as: As = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      className={`font-display font-semibold tracking-[-0.03em] text-tinta ${
        As === "h1"
          ? "text-[2.4rem] leading-[1.05] sm:text-[3rem] lg:text-[3.5rem]"
          : As === "h2"
            ? "text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3rem]"
            : "text-xl leading-snug sm:text-2xl"
      } ${className}`}
    >
      {children}
    </As>
  );
}

export function Bevezeto({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`max-w-[62ch] text-[1.05rem] leading-[1.65] text-tinta-halvany ${className}`}>
      {children}
    </p>
  );
}
