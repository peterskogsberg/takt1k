import { playFn } from "@components/utils/replay-data";
import { CANVAS_SIZE } from "./config";
import { useEffect } from "react";
import Box from "@mui/material/Box";

const Replayer: React.FC = () => {
  useEffect(() => {
    playFn();
  }, []);

  return (
    <Box
      component="div"
      id="replayer"
      sx={{
        width: `${CANVAS_SIZE.WIDTH}px`,
        height: `${CANVAS_SIZE.HEIGHT}px`,
        zIndex: 2,
        background: "transparent",
        "& iframe": {
          position: "absolute",
          top: `${0}px`,
          zIndex: 3,
        },
      }}
    />
  );
};

Replayer.displayName = "Replayer";

export { Replayer };
