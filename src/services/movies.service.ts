import { API_KEY } from "@env";
import axios, { AxiosResponse } from "axios";

import { Constants } from "../helpers/Constants";
import { ConvertMovieApiResponseToMovie } from "../helpers/converts";
import { Genre, Movie, MovieApiResponse } from "../interfaces";

interface PopularMoviesList {
  pageNumber: number;
  popularsMovies: Movie[];
}

let popularsMovies: PopularMoviesList[] = [];

export const moviesAPI = axios.create({
  baseURL: Constants.MovieApi.API_MOVIES,
  timeout: 1000,
});

const getErrorAxiosMessage = (error: any) => {
  console.log(error);

  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error("Error", error.message);
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
    const genresRoute = getPathRoute(Constants.MovieApi.GENRES_MOVIES);
    const { data }: AxiosResponse = await moviesAPI.get(genresRoute);
    return data.genres ?? [];
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

const getMoviesGenresById = async (idGenre: number): Promise<Genre> => {
  try {
    const genresRoute = getPathRoute(Constants.MovieApi.GENRES_MOVIES);
    const { data }: AxiosResponse = await moviesAPI.get(genresRoute);
    return data.genres.find((item: Genre) => item.id === idGenre);
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

const getPopularMovies = async (
  pageNumber = 1,
  sortByDescVoteAverage = true
): Promise<Array<Movie>> => {
  try {
    const popularMovies = popularsMovies.find(
      (it) => it.pageNumber == pageNumber
    );
    if (popularMovies) return popularMovies.popularsMovies;

    let queryParams = ["sort_by=popularity.desc"];
    if (pageNumber && pageNumber > 0) queryParams.push(`page=${pageNumber}`);

    const popularMoviesRoute = getPathRoute(
      Constants.MovieApi.POPULAR_MOVIES,
      queryParams
    );
    const { data }: AxiosResponse = await moviesAPI.get(popularMoviesRoute);

    let result: Array<Movie> = [];
    if (data.results) {
      let moviesInfo: Array<Promise<Movie>> = data.results.map(
        async (item: MovieApiResponse) => {
          let movieInfo = ConvertMovieApiResponseToMovie(item);
          movieInfo.genres = await Promise.all(
            item.genre_ids.map(async (idGenre) => getMoviesGenresById(idGenre))
          );
          return movieInfo;
        }
      );

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
        (movieA: Movie, movieB: Movie) =>
          movieB.voteAverage - movieA.voteAverage
      );

    return result;
  } catch (error) {
    getErrorAxiosMessage(error);
    throw error;
  }
};

export { getMoviesGenres, getMoviesGenresById, getPopularMovies };
