import { Composition } from "remotion";
import { MainVideo } from "./Video";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AlignWellCommercial"
        component={MainVideo}
        durationInFrames={2490} // 83s * 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
