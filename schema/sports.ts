import { SportConfiguration } from "./types";

const FOOTBALL_CONFIGURATION: SportConfiguration = {
  sport: "football",
  playersPerTeam: 11,
  fieldImage: "/img/sport/football/field.svg",
  objectImage: "/img/sport/football/object.svg",
} as const;

const HOCKEY_CONFIGURATION: SportConfiguration = {
  sport: "hockey",
  playersPerTeam: 6,
  fieldImage: "/img/sport/hockey/field.png",
  objectImage: "/img/sport/hockey/object.svg",
} as const;

export { FOOTBALL_CONFIGURATION, HOCKEY_CONFIGURATION };
