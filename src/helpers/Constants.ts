interface MovieApiConstants {
  API_MOVIES: string;
  GENRES_MOVIES: string;
  POPULAR_MOVIES: string;
  IMAGE_URL: string;
}

export class Constants {
  static MovieApi: MovieApiConstants = {
    API_MOVIES: "https://api.themoviedb.org/3",
    GENRES_MOVIES: "/genre/movie/list",
    POPULAR_MOVIES: "/movie/popular",
    IMAGE_URL: "https://image.tmdb.org/t/p",
  };
}
