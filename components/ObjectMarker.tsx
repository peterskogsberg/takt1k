import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";
import { SportConfiguration } from "schema/types";

type ObjectMarkerProps = {
  sport: SportConfiguration;
};

const SIZE = 50;

const ObjectMarker: React.FunctionComponent<ObjectMarkerProps> = ({
  sport: { sport, objectImage },
}) => (
  <Draggable>
    <div
      style={{
        zIndex: 3,
        width: "fit-content",
      }}
    >
      <Image
        src={objectImage}
        alt={sport}
        width={SIZE}
        height={SIZE}
        // TODO move the draggable stuff out
        onMouseDown={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
        }}
      />
    </div>
  </Draggable>
);

export { ObjectMarker };
