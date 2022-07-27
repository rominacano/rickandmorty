import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useCharacters } from "../../hooks";

describe("use Characters", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useCharacters(`character/?page=1`));

    const { characters, info, isLoading, isError } = result.current;

    expect(characters.length).toBe(0);
    expect(isLoading).toBeTruthy();
    expect(info).toEqual({});
    expect(isError).toBeFalsy();
  });
});
