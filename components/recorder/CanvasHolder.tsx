import { PropsWithChildren } from "react";

const CanvasHolder: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div
    className="canvas-holder"
    style={{
      position: "absolute",
      width: "800px",
      height: "400px",
      top: "20px",
    }}
  >
    {children}
  </div>
);

export { CanvasHolder };
