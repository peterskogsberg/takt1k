import Image from "next/image";
import React from "react";
import { SportConfiguration } from "schema/types";

type ObjectMarkerProps = {
  sport: SportConfiguration;
};

const SIZE = 50;

const ObjectMarker: React.FunctionComponent<ObjectMarkerProps> = ({
  sport: { sport, objectImage },
}) => (
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
);

export { ObjectMarker };
