import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useCharacter } from "../../hooks";

describe("use Character", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useCharacter(`character/1`));

    const { character } = result.current;

    expect(character).toEqual({});
  });
});
