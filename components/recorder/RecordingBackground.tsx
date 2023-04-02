import { PropsWithChildren } from "react";
import { SportConfiguration } from "schema/types";
import { CANVAS_SIZE } from "./config";
import { ObjectMarker } from "@components/ObjectMarker";

const RecordingBackground: React.FC<
  PropsWithChildren<{ sport: SportConfiguration }>
> = ({ sport, children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      width: "100vw",
      height: `min(80vh, ${CANVAS_SIZE.HEIGHT}px)`,
      backgroundImage: `url('${sport.fieldImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      margin: "0 auto",
    }}
  >
    <ObjectMarker sport={sport} />
    {children}
  </div>
);

RecordingBackground.displayName = "RecordingBackground";

export { RecordingBackground };
