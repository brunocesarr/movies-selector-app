import { faker } from "@faker-js/faker/locale/en_US";

import { Genre, Movie, MovieApiResponse } from "../../../interfaces";

const createRandomMovieApiResponse = (): MovieApiResponse => {
  return {
    id: faker.datatype.number(),
    adult: faker.datatype.boolean(),
    genre_ids: [faker.datatype.number()],
    original_language: faker.random.locale(),
    original_title: faker.random.words(faker.datatype.number({ max: 5 })),
    overview: faker.lorem.paragraph(faker.datatype.number({ max: 10 })),
    popularity: faker.datatype.number({ min: 0, max: 10 }),
    release_date: new Date(2022, 6, 22),
    title: faker.random.words(faker.datatype.number({ max: 5 })),
    video: faker.datatype.boolean(),
    vote_average: faker.datatype.number({ min: 0, max: 10 }),
    vote_count: faker.datatype.number({ min: 0 }),
    backdrop_path: faker.internet.url(),
  };
};

const createRandomGenre = (): Genre => {
  return {
    id: faker.unique(faker.datatype.number),
    name: faker.name.firstName(),
  };
};

const createRandomGenres = (): Genre[] => {
  const genresMovie: Genre[] = [];
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).forEach(
    () => {
      genresMovie.push(createRandomGenre());
    }
  );
  return genresMovie;
};

const createRandomMovie = (): Movie => {
  return {
    id: faker.unique(faker.datatype.number),
    isAdultMovie: faker.datatype.boolean(),
    genres: createRandomGenres(),
    originalLanguage: faker.random.locale(),
    originalTitle: faker.random.words(faker.datatype.number({ max: 5 })),
    overview: faker.lorem.paragraph(faker.datatype.number({ max: 10 })),
    popularity: faker.datatype.number({ min: 0, max: 10 }),
    releaseDate: new Date(2022, 6, 22),
    title: faker.random.words(faker.datatype.number({ max: 5 })),
    hasVideo: faker.datatype.boolean(),
    voteAverage: faker.datatype.number({ min: 0, max: 10 }),
    voteCount: faker.datatype.number({ min: 0 }),
    backdropPath: faker.internet.url(),
  };
};

const moviesApiResponseMock: MovieApiResponse[] = [];
Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).forEach(
  () => {
    moviesApiResponseMock.push(createRandomMovieApiResponse());
  }
);

const moviesMock: Movie[] = [];
Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).forEach(
  () => {
    moviesMock.push(createRandomMovie());
  }
);

export {
  moviesApiResponseMock,
  createRandomMovieApiResponse,
  moviesMock,
  createRandomMovie,
};
