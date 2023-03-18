import type { Player } from "schema/types";

type PersonResult = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
};

const fetchPlayers = async (amount: number): Promise<PersonResult[]> =>
  (await fetch(
    `https://randomuser.me/api/?page=1&results=${amount}`
  )) as unknown as PersonResult[];

const generatePlayers = async (amount: number): Promise<Player[]> => {
  const players = await fetchPlayers(amount);
  return players.map(({ name, picture }, number) => ({
    img: picture.medium,
    number,
    name: `${name.first} ${name.last}`,
  }));
};
export { generatePlayers };
