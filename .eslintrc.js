module.exports = {
  env: {
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["plugin:react/recommended", "eslint:recommended", "prettier"],
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": 0,
  },
};
