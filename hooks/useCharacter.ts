import useSWR, { SWRConfiguration } from "swr";
import { ICharacter } from "../interfaces";

const baseURL = "https://rickandmortyapi.com/api";

export const useCharacter = (url: string, config: SWRConfiguration = {}) => {
  const { data } = useSWR(`${baseURL}/${url}`, config);

  const character: ICharacter = {
    id: data?.id,
    name: data?.name,
    species: data?.species,
    status: data?.status,
    created: data?.created,
    image: data?.image,
  };
  return {
    character: character || {},
  };
};
