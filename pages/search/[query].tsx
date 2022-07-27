import { GetServerSideProps, NextPage } from "next";
import { MainLayout } from "../../components/layouts";
import { CharacterList } from "../../components/character";
import { ICharacter, IInfo } from "../../interfaces";
import { characterApi } from "../../api";
import { Container, Pagination, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  characters: ICharacter[];
  info: IInfo;
  isError: boolean;
}

const SearchPage: NextPage<Props> = ({ characters, info, isError }) => {
  const { asPath, push } = useRouter();

  const onChangePage = (page: number) => {
    push(`${asPath}&page=${page}`);
  };

  return (
    <MainLayout title="Buscar Personajes - Rick and Morty">
      <Container css={{ display: "flex", justifyContent: "end" }}>
        {isError ? (
          <Text css={{ mt: 90 }}>No se encontraron resultados...</Text>
        ) : (
          <>
            <Spacer x={2} />
            <Pagination
              css={{ m: 20 }}
              rounded
              total={info.pages}
              initialPage={1}
              page={info.currentPage}
              onChange={(page) => {
                onChangePage(page);
              }}
            />
            <CharacterList characters={characters} />
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as {
    query: string;
  };
  if (!query.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    let response = await characterApi.get(`/character/?${query}`);
    return {
      props: {
        characters: response.data.results,
        info: response.data.info,
        isError: false,
      },
    };
  } catch (error) {
    return {
      props: {
        characters: [],
        info: {},
        isError: true,
      },
    };
  }
};

export default SearchPage;
