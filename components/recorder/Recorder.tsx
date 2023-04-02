import { PropsWithChildren } from "react";

const Recorder: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div
    style={{
      position: "absolute",
      right: "80px",
      top: "20px",
      zIndex: 999,
    }}
  >
    {children}
  </div>
);

Recorder.displayName = "Recorder";

export { Recorder };
