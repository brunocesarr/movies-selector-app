import { Constants } from '@helpers/Constants';
import { Movie, MovieApiResponse } from '@interfaces/Movie';

const getUrlImageMovie = (pathImage?: string, width?: number | null): string => {
  if (!pathImage) return '';
  else if (width) return `${Constants.MovieApi.IMAGE_URL}/w${width}${pathImage}`;

  return `${Constants.MovieApi.IMAGE_URL}/original${pathImage}`;
};

export function ConvertMovieApiResponseToMovie(
  movieApiInfo: MovieApiResponse,
  widthImage: number | null = null,
): Movie {
  const {
    id,
    adult,
    backdrop_path,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movieApiInfo;

  const movieInfo: Movie = {
    id,
    isAdultMovie: adult,
    backdropPath: getUrlImageMovie(backdrop_path, widthImage),
    genres: [],
    originalLanguage: original_language?.toUpperCase(),
    originalTitle: original_title,
    overview,
    popularity,
    posterPath: getUrlImageMovie(poster_path, widthImage),
    releaseDate: release_date,
    title,
    hasVideo: video,
    voteAverage: vote_average,
    voteCount: vote_count,
  };

  return movieInfo;
}
