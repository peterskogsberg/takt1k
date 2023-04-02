import { PropsWithChildren } from "react";
import { SportConfiguration } from "schema/types";

type RecordingToolbarProps = {
  // rootElement: HTMLElement;
  // playerElement: HTMLElement;
  onRecord: () => void;
  onSave: () => void;
  onLoad: () => void;
  onStop: () => void;
  onPlay: () => void;
};

const RecordingToolbar: React.FC<PropsWithChildren<RecordingToolbarProps>> = ({
  onLoad,
  onPlay,
  onRecord,
  onSave,
  onStop,
  // playerElement,
  // rootElement,
}) => (
  <>
    <button onClick={onSave}>Save</button>
    <button onClick={onLoad}>Load</button>
    <button onClick={onRecord}>record</button>
    <button onClick={onStop}>stop</button>
    <button onClick={onPlay}>play</button>
  </>
);

RecordingToolbar.displayName = "RecordingToolbar";

export { RecordingToolbar };
