import { render } from "@testing-library/react-native";
import { rest } from "msw";
import React from "react";

import { server } from "../../../setup-test/mocks/server";
import { Constants } from "../../helpers/Constants";
import { HomeScreen } from "../../screens";

describe("HomeScreen", () => {
  describe("Render", () => {
    test("Render default with movies found", () => {
      const { container, findByText } = render(<HomeScreen />);

      const movieHomeTitleText = findByText(/Popular Movies/i);

      expect(container).toBeTruthy();
      expect(movieHomeTitleText).toBeTruthy();
    });

    test("Render default without movies found", () => {
      server.use(
        rest.get(
          `${Constants.MovieApi.API_MOVIES}${Constants.MovieApi.POPULAR_MOVIES}`,
          (req, res, ctx) => {
            return res(ctx.status(204));
          }
        )
      );

      const { container, findByText } = render(<HomeScreen />);

      const movieHomeTitleText = findByText(/Not Found/i);

      expect(container).toBeTruthy();
      expect(movieHomeTitleText).toBeTruthy();
    });
  });
});
