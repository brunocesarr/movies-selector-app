import type { Config } from "@jest/types";
import { defaults } from "jest-config";

const ignores = ["/node_modules/", "src/__mocks__/", "src/types/"];

const config: Config.InitialOptions = {
  globals: {
    __DEV__: true,
    API_KEY: "test-env-key",
  },
  preset: "jest-expo",
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.+(ts|tsx)",
    "!<rootDir>/src/**/index.ts",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/__tests__/",
    "<rootDir>/src/router/",
    "<rootDir>/src/styles/",
    "<rootDir>/src/interfaces/",
    "<rootDir>/src/types/",
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/setup-test/test-setup.ts"],
  testMatch: ["**/__tests__/**/*.(ts|tsx)"],
  testPathIgnorePatterns: [...ignores],
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/setup-test/fileTransformer.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)",
  ],
};

export default config;
