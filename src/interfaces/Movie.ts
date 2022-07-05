import { Genre } from '@interfaces/Genre';

export interface Movie {
  id: number;
  isAdultMovie: boolean;
  backdropPath?: string;
  genres: Array<Genre>;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath?: string;
  releaseDate: Date;
  title: string;
  hasVideo: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface MovieApiResponse {
  id: number;
  adult: boolean;
  backdrop_path?: string;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviePaginateApiResponse {
  page: number;
  results: MovieApiResponse[];
}
