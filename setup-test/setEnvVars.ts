const env = process.env;

process.env = {
  ...env,
  API_KEY: "testing-env-key",
};
