import { ImageResponse } from "next/og";
import { ceg } from "@/lib/site";

export const alt = "Abroncs Stop, gumiszerviz Isaszegen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgKep() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e9ebeb",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#d40008",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 999,
                border: "6px solid #ffffff",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#15191a" }}>
            Abroncs&nbsp;<span style={{ color: "#c40007" }}>Stop</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              color: "#15191a",
              maxWidth: 940,
            }}
          >
            Gumiszerviz Isaszegen, a Kossuth Lajos utcában.
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: "#58605f" }}>
            Szerelés, centírozás, defektjavítás, TPMS, gumihotel.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #c7cbcb",
            paddingTop: 30,
            fontSize: 28,
            color: "#15191a",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700 }}>{ceg.telefonKiiras}</div>
          <div style={{ display: "flex", color: "#58605f" }}>{ceg.cim.teljes}</div>
        </div>
      </div>
    ),
    size,
  );
}
