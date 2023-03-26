type Sport = "hockey" | "football";

type Player = {
  name: string;
  number: number;
  img: string;
  isPlaying?: boolean;
};

type SportConfiguration = {
  sport: Sport;
  playersPerTeam: number;
  fieldImage: string;
  objectImage: string;
};

type Team = {
  name: string;
  players: Player[];
  isHome: boolean;
};

export type { Player, Sport, SportConfiguration, Team };
