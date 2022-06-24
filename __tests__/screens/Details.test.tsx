import { MovieDetailScreen } from "@screens/Details";
import { render } from "@testing-library/react-native";
import React from "react";

describe("MovieDetailScreen", () => {
  describe("Render", () => {
    test("Not found movie", () => {
      const { container, getByText } = render(<MovieDetailScreen />);

      const movieDetailText = getByText(/Not Found/i);

      expect(container).toBeTruthy();
      expect(movieDetailText).toBeTruthy();
    });
  });
});
