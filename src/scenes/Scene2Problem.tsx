import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, useCurrentFrame } from "remotion";
export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0F1A" }}>
      <OffthreadVideo src={staticFile("video/scene2-gym.mp4")} muted style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.55, filter: "saturate(0.6)" }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, transparent 30%, rgba(10,15,26,0.85) 100%)", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 24 }}>
          { ["LOW ENERGY.", "ZERO FOCUS.", "NO DRIVE."].map((t, i) => (
            <h2 key={i} style={{
              color: "white", fontFamily: "Inter, sans-serif", fontSize: 48, fontWeight: 900,
              opacity: interpolate(frame, [10+i*8, 20+i*8], [0,1], {extrapolateRight: "clamp"}),
              transform: `translateY(${interpolate(frame, [10+i*8, 25+i*8], [20,0], {extrapolateRight: "clamp"})}px)`,
              borderLeft: "4px solid #2A9CB8", paddingLeft: 16
            }}>{t}</h2>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
