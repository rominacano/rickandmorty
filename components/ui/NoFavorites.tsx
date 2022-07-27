import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick and Morty"
        css={{ opacity: 0.1 }}
        width={125}
        height={125}
      />
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Rick and Morty"
        css={{ opacity: 0.1 }}
        width={125}
        height={125}
      />
    </Container>
  );
};
