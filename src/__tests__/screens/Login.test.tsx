import { render } from "@testing-library/react-native";
import React from "react";

import { LoginScreen } from "../../screens";

describe("LoginScreen", () => {
  describe("Render", () => {
    test("Render default", () => {
      const { container, getByText } = render(<LoginScreen />);

      const movieLogoText = getByText(/Your personal movie selector app/i);

      expect(container).toBeTruthy();
      expect(movieLogoText).toBeTruthy();
    });
  });
});
