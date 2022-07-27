import { Container, Grid, Pagination, Spacer } from "@nextui-org/react";
import { MainLayout } from "../components/layouts";
import { CharacterList, ChracterSearch } from "../components/character";
import { useCharacters } from "../hooks";
import { useState } from "react";
import { FullScreenLoading } from "../components/ui";

const HomePage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { characters, info, isLoading } = useCharacters(
    `character/?page=${pageIndex}`
  );

  return (
    <MainLayout title="Personajes - Rick and Morty">
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <Container css={{ display: "flex", justifyContent: "end" }}>
          <Spacer x={2} />
          <Pagination
            css={{ m: 20 }}
            rounded
            total={info.pages}
            initialPage={1}
            page={pageIndex}
            onChange={(page) => {
              setPageIndex(page);
            }}
          />
          <CharacterList characters={characters} />
        </Container>
      )}
    </MainLayout>
  );
};

export default HomePage;
