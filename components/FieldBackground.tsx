import { urlQueryToSearchParams } from "node_modules/next/dist/shared/lib/router/utils/querystring";
import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";

type Sport = "hockey" | "football";

type FieldBackgroundProps = {
  sport: Sport;
  children: React.ReactNode;
};

const FieldBackground: React.FunctionComponent<FieldBackgroundProps> = ({
  sport,
  children,
}) => {
  const ref = useRef<CanvasDraw | null>(null);
  const [color, setColor] = useState<string>("#cdcdcd");

  return (
    <>
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
      <div
        style={{
          width: "100vw",
          height: "min(80vh, 400px)",
          backgroundImage: `url('img/${sport}.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          margin: "0 auto",
        }}
      ></div>
      <div
        className="canvas-holder"
        style={{
          position: "absolute",
          width: "800px",
          height: "400px",
          top: "20px",
        }}
      >
        <CanvasDraw
          ref={ref}
          brushColor={color}
          canvasWidth={"800"}
          canvasHeight={"400"}
        />
      </div>
      <div>
        <button
          onClick={() => {
            localStorage.setItem("savedDrawing", ref.current.getSaveData());
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            ref.current.loadSaveData(localStorage.getItem("savedDrawing"));
          }}
        >
          Load
        </button>
        <TwitterPicker
          color={color}
          onChangeComplete={(args) => {
            console.log({ args });
            setColor(args.hex);
          }}
        />
      </div>
    </>
  );
};

export { FieldBackground };
