import { FC } from "react";
import { Grid, Text } from "@nextui-org/react";
import { FavoriteCardCharacter } from "./";

interface Props {
  characters: number[];
}

export const FavoriteCharacters: FC<Props> = ({ characters }) => {
  return (
    <>
      <Text h2 css={{ m: 10 }}>
        Personajes favoritos
      </Text>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {characters.map((id) => (
          <FavoriteCardCharacter key={id} characterId={id} />
        ))}
      </Grid.Container>
    </>
  );
};
