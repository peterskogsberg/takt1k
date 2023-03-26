import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";
import { SportConfiguration } from "schema/types";
import { CanvasHolder } from "./recorder/CanvasHolder";
import { INITIAL_COLOR, recordingConfig } from "./recorder/config";
import { Recorder } from "./recorder/Recorder";
import { RecordingBackground } from "./recorder/RecordingBackground";
import { RecordingToolbar } from "./recorder/RecordingToolbar";
import { Replayer } from "./recorder/Replayer";
import { loadDataToCanvas, saveCanvas } from "./utils/canvas-data";
// const rrweb = require("rrweb");
// const rrweb = await import("rrweb");

type FieldBackgroundProps = {
  sport: SportConfiguration;
  children: React.ReactNode;
};

type RRstopper = () => void | null;

const FieldBackground: React.FunctionComponent<FieldBackgroundProps> = ({
  sport,
  children,
}) => {
  const ref = useRef<CanvasDraw | null>(null);
  const [color, setColor] = useState<string>(INITIAL_COLOR);
  const [events, setEvents] = useState([]);
  const stopperFn = useRef<RRstopper>(null);

  const ev = [];
  // let stopFn = null;

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
        <Recorder>{children}</Recorder>
        <RecordingBackground sport={sport} />
        <CanvasHolder>
          <CanvasDraw
            ref={ref}
            brushColor={color}
            canvasWidth={"800"}
            canvasHeight={"400"}
          />
        </CanvasHolder>
        <RecordingToolbar
          onSave={() => {
            saveCanvas(ref);
          }}
          onLoad={() => {
            loadDataToCanvas(ref);
          }}
          onRecord={() => {
            console.log("recording");

            const stopper = rrweb.record({
              emit(e) {
                ev.push(e);
                console.log(e);
                console.log(ev.length);
              },
              ...recordingConfig,
            });
            stopperFn.current = stopper;
          }}
          onStop={() => {
            console.log("stop rec", ev);
            if (typeof stopperFn.current === "function") {
              console.log("inside");
              const st = stopperFn.current;
              const retVal = stopperFn.current();
              console.log({ retVal });
            }
          }}
          onPlay={() => {
            console.log("play");
            const root = document.getElementById("replayer");
            root.replaceChildren(); // clear
            void playFn(root);
          }}
        />
        <TwitterPicker
          color={color}
          onChangeComplete={(args) => {
            // THIS IS WHY RECORDING STOPS FFS, ev array gets cleared
            console.log({ args });
            setColor(args.hex);
          }}
        />
        <Replayer />
      </div>
    </>
  );
};

export { FieldBackground };
