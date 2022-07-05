import { Constants } from '@helpers/Constants';
import { server } from '@mocks/http';
import { HomeScreen } from '@screens/Home';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import { rest } from 'msw';
import React from 'react';

describe('HomeScreen', () => {
  describe('Render', () => {
    test('Without movies found', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({ error: 'Internal Error' }));
          },
        ),
      );

      const { container, getByText } = render(<HomeScreen />);
      await waitForElementToBeRemoved(() => getByText(/Loading/i));
      const errorMessageText = await waitFor(() => getByText(/Internal Error/i));

      expect(container).toBeTruthy();
      expect(errorMessageText).toBeTruthy();
    });

    test('Without movies found', async () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(204), ctx.delay(100));
          },
        ),
      );

      const { container, getByText } = render(<HomeScreen />);
      await waitForElementToBeRemoved(() => getByText(/Loading/i));
      const movieNotFoundText = await waitFor(() => getByText(/Not Found/i));

      expect(container).toBeTruthy();
      expect(movieNotFoundText).toBeTruthy();
    });

    test('With movies found', async () => {
      const { container, getByText } = render(<HomeScreen />);

      await waitForElementToBeRemoved(() => getByText(/Loading/i));
      const movieHomeTitleText = await waitFor(() => getByText(/Popular Movies/i));

      expect(container).toBeTruthy();
      expect(movieHomeTitleText).toBeTruthy();
    });
  });
});
