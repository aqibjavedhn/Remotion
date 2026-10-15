import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
const steps = [{n:"01",t:"Quick Quiz",d:"2-min intake"},{n:"02",t:"Lab Work",d:"At-home kit"},{n:"03",t:"Clinician",d:"Virtual visit"},{n:"04",t:"Custom Plan",d:"Delivered"}];
export const Scene4Process: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const lineProgress = interpolate(frame, [20, 90], [0, 1], {extrapolateRight: "clamp"});
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <OffthreadVideo src={staticFile("video/scene4-sofa.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 28, fontWeight: 800, color: "#1E3A5F", marginBottom: 36, background: "white", padding: "10px 22px", borderRadius: 999 }}>Optimization Made Effortless</h2>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1050, position: "relative" }}>
          <div style={{ position: "absolute", top: 32, left: "8%", right: "8%", height: 4, background: "#E5E7EB" }}><div style={{ width: `${lineProgress*100}%`, height: "100%", background: "linear-gradient(90deg, #1E3A5F, #2A9CB8)" }} /></div>
          {steps.map((s,i) => {
            const sp = spring({ frame: frame - i*18, fps, config: { damping: 14 } }); const active = frame > i*18+15;
            return <div key={i} style={{ flex: 1, background: "white", borderRadius: 20, padding: 24, textAlign: "center", border: `2px solid ${active?"#2A9CB8":"#F3F4F6"}`, transform: `scale(${interpolate(sp,[0,1],[0.8,1])})`, boxShadow: active?"0 10px 30px rgba(42,156,184,0.12)":"none" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, margin: "0 auto 14px", background: active?"#1E3A5F":"#F3F4F6", color: active?"white":"#9CA3AF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 800 }}>{active?"✓":s.n}</div>
              <div style={{ fontWeight: 800, color: "#1E3A5F" }}>{s.t}</div><div style={{ fontSize: 13, color: "#6B7280" }}>{s.d}</div>
            </div>;
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
