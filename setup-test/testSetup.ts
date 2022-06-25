import "@testing-library/jest-native/extend-expect";

import { jest } from "@jest/globals";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: () => {},
      dispatch: () => {},
    }),
    useRoute: () => ({
      params: {
        id: "123",
      },
    }),
  };
});

jest.mock(
  "../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper"
);
