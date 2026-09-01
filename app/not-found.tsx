import { Phone, House } from "@phosphor-icons/react/dist/ssr";
import { ceg } from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf, GombLink, Szakasz } from "@/components/ui";

export default function NemTalalhato() {
  return (
    <Szakasz className="min-h-[60vh]">
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-piros">
        404
      </p>
      <Cimsor as="h1" className="mt-5 max-w-[14ch] text-balance">
        Ez az oldal nincs meg
      </Cimsor>
      <Bevezeto className="mt-6">
        Vagy elköltözött, vagy elgépelés került a címbe. A szolgáltatásaink a
        főoldalról mind elérhetők, és telefonon úgyis gyorsabb.
      </Bevezeto>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <GombHoraf href={ceg.telefonHref}>
          <Phone size={18} weight="fill" aria-hidden />
          {ceg.telefonKiiras}
        </GombHoraf>
        <GombLink href="/" variant="masodlagos">
          <House size={17} aria-hidden />
          Vissza a főoldalra
        </GombLink>
      </div>
    </Szakasz>
  );
}
