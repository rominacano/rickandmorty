import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { CharacterCard } from ".";
import { ICharacter } from "../../interfaces";

interface Props {
  characters: ICharacter[];
}

export const CharacterList: FC<Props> = ({ characters }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid.Container>
  );
};
