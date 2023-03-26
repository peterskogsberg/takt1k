import { createContext } from "react";
import { SportConfiguration, Team } from "schema/types";

type TeamProviderValue = {
  sport: SportConfiguration;
  homeTeam: Team;
  awayTeam: Team;
};

const TeamContext = createContext<TeamProviderValue | null>(null);
TeamContext.displayName = "TeamContext";

export type { TeamProviderValue };
export { TeamContext };
