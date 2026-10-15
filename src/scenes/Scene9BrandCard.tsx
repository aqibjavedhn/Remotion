import { AbsoluteFill, Img, OffthreadVideo, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
export const Scene9BrandCard: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const logoSpring = spring({ frame, fps, config: { damping: 200, stiffness: 90 } });
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
      <OffthreadVideo src={staticFile("video/scene9-mountain.mp4")} muted style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.85) 75%)", justifyContent: "center", alignItems: "center" }}>
        <div style={{ opacity: interpolate(frame, [0,20], [0,1], {extrapolateRight: "clamp"}), transform: `scale(${interpolate(logoSpring,[0,1],[0.85,1])})`, display: "flex", flexDirection: "column", alignItems: "center", background: "white", padding: "36px 48px", borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
          <Img src={staticFile("align-well-logo.png")} style={{ width: 560, height: "auto", objectFit: "contain" }} />
          <div style={{ marginTop: 16, width: 560, height: 6, background: "linear-gradient(90deg, #1E3A5F 0%, #2A9CB8 100%)", transform: `scaleX(${interpolate(spring({frame: frame-15, fps, config:{damping:200}}),[0,1],[0,1])})`, borderRadius: 2 }} />
        </div>
        <h2 style={{ marginTop: 24, fontFamily: "Inter, sans-serif", fontSize: 28, fontWeight: 500, letterSpacing: "0.18em", color: "#1E3A5F", opacity: interpolate(frame,[20,35],[0,1],{extrapolateRight:"clamp"})}}>MAKE EVERY DAY COUNT</h2>
        <div style={{ marginTop: 20, background: "#1E3A5F", color: "white", padding: "14px 36px", borderRadius: 999, fontWeight: 700, transform: `scale(${interpolate(spring({frame: frame-30, fps, config:{damping:15}}),[0,1],[0,1])})`, boxShadow: "0 12px 30px rgba(30,58,95,0.3)"}}>AlignWell.com • Get Started Today</div>
        <p style={{ position: "absolute", bottom: 18, fontSize: 10, color: "#4B5563", textAlign: "center", maxWidth: 900 }}>Prescription requires lab work & provider consultation. Individual results vary. Risks and side effects may occur. Talk to your provider.</p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
