import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Player } from "schema/types";

type PlayerMarkerProps = {
  player: Player;
  isActive: boolean;
};

const SIZE = 56;

const PlayerMarker: React.FunctionComponent<PlayerMarkerProps> = ({
  player,
  isActive,
}) => {
  return (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={`# ${player.number}`}
        color={isActive ? "primary" : "secondary"}
        showZero={true}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeContent={"LF"}
          color={isActive ? "primary" : "secondary"}
          showZero={true}
        >
          <Avatar
            sx={{ width: SIZE, height: SIZE }}
            alt={player.name}
            title={player.name}
            src={player.img}
            onMouseDown={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
            }}
          />
        </Badge>
      </Badge>
      <span
        style={{
          width: `${SIZE}px`,
          display: "flex",
          fontSize: "8px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {player.name}
      </span>
    </div>
  );
};

export { PlayerMarker };
