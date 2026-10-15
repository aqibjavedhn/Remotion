import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, useCurrentFrame } from "remotion";
export const Scene8Testimonials: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", padding: 80 }}>
      {/* Using scene7-office.mp4 as a soft background for testimonials */}
      <OffthreadVideo src={staticFile("video/scene7-office.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.95) 80%)", justifyContent: "center", alignItems: "center" }}>
        <div style={{ maxWidth: 1000, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          { [
            { quote: "I feel like myself again.", name: "— Mark, 42" },
            { quote: "Energy and focus are back.", name: "— Daniel, 36" },
            { quote: "Seamless care, real results.", name: "— Aaron, 48" },
            { quote: "Professional and easy.", name: "— Chris, 39" }
          ].map((t,i)=>(
            <div key={i} style={{ background: "white", padding: 24, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#1E3A5F" }}>{t.quote}</div>
              <div style={{ marginTop: 12, color: "#6B7280" }}>{t.name}</div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
