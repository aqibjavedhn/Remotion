import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Vial } from "./scenes/Scene3Vial";
import { Scene4Process } from "./scenes/Scene4Process";
import { Scene5Expert } from "./scenes/Scene5Expert";
import { Scene6Timeline } from "./scenes/Scene6Timeline";
import { Scene7Edge } from "./scenes/Scene7Edge";
import { Scene8Testimonials } from "./scenes/Scene8Testimonials";
import { Scene9BrandCard } from "./scenes/Scene9BrandCard";

const MusicBed: React.FC = () => {
  const frame = useCurrentFrame();
  // Duck music under voiceover (-14dB), raise during pauses
  const volume = interpolate(
    frame,
    [0, 15, 240, 260, 1850, 1900, 2160, 2480],
    [0.15, 0.35, 0.18, 0.15, 0.15, 0.28, 0.32, 0.35],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return <Audio src={staticFile("audio/music-bed.mp3")} volume={volume} />;
};

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* GLOBAL AUDIO */}
      <Sequence from={0}><MusicBed /></Sequence>
      <Sequence from={0}><Audio src={staticFile("audio/voiceover.mp3")} volume={0.95} /></Sequence>
      
      {/* SFX LAYERS */}
      <Sequence from={0} durationInFrames={240}><Audio src={staticFile("audio/sfx-heartbeat.mp3")} volume={0.4} /></Sequence>
      <Sequence from={120} durationInFrames={20}><Audio src={staticFile("audio/sfx-whoosh.mp3")} volume={0.6} /></Sequence>
      <Sequence from={240} durationInFrames={40}><Audio src={staticFile("audio/sfx-chime.mp3")} volume={0.5} /></Sequence>

      {/* VIDEO SCENES - Timed to your VO script */}
      <Sequence from={0} durationInFrames={120}><Scene1Hook /></Sequence>
      <Sequence from={120} durationInFrames={120}><Scene2Problem /></Sequence>
      <Sequence from={240} durationInFrames={150}><Scene3Vial /></Sequence>
      <Sequence from={390} durationInFrames={450}><Scene4Process /></Sequence>
      <Sequence from={840} durationInFrames={270}><Scene5Expert /></Sequence>
      <Sequence from={1110} durationInFrames={390}><Scene6Timeline /></Sequence>
      <Sequence from={1500} durationInFrames={300}><Scene7Edge /></Sequence>
      <Sequence from={1800} durationInFrames={360}><Scene8Testimonials /></Sequence>
      <Sequence from={2160} durationInFrames={330}><Scene9BrandCard /></Sequence>
    </AbsoluteFill>
  );
};
