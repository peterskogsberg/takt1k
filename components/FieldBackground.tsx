import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { TwitterPicker } from "react-color";
import { SportConfiguration } from "schema/types";
import { CanvasHolder } from "./recorder/CanvasHolder";
import { Recorder } from "./recorder/Recorder";
import { RecordingBackground } from "./recorder/RecordingBackground";
import { RecordingToolbar } from "./recorder/RecordingToolbar";
import { Replayer } from "./recorder/Replayer";
import { BLOCK_CLASS, CANVAS_SIZE, INITIAL_COLOR } from "./recorder/config";
import { loadDataToCanvas, saveCanvas } from "./utils/canvas-data";
import { playFn, recordFn, stopFn } from "./utils/replay-data";
import { RecorderState } from "./recorder/types";
import { Flare } from "@mui/icons-material";
import { RecordingToolbarButtonGroup } from "./recorder/RecordingToolbarButtonGroup";

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
  const [recorderState, setRecorderState] = useState<RecorderState>("idle");

  return (
    <>
      <div id="recording">
        {recorderState !== "playing" && (
          <>
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
          </>
        )}
      </div>
      {recorderState === "playing" ? (
        <Replayer />
      ) : (
        <div
          className={BLOCK_CLASS}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <RecordingToolbarButtonGroup
              onRecord={() => {
                setRecorderState("recording");
                recordFn();
              }}
              onStop={() => {
                setRecorderState("idle");
                stopFn();
              }}
              onPlay={() => {
                setRecorderState("playing");
              }}
              recordState={recorderState}
            />
          </div>
          <TwitterPicker
            color={color}
            onChangeComplete={(args) => {
              console.log({ args });
              setColor(args.hex);
            }}
          />
        </div>
      )}
    </>
  );
};

export { FieldBackground };
