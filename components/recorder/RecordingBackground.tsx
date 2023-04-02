import { PropsWithChildren } from "react";
import { SportConfiguration } from "schema/types";
import { CANVAS_SIZE } from "./config";

const RecordingBackground: React.FC<
  PropsWithChildren<{ sport: SportConfiguration }>
> = ({ sport }) => (
  <div
    style={{
      width: "100vw",
      height: `min(80vh, ${CANVAS_SIZE.HEIGHT}px)`,
      backgroundImage: `url('${sport.fieldImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      margin: "0 auto",
    }}
  />
);

RecordingBackground.displayName = "RecordingBackground";

export { RecordingBackground };
