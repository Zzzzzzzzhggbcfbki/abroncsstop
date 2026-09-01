"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/* Egyetlen mozgás az oldalon: a szekciók tartalma alulról úszik be,
   sorban. Ez a sorrendet közli, vagyis azt, hogy mit olvasson elsőnek. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const csokkentett = useReducedMotion();
  const M = motion[as];

  if (csokkentett) {
    const As = as;
    return <As className={className}>{children}</As>;
  }

  return (
    <M
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </M>
  );
}
