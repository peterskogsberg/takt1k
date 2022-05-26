import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Player } from "schema/types";

type PlayerMarkerProps = {
  player: Player;
};
/**
 *
 *
 * @param {*} {
 *   player,
 * }
 * @returns
 */
const PlayerMarker: React.FunctionComponent<PlayerMarkerProps> = ({
  player,
}) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={player.number}
    >
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt={player.name}
        src={player.img}
        onMouseDown={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
        }}
      />
    </Badge>
  );
};

export { PlayerMarker };
