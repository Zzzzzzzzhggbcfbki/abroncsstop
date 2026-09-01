import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ceg } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abroncsstop.hu"),
  title: {
    default: "Abroncs Stop | Gumiszerviz Isaszegen",
    template: "%s | Abroncs Stop, Isaszeg",
  },
  description:
    "Gumiszerelés, centírozás, defektjavítás, TPMS, gumihotel, klímatisztítás és fényszóró felújítás Isaszegen, a Kossuth Lajos utcában. Hívjon: 30 621 1195.",
  keywords: [
    "gumiszerviz Isaszeg",
    "gumiszerelés Isaszeg",
    "defektjavítás Isaszeg",
    "gumihotel Isaszeg",
    "TPMS Isaszeg",
    "fényszóró felújítás",
    "klímatisztítás Isaszeg",
  ],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Abroncs Stop Bt.",
    title: "Abroncs Stop | Gumiszerviz Isaszegen",
    description:
      "Gumiszerelés, centírozás, defektjavítás, TPMS és gumihotel egy helyen, Isaszegen.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: ceg.nev,
  description:
    "Gumiszerviz Isaszegen: gumiszerelés, centírozás, defektjavítás, TPMS, gumihotel, klímatisztítás, felnijavítás és fényszóró felújítás.",
  url: "https://abroncsstop.hu",
  telephone: ceg.telefon,
  email: ceg.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ceg.cim.utca,
    postalCode: ceg.cim.iranyitoszam,
    addressLocality: ceg.cim.telepules,
    addressCountry: "HU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  sameAs: [ceg.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`${archivo.variable} ${publicSans.variable} antialiased`}>
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-piros-tolt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ugrás a tartalomra
        </a>
        <SiteHeader />
        <main id="tartalom">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
