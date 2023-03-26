import { useContext } from "react";
import type { TeamProviderValue } from "./TeamContext";
import { TeamContext } from "./TeamContext";

const useTeams = (): TeamProviderValue | null => {
  const teams = useContext(TeamContext);

  if ((teams as TeamProviderValue | null | undefined) === undefined) {
    throw Error("useTeams can only be used inside TeamProvider");
  }

  return teams;
};

export { useTeams };
