import "@testing-library/jest-native/extend-expect";

import { jest } from "@jest/globals";
import { cleanup } from "@testing-library/react-native";

import { server } from "./mocks/server";

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

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
