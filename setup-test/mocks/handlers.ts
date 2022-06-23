import { rest } from "msw";

import { moviesApiResponseMock } from "../../src/__mocks__/services";
import { Constants } from "../../src/helpers/Constants";

export const handlers = [
  rest.get(
    `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
    (req, res, ctx) => {
      const response = moviesApiResponseMock;
      return res(
        ctx.status(200),
        ctx.json(JSON.parse(JSON.stringify(response)))
      );
    }
  ),
];
