import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Daniel Di Salvo | Senior Frontend Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const OpenGraphImage = async ({ params }: Props) => {
  const { locale } = await params;

  const isSpanish = locale === "es";

  const description = isSpanish
    ? "Construyo productos web y mobile escalables."
    : "Building scalable web & mobile products.";

  const backgroundPath = path.join(
    process.cwd(),
    "public",
    "images",
    "og-background.png",
  );

  const background = await readFile(backgroundPath);

  const backgroundDataUrl = `data:image/png;base64,${background.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#050505",
        color: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* Imagen decorativa de fondo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={backgroundDataUrl}
        alt=""
        width={1200}
        height={630}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Contenido localizado */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: "100%",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            color: "#a1a1aa",
          }}
        >
          DANIEL DI SALVO
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 35,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          <span>SENIOR FRONTEND</span>
          <span style={{ color: "#818cf8" }}>ENGINEER</span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "#a1a1aa",
            maxWidth: 650,
          }}
        >
          {description}
        </div>

        <div
          style={{
            marginTop: 60,
            fontSize: 22,
            color: "#f5f5f5",
          }}
        >
          React · Next.js · React Native · TypeScript
        </div>
      </div>
    </div>,
    size,
  );
};

export default OpenGraphImage;
