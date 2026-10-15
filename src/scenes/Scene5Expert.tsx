import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, useCurrentFrame } from "remotion";
export const Scene5Expert: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#F0F7F9", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 60, padding: 80 }}>
      <OffthreadVideo src={staticFile("video/scene5-doctor.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
      <div style={{ width: 380, height: 480, borderRadius: 24, background: "white", boxShadow: "0 20px 50px rgba(0,0,0,0.08)", zIndex: 1, overflow: "hidden" }}>
        <OffthreadVideo src={staticFile("video/scene5-doctor.mp4")} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ maxWidth: 520, zIndex: 1 }}>
        <div style={{ color: "#2A9CB8", fontWeight: 800, letterSpacing: "0.12em", fontSize: 13 }}>EXPERT CARE</div>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 42, fontWeight: 900, color: "#1E3A5F", lineHeight: 1.1, marginTop: 12 }}>Backed by licensed<br/>U.S. providers.</h2>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          { ["Licensed Providers","Ongoing Monitoring"].map((t,i)=><div key={i} style={{ background: "white", padding: "10px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700, color: "#1E3A5F", opacity: interpolate(frame,[20+i*10,30+i*10],[0,1],{extrapolateRight:"clamp"})}}>✓ {t}</div>)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
