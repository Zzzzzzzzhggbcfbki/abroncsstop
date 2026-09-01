import { Phone } from "@phosphor-icons/react/dist/ssr";
import { ceg } from "@/lib/site";
import { GombHoraf, GombLink } from "./ui";

export function HivasSav({
  cim = "Nem tudja, mire van szüksége?",
  szoveg = "Mondja el, mit tapasztal az autón, és megmondjuk, mit érdemes csinálni vele. Ha nálunk a helye, azt is, mikor tud jönni.",
}: {
  cim?: string;
  szoveg?: string;
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[14px] bg-piros-tolt">
        <div className="grid gap-8 px-7 py-12 sm:px-12 md:grid-cols-12 md:items-center md:py-14">
          <div className="md:col-span-7">
            <h2 className="plakat max-w-[16ch] text-[2.1rem] text-white sm:text-[2.7rem]">
              {cim}
            </h2>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/85">
              {szoveg}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <GombHoraf
              href={ceg.telefonHref}
              variant="masodlagos"
              className="border-transparent bg-white text-[#a81e15] hover:bg-white/90 hover:text-[#8f1810]"
            >
              <Phone size={18} weight="fill" aria-hidden />
              {ceg.telefonKiiras}
            </GombHoraf>
            <GombLink
              href="/kapcsolat"
              variant="masodlagos"
              className="border-white/45 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              Hol találja
            </GombLink>
          </div>
        </div>
      </div>
    </section>
  );
}
