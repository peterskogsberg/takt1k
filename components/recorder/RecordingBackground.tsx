import { PropsWithChildren } from "react";
import { SportConfiguration } from "schema/types";

const RecordingBackground: React.FC<
  PropsWithChildren<{ sport: SportConfiguration }>
> = ({ sport }) => (
  <div
    style={{
      width: "100vw",
      height: "min(80vh, 400px)",
      backgroundImage: `url('${sport.fieldImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      margin: "0 auto",
    }}
  />
);

export { RecordingBackground };
