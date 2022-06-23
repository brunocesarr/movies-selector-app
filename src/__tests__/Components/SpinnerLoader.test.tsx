import { render } from "@testing-library/react-native";
import React from "react";

import { SpinnerLoader } from "../../components";

describe("SpinnerLoader", () => {
  describe("Render", () => {
    test("Render default", () => {
      const { container, getByText } = render(<SpinnerLoader />);

      const loadingText = getByText(/Loading.../i);

      expect(container).toBeTruthy();
      expect(loadingText).toBeTruthy();
    });
  });
});
