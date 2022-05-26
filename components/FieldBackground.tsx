import { urlQueryToSearchParams } from "node_modules/next/dist/shared/lib/router/utils/querystring";
import React from "react";

type Sport = "hockey" | "football";

type FieldBackgroundProps = {
  sport: Sport;
  children: React.ReactNode;
};

const FieldBackground: React.FunctionComponent<FieldBackgroundProps> = ({
  sport,
  children,
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('img/${sport}.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {children}
    </div>
  );
};

export { FieldBackground };
