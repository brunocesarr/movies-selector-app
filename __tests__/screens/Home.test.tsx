import { HomeScreen } from "@screens/Home";
import {
  cleanup,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import React from "react";

import { server } from "../../setup-test/mocks/server";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("HomeScreen", () => {
  describe("Render", () => {
    test("With movies found", async () => {
      const { container, getByText } = render(<HomeScreen />);

      await waitForElementToBeRemoved(() => getByText(/Loading/i));
      const movieHomeTitleText = await waitFor(() =>
        getByText(/Popular Movies/i)
      );

      expect(container).toBeTruthy();
      expect(movieHomeTitleText).toBeTruthy();
    });

    // test("Without movies found", async () => {
    //   server.use(
    //     rest.get(
    //       `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
    //       (req, res, ctx) => {
    //         return res(
    //           ctx.status(204)
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
