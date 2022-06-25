import { API_KEY } from '@env';
import { Constants } from '@helpers/Constants';
import { ConvertGenreApiResponseToGenre, ConvertMovieApiResponseToMovie } from '@helpers/converts';
import { Genre, GenreApiResponse } from '@interfaces/Genre';
import { Movie, MovieApiResponse, MoviePaginateApiResponse } from '@interfaces/Movie';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface PopularMoviesList {
  pageNumber: number;
  popularsMovies: Movie[];
}

let popularsMovies: PopularMoviesList[] = [];

export const moviesAPI = axios.create({
  baseURL: Constants.MovieApi.API_MOVIES,
  timeout: 1000,
});

const getErrorAxiosMessage = (error: AxiosError) => {
  console.log(error);

  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error('Error', error.message);
  }
};

const getPathRoute = (path: string, queryParams: string[] = []) => {
  let finalRoute = `${path}?api_key=${API_KEY}`;

  queryParams.forEach((queryParam) => {
    finalRoute += `&${queryParam}`;
  });

  return finalRoute;
};

const getMoviesGenres = async (): Promise<Array<Genre>> => {
  try {
    const genresRoute: string = getPathRoute(Constants.MovieApi.GENRES_MOVIES);
    const {
      data: { genres },
    }: AxiosResponse<{ genres: GenreApiResponse[] }> = await moviesAPI.get<{
      genres: GenreApiResponse[];
    }>(genresRoute);

    let genresMovie: Array<Genre> = [];
    if (genres && genres?.length > 0)
      genresMovie = genres.map<Genre>((genre: GenreApiResponse) =>
        ConvertGenreApiResponseToGenre(genre),
      );

    return genresMovie;
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

const getMoviesGenresById = async (idGenre: number): Promise<Genre | undefined> => {
  try {
    const genresMovie = await getMoviesGenres();
    return genresMovie.find((item: Genre) => item.id === idGenre);
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

const getPopularMovies = async (
  pageNumber = 1,
  sortByDescVoteAverage = true,
): Promise<Array<Movie>> => {
  try {
    const popularMovies = popularsMovies.find((it) => it.pageNumber == pageNumber);
    if (popularMovies) return popularMovies.popularsMovies;

    const queryParams = ['sort_by=popularity.desc'];
    if (pageNumber && pageNumber > 0) queryParams.push(`page=${pageNumber}`);

    const popularMoviesRoute = getPathRoute(Constants.MovieApi.POPULAR_MOVIES, queryParams);
    const {
      data: { results },
    }: AxiosResponse<MoviePaginateApiResponse> = await moviesAPI.get<MoviePaginateApiResponse>(
      popularMoviesRoute,
    );

    let result: Array<Movie> = [];
    if (results) {
      const moviesInfo: Array<Promise<Movie>> = results.map(async (item: MovieApiResponse) => {
        const movieInfo = ConvertMovieApiResponseToMovie(item);
        if (item.genre_ids.length > 0)
          movieInfo.genres = await Promise.all(
            item.genre_ids.map(async (idGenre) => getMoviesGenresById(idGenre)),
          );
        return movieInfo;
      });

      result = await Promise.all(moviesInfo);

      popularsMovies = [
        ...popularsMovies,
        {
          pageNumber: pageNumber,
          popularsMovies: result,
        },
      ];
    }

    if (sortByDescVoteAverage)
      result = result.sort(
        (movieA: Movie, movieB: Movie) => movieB.voteAverage - movieA.voteAverage,
      );

    return result;
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

export { getMoviesGenres, getMoviesGenresById, getPopularMovies };
