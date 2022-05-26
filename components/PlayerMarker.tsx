import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Player } from "schema/types";

type PlayerMarkerProps = {
  player: Player;
  isActive: boolean;
};

const PlayerMarker: React.FunctionComponent<PlayerMarkerProps> = ({
  player,
  isActive,
}) => {
  return (
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
          sx={{ width: 56, height: 56 }}
          alt={player.name}
          title={player.name}
          src={player.img}
          onMouseDown={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
          }}
        />
      </Badge>
    </Badge>
  );
};

export { PlayerMarker };
