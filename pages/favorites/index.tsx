import { useEffect, useState } from "react";
import { InternalLayout } from "../../components/layouts";
import { localFavorite } from "../../utils";
import { NoFavorites } from "../../components/ui";
import { FavoriteCharacters } from "../../components/character";

const FavoritesPage = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<number[]>([]);

  useEffect(() => {
    return () => {
      setFavoriteCharacters(localFavorite.favoritesCharacters());
    };
  }, []);

  return (
    <InternalLayout title="Favoritos - Rick and Morty">
      {favoriteCharacters.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoriteCharacters characters={favoriteCharacters} />
      )}
    </InternalLayout>
  );
};

export default FavoritesPage;
