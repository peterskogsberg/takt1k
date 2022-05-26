import { Player } from "schema/types";

type PersonResult = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
};

const generatePlayers = async (amount: number): Promise<Player[]> => {
  const result = (await fetch(
    `https://randomuser.me/api/?page=1&results=${amount}`
  )) as unknown as PersonResult[];
  return result.map((person, index) => ({
    img: person.picture.medium,
    number: index,
    name: `${person.name.first} ${person.name.last}`,
  }));
};
export { generatePlayers };
