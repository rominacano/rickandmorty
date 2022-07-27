import { Container, Loading, Text } from "@nextui-org/react";

export const FullScreenLoading = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Text h2 css={{ mb: 20 }}>
        Cargando...
      </Text>
      <Loading type="points" />
    </Container>
  );
};
