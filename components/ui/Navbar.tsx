import NextLink from "next/link";
import Image from "next/image";
import { Spacer, useTheme, Container, Link, Text } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <Container
      css={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: theme?.colors.gray100.value,
        padding: "0 50px 0 0",
      }}
    >
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick and Morty"
        width={70}
        height={70}
      />
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Rick and Morty"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Link>
          <Text h2>R</Text>
          <Text h3>ick&nbsp;</Text>
          <Text h3>and&nbsp;</Text>
          <Text h2>M</Text>
          <Text h3>orty</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </Container>
  );
};
