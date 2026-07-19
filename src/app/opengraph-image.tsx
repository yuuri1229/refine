import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fa8829 0%, #f56a01 45%, #b84b00 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: 40,
            background: "rgba(255,255,255,0.18)",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 20,
              background: "#ffffff",
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 900, color: "#ffffff", letterSpacing: -2 }}>
          REFINE
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#fff4eb", marginTop: 16 }}>
          Mobile Bill Review Service
        </div>
      </div>
    ),
    { ...size },
  );
}
