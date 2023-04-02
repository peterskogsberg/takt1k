import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";
import { SportConfiguration } from "schema/types";
import { CanvasHolder } from "./recorder/CanvasHolder";
import { Recorder } from "./recorder/Recorder";
import { RecordingBackground } from "./recorder/RecordingBackground";
import { RecordingToolbar } from "./recorder/RecordingToolbar";
import { Replayer } from "./recorder/Replayer";
import { CANVAS_SIZE, INITIAL_COLOR } from "./recorder/config";
import { loadDataToCanvas, saveCanvas } from "./utils/canvas-data";
import { playFn, recordFn, stopFn } from "./utils/replay-data";

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

  return (
    <>
      <div id="recording">
        <Recorder>{children}</Recorder>
        <RecordingBackground sport={sport} />
        <CanvasHolder>
          <CanvasDraw
            ref={ref}
            brushColor={color}
            canvasWidth={CANVAS_SIZE.WIDTH}
            canvasHeight={CANVAS_SIZE.HEIGHT}
          />
        </CanvasHolder>
        <RecordingToolbar
          onSave={() => {
            saveCanvas(ref);
          }}
          onLoad={() => {
            loadDataToCanvas(ref);
          }}
          onRecord={recordFn}
          onStop={stopFn}
          onPlay={() => playFn()}
        />
        <TwitterPicker
          color={color}
          onChangeComplete={(args) => {
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
