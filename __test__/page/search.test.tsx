import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { getServerSideProps } from "../../pages/search/[query]";

const mockResponse = {
  info: {
    count: 2,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 290,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: "https://rickandmortyapi.com/api/location/34",
      },
      location: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: "https://rickandmortyapi.com/api/location/34",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/290",
      created: "2017-12-31T20:15:25.716Z",
    },
    {
      id: 293,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/6"],
      url: "https://rickandmortyapi.com/api/character/293",
      created: "2017-12-31T20:22:29.032Z",
    },
  ],
};

describe("getServerSideProps", () => {
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          characters: mockResponse.results,
          info: mockResponse.info,
          isError: false,
        }),
    })
  );

  it("should call api with search params", async () => {
    const context = {
      params: {
        query: "name=Rick%20Sanchez&status=Dead&page=1",
      } as ParsedUrlQuery,
    };
    const response = await getServerSideProps(
      context as GetServerSidePropsContext
    );
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          characters: mockResponse.results,
          info: mockResponse.info,
          isError: false,
        },
      })
    );
  });

  it("should call api with search params than not exists", async () => {
    const context = {
      params: {
        query: "name=Rick%20Sanchfez&status=Dead&page=1",
      } as ParsedUrlQuery,
    };
    const response = await getServerSideProps(
      context as GetServerSidePropsContext
    );
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          characters: [],
          info: {},
          isError: true,
        },
      })
    );
  });
});
