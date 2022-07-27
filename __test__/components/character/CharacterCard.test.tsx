import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CharacterCard } from "../../../components/character";
import {
  ICharacter,
  Species,
  Status,
} from "../../../interfaces/character-list";

describe("Character Card", () => {
  const character: ICharacter = {
    id: 218,
    name: "Mechanical Rick",
    status: Status.Alive,
    species: Species.Human,
    image: "https://rickandmortyapi.com/api/character/218",
    created: "2017-12-30T14:33:16.920Z",
  };

  test("renders homepage unchanged", () => {
    const { container } = render(<CharacterCard character={character} />);
    expect(container).toMatchSnapshot();
  });

  test("show name in character card", () => {
    render(<CharacterCard character={character} />);
    expect(screen.getByAltText(character.name)).toBeInTheDocument();
  });
});
