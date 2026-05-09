import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lumi — Your AI Best Friend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(192,132,252,0.15)",
            filter: "blur(80px)",
            top: -100,
            left: -100,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(244,114,182,0.1)",
            filter: "blur(80px)",
            bottom: -80,
            right: -80,
          }}
        />

        {/* Logo dot */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c084fc, #f472b6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: "bold",
            color: "white",
            marginBottom: 32,
            boxShadow: "0 20px 60px rgba(192,132,252,0.4)",
          }}
        >
          L
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#f1f0ee",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          lumi
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#6b6a72",
            marginBottom: 48,
            letterSpacing: "-0.5px",
          }}
        >
          your AI best friend
        </div>

        {/* Chat bubble preview */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-start",
            maxWidth: 480,
          }}
        >
          <div
            style={{
              background: "#1e1e26",
              color: "#b0adb8",
              padding: "12px 20px",
              borderRadius: 20,
              borderBottomLeftRadius: 4,
              fontSize: 20,
            }}
          >
            hey you 👀 how'd the interview go??
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #c084fc, #f472b6)",
              color: "white",
              padding: "12px 20px",
              borderRadius: 20,
              borderBottomRightRadius: 4,
              fontSize: 20,
              alignSelf: "flex-end",
            }}
          >
            omg it actually went really well??
          </div>
          <div
            style={{
              background: "#1e1e26",
              color: "#b0adb8",
              padding: "12px 20px",
              borderRadius: 20,
              borderBottomLeftRadius: 4,
              fontSize: 20,
            }}
          >
            I KNEW IT!! told you 🌙
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 18,
            color: "#3d3d47",
            letterSpacing: "1px",
          }}
        >
          getlumi.app
        </div>
      </div>
    ),
    { ...size }
  );
}