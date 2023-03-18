import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";

type Sport = "hockey" | "football";

type FieldBackgroundProps = {
  sport: Sport;
  children: React.ReactNode;
};

const INITIAL_COLOR = "#cdcdcd";

const FieldBackground: React.FunctionComponent<FieldBackgroundProps> = ({
  sport,
  children,
}) => {
  const ref = useRef<CanvasDraw | null>(null);
  const [color, setColor] = useState<string>(INITIAL_COLOR);
  const [events, setEvents] = useState([]);
  const [stopFn, setStopFn] = useState(null);

  const ev = [];

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
        <button
          onClick={() => {
            console.log("recording");

            // const thisStopFn = rrweb.record({
            //   emit(e) {
            //     console.log(e);
            //     ev.push(e);
            //   },
            // });
            // setStopFn(thisStopFn);
          }}
        >
          record
        </button>
        <button
          onClick={() => {
            console.log("stop rec");
            // if (stopFn !== null) {
            //   stopFn();
            // }
          }}
        >
          record
        </button>
        <button
          onClick={() => {
            console.log("play");
            // const events = ev;

            // const replayer = new rrweb.Replayer(events);
            // replayer.play();
          }}
        >
          play
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
