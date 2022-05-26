import { Player } from "schema/types";
import { default as personResults } from "../__fixtures__/persons.json";

type PersonResult = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
};

const mapResultToPlayer = (person: PersonResult, index: number): Player => ({
  img: person.picture.medium,
  number: index,
  name: `${person.name.first} ${person.name.last}`,
});

const generatePlayers = async (amount: number): Promise<Player[]> => {
  const result = (await fetch(
    `https://randomuser.me/api/?page=1&results=${amount}`,
    {
      mode: "no-cors", // 'cors' by default
    }
  )) as unknown as { results: PersonResult[] };
  console.log(result);
  return result.results.map(mapResultToPlayer);
};

const getMockPlayers = () => {
  const pl = personResults.results.map(mapResultToPlayer);
  console.log({ personResults, pl });
  return pl;
};

export { generatePlayers, getMockPlayers };
