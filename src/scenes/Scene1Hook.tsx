import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = interpolate(spring({ frame, fps, config: { damping: 200, stiffness: 100, mass: 0.5 } }), [0,1], [2.5, 1]);
  const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const shakeIntensity = interpolate(frame, [0, 20], [1, 0], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <OffthreadVideo src={staticFile("video/scene1-bed.mp4")} muted style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{
          color: "white", fontFamily: "Inter, sans-serif", fontSize: 110, fontWeight: 900, letterSpacing: "0.05em",
          transform: `scale(${scale}) translate(${Math.sin(frame*1.8)*4*shakeIntensity}px, ${Math.cos(frame*1.8)*4*shakeIntensity}px)`,
          opacity, textShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}>FEELING OFF?</h1>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginTop: 16, opacity: interpolate(frame, [18,28], [0,1], {extrapolateRight: "clamp"}) }}>Lately... do you just feel off?</p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
