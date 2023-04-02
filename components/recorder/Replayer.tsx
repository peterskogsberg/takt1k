import { CANVAS_SIZE } from "./config";

const Replayer: React.FC = () => (
  <div
    id="replayer"
    style={{
      width: `${CANVAS_SIZE.WIDTH}px`,
      height: `${CANVAS_SIZE.HEIGHT}px`,
      background: "orange",
    }}
  />
);

Replayer.displayName = "Replayer";

export { Replayer };
