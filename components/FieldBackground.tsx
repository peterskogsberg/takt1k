import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";
import { SportConfiguration } from "schema/types";
import { INITIAL_COLOR, recordingConfig } from "./recorder/config";
// const rrweb = require("rrweb");
// const rrweb = await import("rrweb");

type FieldBackgroundProps = {
  sport: SportConfiguration;
  children: React.ReactNode;
};

const FieldBackground: React.FunctionComponent<FieldBackgroundProps> = ({
  sport,
  children,
}) => {
  const ref = useRef<CanvasDraw | null>(null);
  const [color, setColor] = useState<string>(INITIAL_COLOR);
  const [events, setEvents] = useState([]);

  let ev = [];
  let stopFn = null;

  const playFn = async (root: HTMLElement) => {
    console.log({ ev });
    const replayer = new rrweb.Replayer(ev, {
      root,
      UNSAFE_replayCanvas: true,
    });
    replayer.play();
  };

  return (
    <>
      <div id="recording">
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
            backgroundImage: `url('${sport.fieldImage}')`,
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
          onClick={async () => {
            console.log("recording");

            rrweb.record({
              emit(e) {
                ev.push(e);
                console.log(e);
                console.log(ev.length);
                // console.log({ ev });
              },
              ...recordingConfig,
            });
            // console.log("setting stop Fn", stopListener);
            // stopFn = stopListener;
            // stopFn = (evArray: unknown[]) => {
            //   console.log("stopFn", evArray);
            //   stopListener();
            // };
          }}
        >
          record
        </button>
        <button
          onClick={() => {
            console.log("stop rec", ev);
            if (typeof stopFn === "function") {
              stopFn();
            }
          }}
        >
          stop
        </button>
        <button
          onClick={async () => {
            console.log("play");
            const root = document.getElementById("replayer");
            void playFn(root);
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
        <div
          id="replayer"
          style={{
            width: "100%",
            height: "200px",
            background: "orange",
          }}
        ></div>
      </div>
    </>
  );
};

export { FieldBackground };
