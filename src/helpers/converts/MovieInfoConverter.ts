import { Movie, MovieApiResponse } from "../../interfaces";
import { Constants } from "../Constants";

const getUrlImageMovie = (
  pathImage?: string,
  width?: number,
  heigth?: number
): string => {
  if (!pathImage) return "";
  else if (width)
    return `${Constants.MovieApi.IMAGE_URL}/w${width}${pathImage}`;
  else if (heigth)
    return `${Constants.MovieApi.IMAGE_URL}/h${heigth}${pathImage}`;

  return `${Constants.MovieApi.IMAGE_URL}/original${pathImage}`;
};

export async function ConvertMovieApiResponseToMovie(
  movieApiInfo: MovieApiResponse
): Promise<Movie> {
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
    backdropPath: getUrlImageMovie(backdrop_path, 500),
    genres: [],
    originalLanguage: original_language?.toUpperCase(),
    originalTitle: original_title,
    overview,
    popularity,
    posterPath: getUrlImageMovie(poster_path, 500),
    releaseDate: release_date,
    title,
    hasVideo: video,
    voteAverage: vote_average,
    voteCount: vote_count,
  };

  return movieInfo;
}
