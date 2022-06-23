module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js", ".ts", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        // example configuration
        newlinesBetween: "always",
        groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
