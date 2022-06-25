import { LoginScreen } from "@screens/Login";
import { render } from "@testing-library/react-native";
import React from "react";

describe("LoginScreen", () => {
  describe("Render", () => {
    test("Render default", async () => {
      const { container, findByText } = render(<LoginScreen />);

      const movieLogoText = await findByText(
        /Your personal movie selector app/i
      );

      expect(container).toBeTruthy();
      expect(movieLogoText).toBeTruthy();
    });
  });
});
