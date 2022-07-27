export interface CharacterListResponse {
  info: IInfo;
  results: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
  currentPage: number;
}

export interface ICharacter {
  id: number;
  name: string;
  status: Status;
  species: Species;
  image: string;
  created: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
