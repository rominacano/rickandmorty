const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((characterId) => characterId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existCharacterInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const favoritesCharacters = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  existCharacterInFavorites,
  favoritesCharacters,
};
