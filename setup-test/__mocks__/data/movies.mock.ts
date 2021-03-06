import { faker } from '@faker-js/faker/locale/en_US';
import { Genre, GenreApiResponse } from '@interfaces/Genre';
import { Movie, MovieApiResponse } from '@interfaces/Movie';

const createRandomMovieApiResponse = (id: number = 1): MovieApiResponse => {
  return {
    id,
    adult: faker.datatype.boolean(),
    genre_ids: Array.from({
      length: faker.datatype.number({
        min: 1,
        max: 5,
      }),
    }).map(() => faker.datatype.number({ min: 1, max: 5 })),
    original_language: faker.random.locale(),
    original_title: faker.random.words(faker.datatype.number({ min: 3, max: 5 })),
    overview: faker.lorem.paragraph(faker.datatype.number({ max: 10 })),
    popularity: faker.datatype.number({ min: 0, max: 10 }),
    release_date: new Date(2022, 6, 22),
    title: faker.random.words(faker.datatype.number({ min: 1, max: 3 })),
    video: faker.datatype.boolean(),
    vote_average: faker.datatype.number({ min: 0, max: 10 }),
    vote_count: faker.datatype.number({ min: 0 }),
    backdrop_path: faker.internet.url(),
  };
};

const createRandomGenre = (id: number = 1): Genre => {
  return {
    id: id,
    name: faker.name.firstName(),
  };
};

const createRandomGenres = (): Genre[] => {
  const genresMovie: Genre[] = [];
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).forEach((_, index: number) => {
    genresMovie.push(createRandomGenre(index + 1));
  });
  return genresMovie;
};

const createRandomGenreApiResponse = (id = 1): GenreApiResponse => {
  return {
    id: id,
    name: faker.name.firstName(),
  };
};

const createRandomGenresApiResponse = (): GenreApiResponse[] => {
  const genresMovie: GenreApiResponse[] = [];
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).forEach((_, index: number) => {
    genresMovie.push(createRandomGenreApiResponse(index + 1));
  });
  return genresMovie;
};

const createRandomMovie = (id: number = 1): Movie => {
  return {
    id,
    isAdultMovie: faker.datatype.boolean(),
    genres: createRandomGenres(),
    originalLanguage: faker.random.locale(),
    originalTitle: faker.random.words(faker.datatype.number({ min: 3, max: 5 })),
    overview: faker.lorem.paragraph(faker.datatype.number({ max: 10 })),
    popularity: faker.datatype.number({ min: 0, max: 10 }),
    releaseDate: new Date(2022, 6, 22),
    title: faker.random.words(faker.datatype.number({ min: 1, max: 3 })),
    hasVideo: faker.datatype.boolean(),
    voteAverage: faker.datatype.number({ min: 0, max: 10 }),
    voteCount: faker.datatype.number({ min: 0 }),
    backdropPath: faker.internet.url(),
  };
};

const moviesApiResponseMock: MovieApiResponse[] = [];
Array.from({ length: faker.datatype.number({ min: 2, max: 10 }) }).forEach((_, index: number) => {
  moviesApiResponseMock.push(createRandomMovieApiResponse(index + 1));
});

const moviesMock: Movie[] = [];
Array.from({ length: faker.datatype.number({ min: 2, max: 10 }) }).forEach((_, index: number) => {
  moviesMock.push(createRandomMovie(index + 1));
});

const genresApiResponseMock: GenreApiResponse[] = createRandomGenresApiResponse();

export {
  moviesApiResponseMock,
  createRandomMovieApiResponse,
  moviesMock,
  createRandomMovie,
  genresApiResponseMock,
};
