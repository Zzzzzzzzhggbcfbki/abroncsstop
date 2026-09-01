import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";
import { fenyszoro } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fényszóró felújítás",
  description:
    "Autója fényszóróit újjá varázsoljuk. Fényszóró felújítás Isaszegen, a Kossuth Lajos utcában.",
  alternates: { canonical: "/fenyszoro-felujitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Fényszóró felújítás"
      bevezeto="Autója fényszóróit újjá varázsoljuk. Kérje szolgáltatásunkat."
      kep="/fotok/fenyszoro-03.jpg"
      kepAlt="Felújított, kitisztult fényszóróbúra"
      parok={[...fenyszoro.parok]}
      blokkok={[
        {
          cim: "Munkáinkból ízelítő",
          bekezdesek: [
            "A lenti két pár a saját műhelyünkben készült, ugyanarról a lámpáról felújítás előtt és után. Húzza el a csúszkát, és nézze meg a különbséget.",
          ],
        },
      ]}
    />
  );
}
