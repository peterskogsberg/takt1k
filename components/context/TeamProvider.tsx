import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { HOCKEY_CONFIGURATION } from "schema/sports";
import { Player, SportConfiguration, Team } from "schema/types";
import { getMockPlayers } from "utils/players";
import { TeamContext } from "./TeamContext";
import { TeamProviderValue } from "./TeamContext";

type TeamProviderProps = {
  sport?: SportConfiguration;
};

const TeamProvider: React.FunctionComponent<
  React.PropsWithChildren<TeamProviderProps>
> = ({ sport = HOCKEY_CONFIGURATION, children }) => {
  const [homePlayers, setHomePlayers] = useState<Player[]>([]);
  const [awayPlayers, setAwayPlayers] = useState<Player[]>([]);

  const isMountedRef = useRef(false);

  const fetchAndSetPlayers = async () => {
    const fetchPlayers = async () => {
      const home = getMockPlayers().slice(5);
      const away = getMockPlayers().slice(0, 5);
      setHomePlayers(home);
      setAwayPlayers(away);
    };
    void fetchPlayers();
  };

  useEffect(() => {
    isMountedRef.current = true;

    void fetchAndSetPlayers();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const value: TeamProviderValue | null = React.useMemo(
    () => ({
      sport,
      homeTeam: {
        name: "home",
        players: homePlayers,
        isHome: true,
      },
      awayTeam: {
        name: "away",
        players: awayPlayers,
        isHome: false,
      },
    }),
    [sport, isMountedRef, homePlayers, awayPlayers]
  );

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};

export { TeamProvider };
