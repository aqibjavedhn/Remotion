import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, useCurrentFrame } from "remotion";
export const Scene7Edge: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#F7FBFC", justifyContent: "center", alignItems: "center", padding: 80 }}>
      <OffthreadVideo src={staticFile("video/scene7-office.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(247,251,252,0.25) 0%, rgba(247,251,252,0.9) 75%)", justifyContent: "center", alignItems: "center" }}>
        <div style={{ maxWidth: 900, background: "white", padding: 36, borderRadius: 16, boxShadow: "0 20px 60px rgba(30,58,95,0.06)", textAlign: "center" }}>
          <div style={{ color: "#2A9CB8", fontWeight: 800, letterSpacing: "0.12em", fontSize: 13 }}>THE ALIGNWELL EDGE</div>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 38, fontWeight: 900, color: "#1E3A5F", marginTop: 12 }}>Science-backed treatment, delivered simply.</h2>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 16 }}>
            { ["Personalized","Convenient","Monitored"].map((t,i)=>(
              <div key={i} style={{ background: "#F8FAFB", padding: "10px 14px", borderRadius: 999, fontWeight: 700 }}>{t}</div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
