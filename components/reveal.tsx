"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
  A szekciók tartalma alulról úszik be, sorban: ez a sorrendet közli, vagyis
  azt, mit olvasson elsőnek. Korábban a motion könyvtár csinálta, de az
  önmagában száz kilobájt fölött volt egy ilyen egyszerű mozgásért. Mobilon,
  gyenge térerőn ez sokat számít, ezért IntersectionObserver és CSS átmenet
  végzi ugyanezt, néhány soros futásidővel.
*/
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const elem = useRef<HTMLElement>(null);
  const [lathato, setLathato] = useState(false);

  useEffect(() => {
    const e = elem.current;
    if (!e) return;

    // Csökkentett mozgás mellett azonnal a végállapot látszik.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLathato(true);
      return;
    }

    const figyelo = new IntersectionObserver(
      ([bejegyzes]) => {
        if (bejegyzes.isIntersecting) {
          setLathato(true);
          figyelo.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    figyelo.observe(e);
    return () => figyelo.disconnect();
  }, []);

  return (
    <As
      ref={elem as React.Ref<never>}
      className={`reveal ${lathato ? "reveal-lathato" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </As>
  );
}
