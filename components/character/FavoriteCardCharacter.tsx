import { Grid, Card, Col, Row, Text, Button, Tooltip } from "@nextui-org/react";
import { FC } from "react";
import { useCharacter } from "../../hooks";

interface Props {
  characterId: number;
}

export const FavoriteCardCharacter: FC<Props> = ({ characterId }) => {
  const { character } = useCharacter(`character/${characterId}`);

  return (
    <Grid xs={2} key={character.id}>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={character.image}
            objectFit="cover"
            width="100%"
            height={140}
            alt={character.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{character.name}</Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              {character.species}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
