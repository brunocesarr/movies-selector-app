import { Constants } from '@helpers/Constants';
import { GenreApiResponse } from '@interfaces/Genre';
import { MoviePaginateApiResponse } from '@interfaces/Movie';
import { genresApiResponseMock, moviesApiResponseMock } from '@mocks/data';
import { rest } from 'msw';

export const handlers = [
  rest.get(
    `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
    (req, res, ctx) => {
      const response: MoviePaginateApiResponse = {
        page: 1,
        results: moviesApiResponseMock,
      };
      return res(ctx.status(200), ctx.delay(100), ctx.json(JSON.parse(JSON.stringify(response))));
    },
  ),
  rest.get(
    `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.GENRES_MOVIES}`,
    (req, res, ctx) => {
      const response: { genres: GenreApiResponse[] } = {
        genres: genresApiResponseMock,
      };
      return res(ctx.status(200), ctx.json(JSON.parse(JSON.stringify(response))));
    },
  ),
];
