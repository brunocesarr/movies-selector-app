module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: false,
        },
      ],
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@mocks": "./__mocks__/",
            "@tests": "./__tests__/",
            "@assets": "./src/assets/",
            "@components": "./src/components/",
            "@helpers": "./src/helpers/",
            "@interfaces": "./src/interfaces/",
            "@router": "./src/router/",
            "@screens": "./src/screens/",
            "@services": "./src/services/",
            "@styles": "./src/styles/",
            "@theme": "./src/theme/",
          },
        },
      ],
    ],
  };
};
