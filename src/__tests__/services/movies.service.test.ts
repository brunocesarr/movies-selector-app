import { Constants } from '@helpers/Constants';
import { Movie, MoviePaginateApiResponse } from '@interfaces/Movie';
import { moviesApiResponseMock } from '@mocks/data';
import { server } from '@mocks/http';
import { getMoviesGenres, getMoviesGenresById, getPopularMovies } from '@services/movies.service';
import { rest } from 'msw';

describe('MovieService', () => {
  describe('getMoviesGenres', () => {
    test('Internal Error', () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.GENRES_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({ error: 'Internal Error' }));
          },
        ),
      );

      expect(getMoviesGenres()).rejects.toMatch('Internal Error');
    });

    test('No Content', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.GENRES_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(204));
          },
        ),
      );

      const genresResult = await getMoviesGenres();

      expect(genresResult.length).toBeFalsy();
    });

    test('Ok Result', async () => {
      const genresResult = await getMoviesGenres();
      expect(genresResult.length).toBeTruthy();
    });
  });

  describe('getMoviesGenresById', () => {
    test('Internal Error', () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.GENRES_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({ error: 'Internal Error' }));
          },
        ),
      );

      expect(getMoviesGenresById(1)).rejects.toMatch('Internal Error');
    });

    test('No Content', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.GENRES_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(204));
          },
        ),
      );

      const genresResult = await getMoviesGenresById(10);

      expect(genresResult).toBeFalsy();
    });

    test('Ok Result', async () => {
      const genresResult = await getMoviesGenresById(1);
      expect(genresResult).toBeTruthy();
    });
  });

  describe('getPopularMovies', () => {
    test('Internal Error', () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({ error: 'Internal Error' }));
          },
        ),
      );

      expect(getPopularMovies()).rejects.toMatch('Internal Error');
    });

    test('No Content', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(204));
          },
        ),
      );

      const genresResult = await getPopularMovies();

      expect(genresResult.length).toBeFalsy();
    });

    test('Ok Result', async () => {
      const genresResult = await getPopularMovies();
      expect(genresResult.length).toBeTruthy();
    });

    test('Ok Result not sort', async () => {
      const genresResult = await getPopularMovies(2, false);
      const genresResultSorted = [...genresResult].sort(
        (movieA: Movie, movieB: Movie) => movieB.voteAverage - movieA.voteAverage,
      );

      expect(
        genresResult.some(
          (genreResult, index) =>
            index !=
            genresResultSorted.findIndex(
              (genreResultSorted) => genreResultSorted.id === genreResult.id,
            ),
        ),
      ).toBeTruthy();
      expect(genresResult.length).toBeTruthy();
    });

    test('Ok Result with genre id not found', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            const response: MoviePaginateApiResponse = {
              page: 1,
              results: moviesApiResponseMock.map((item) => {
                item.genre_ids = [11];
                return item;
              }),
            };
            return res(ctx.status(200), ctx.json(JSON.parse(JSON.stringify(response))));
          },
        ),
      );

      const genresResult = await getPopularMovies(2);
      expect(genresResult.length).toBeTruthy();
    });

    test('Ok Result with page number 0', async () => {
      const genresResult = await getPopularMovies(0);
      expect(genresResult.length).toBeTruthy();
    });
  });
});
