import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      babelConfig: 'babel.config.js',
      tsconfig: 'tsconfig.test.json',
    },
  },
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/index.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    'node_modules',
    '__mocks__',
    '__tests__',
    '@types',
    'interfaces',
    'router',
    'theme',
    'styles',
    'setup-test',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/setup-test/setEnvVars.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-test/testSetup.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        reportedFilePath: 'relative',
        outputName: 'test-reporter.xml',
        outputDirectory: 'coverage',
      },
    ],
    [
      'jest-junit',
      {
        suiteName: 'Jest Tests',
        outputDirectory: 'coverage',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
        reportTestSuiteErrors: 'true',
      },
    ],
  ],
  testSequencer: '<rootDir>/setup-test/testSequencer.js',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/setup-test/fileTransformer.js',
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.ts': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
    '<rootDir>/src/@types',
  ],
};

export default config;
