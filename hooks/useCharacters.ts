import useSWR, { SWRConfiguration } from "swr";
import { IInfo, ICharacter } from "../interfaces";

const baseURL = "https://rickandmortyapi.com/api";

export const useCharacters = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR(`${baseURL}/${url}`, config);

  const characters: ICharacter[] = data?.results.map(
    (character: ICharacter) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      created: character.created,
      image: character.image,
    })
  );

  const info: IInfo = {
    ...data?.info,
  };

  return {
    characters: characters || [],
    info: info || {},
    isLoading: !error && !data,
    isError: error,
  };
};
