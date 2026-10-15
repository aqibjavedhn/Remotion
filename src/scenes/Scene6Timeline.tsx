import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene6Timeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = interpolate(frame, [10, 120], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <OffthreadVideo src={staticFile("video/scene6-pullup.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.85) 65%)", justifyContent: "center", alignItems: "center", padding: 60 }}>
        <div style={{ width: "100%", maxWidth: 1100, background: "white", padding: 28, borderRadius: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 34, fontWeight: 800, color: "#1E3A5F" }}>Your Care Timeline</h2>
          <div style={{ marginTop: 18, height: 10, background: "#EEF2F6", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ width: `${prog * 100}%`, height: "100%", background: "linear-gradient(90deg,#1E3A5F,#2A9CB8)" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800 }}>Quiz</div><div style={{ color: "#6B7280" }}>2-min</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800 }}>Lab</div><div style={{ color: "#6B7280" }}>At-home</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800 }}>Visit</div><div style={{ color: "#6B7280" }}>Clinician</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800 }}>Plan</div><div style={{ color: "#6B7280" }}>Delivered</div></div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
