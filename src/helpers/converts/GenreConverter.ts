import { Genre, GenreApiResponse } from '@interfaces/Genre';

export function ConvertGenreApiResponseToGenre(genreApiResponse: GenreApiResponse): Genre {
  const { id, name } = genreApiResponse;

  const genre: Genre = {
    id,
    name,
  };

  return genre;
}
