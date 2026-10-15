import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
export const Scene3Vial: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const vialSpring = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  return (
    <AbsoluteFill style={{ backgroundColor: "#F8FAFB", justifyContent: "center", alignItems: "center" }}>
      <OffthreadVideo src={staticFile("video/scene3-vial.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.95 }} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", background: "rgba(248,250,251,0.4)" }}>
        <div style={{ transform: `scale(${interpolate(vialSpring, [0,1], [0.85, 1])})`, textAlign: "center", background: "white", padding: "28px 40px", borderRadius: 20, boxShadow: "0 30px 60px rgba(30,58,95,0.15)" }}>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "#2A9CB8", fontWeight: 800 }}>TESTOSTERONE CYPIONATE</div>
          <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 6 }}>Rx Only • Prescription Required</div>
        </div>
        <h2 style={{ marginTop: 28, fontFamily: "Inter, sans-serif", fontSize: 30, fontWeight: 700, color: "#1E3A5F", background: "rgba(255,255,255,0.9)", padding: "12px 20px", borderRadius: 999, opacity: interpolate(frame, [15,30], [0,1], {extrapolateRight: "clamp"}) }}>
          It might not be aging. It might be low testosterone.*
        </h2>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
