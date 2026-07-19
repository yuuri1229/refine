import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpengraphImage() {
  const svg = await readFile(
    path.join(process.cwd(), "public/logo/refine-logo-white.svg"),
    "utf-8",
  );
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

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
        <img src={logoDataUri} alt="REFINE" width={520} height={92} />
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#fff4eb", marginTop: 28 }}>
          Mobile Bill Review Service
        </div>
      </div>
    ),
    { ...size },
  );
}
