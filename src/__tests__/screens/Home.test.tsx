import { HomeScreen } from '@screens/Home';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import React from 'react';

describe('HomeScreen', () => {
  describe('Render', () => {
    test('With movies found', async () => {
      const { container, getByText } = render(<HomeScreen />);

      await waitForElementToBeRemoved(() => getByText(/Loading/i));
      const movieHomeTitleText = await waitFor(() => getByText(/Popular Movies/i));

      expect(container).toBeTruthy();
      expect(movieHomeTitleText).toBeTruthy();
    });

    // test("Without movies found", async () => {
    //   server.use(
    //     rest.get(
    //       `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
    //       (req, res, ctx) => {
    //         return res(
    //           ctx.status(204),
    //           ctx.delay(100)
    //         );
    //       }
    //     )
    //   );

    //   const { container, getByText } = render(<HomeScreen />);

    //   await waitForElementToBeRemoved(() => getByText(/Loading/i));
    //   const movieHomeTitleText = await waitFor(() => getByText(/Not Found/i));

    //   expect(container).toBeTruthy();
    //   expect(movieHomeTitleText).toBeTruthy();
    // });
  });
});
