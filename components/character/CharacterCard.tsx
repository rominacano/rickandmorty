import { FC, useState } from "react";
import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { format } from "date-fns";
import { ICharacter } from "../../interfaces";
import { localFavorite } from "../../utils";

interface Props {
  character: ICharacter;
}

export const CharacterCard: FC<Props> = ({ character }) => {
  const { id, name, species, status, created, image } = character;
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorite.existCharacterInFavorites(character.id)
  );

  const onToggleFavorite = (id: number) => {
    localFavorite.toggleFavorite(id);
    setIsInFavorites(!isInFavorites);
  };

  return (
    <Grid key={id} xs={4}>
      <Card isHoverable css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              {species}
            </Text>
            <Text h3 color="black">
              {name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={image}
            width="100%"
            height="100%"
            objectFit="cover"
            alt={name}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={14}>
                {`Estado: ${status}`}
              </Text>
              <Text color="#000" size={12}>
                {`Fecha de creaci\u00F3n: ${
                  created && format(new Date(created), "dd/MM/yyyy HH:mm")
                }`}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  ghost={!isInFavorites}
                  flat
                  auto
                  rounded
                  color="secondary"
                  onClick={() => onToggleFavorite(id)}
                  aria-label="Favorite"
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    {isInFavorites ? "En favorito" : "Guardar en favoritos"}
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
