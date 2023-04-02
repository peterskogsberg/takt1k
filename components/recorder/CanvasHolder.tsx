import { PropsWithChildren } from "react";
import { CANVAS_SIZE } from "./config";

const CanvasHolder: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div
    className="canvas-holder"
    style={{
      position: "absolute",
      width: `${CANVAS_SIZE.WIDTH}px`,
      height: `${CANVAS_SIZE.HEIGHT}px`,
      top: "80px",
    }}
  >
    {children}
  </div>
);

CanvasHolder.displayName = "CanvasHolder";

export { CanvasHolder };
