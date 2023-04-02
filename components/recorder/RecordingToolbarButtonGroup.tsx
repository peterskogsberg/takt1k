import { noop } from "@components/utils/dummy";
import ClearIcon from "@mui/icons-material/Clear";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SaveIcon from "@mui/icons-material/Save";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import type { RecorderState } from "./types";
import { BLOCK_CLASS } from "./config";

type RecordingToolbarButtonGroupProps = {
  onRecord: () => void;
  //   onSave: () => void;
  //   onLoad: () => void;
  onStop: () => void;
  onPlay: () => void;
  recordState: RecorderState;
};

const RecordingToolbarButtonGroup: React.FunctionComponent<
  RecordingToolbarButtonGroupProps
> = ({ onRecord, onStop, onPlay, recordState }) => {
  return (
    <Box
      className={BLOCK_CLASS}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {recordState === "idle" ? (
          <IconButton key="record" color="secondary" onClick={onRecord}>
            <RadioButtonCheckedIcon />
          </IconButton>
        ) : (
          <IconButton key="stop" color="secondary" onClick={onStop}>
            <StopIcon />
          </IconButton>
        )}
        {recordState === "idle" ? (
          <IconButton key="play" color="secondary" onClick={onPlay}>
            <PlayArrowIcon />
          </IconButton>
        ) : (
          <IconButton key="stop" color="secondary" onClick={onStop}>
            <StopIcon />
          </IconButton>
        )}
        <IconButton key="clear" color="secondary" onClick={noop}>
          <ClearIcon />
        </IconButton>
        {/* <IconButton key="save" color="secondary" onClick={onSave}>
          <SaveIcon />
        </IconButton>
        <IconButton key="load" color="secondary" onClick={onLoad}>
          <FileOpenIcon />
        </IconButton> */}
      </ButtonGroup>
    </Box>
  );
};

RecordingToolbarButtonGroup.displayName = "RecordingToolbarButtonGroup";

export { RecordingToolbarButtonGroup };
