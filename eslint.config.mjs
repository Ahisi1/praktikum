import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      sourceType: "module",
    },
    rules: {
      // Основные правила
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-unused-vars": "warn",
      "no-console": "warn",
      indent: ["error", 2],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "eol-last": "error",

      // Правила для переменных
      "no-var": "error",
      "prefer-const": "warn",

      // Правила для функций
      "func-style": ["error", "expression"],
      "arrow-spacing": "error",

      // Правила для объектов
      "object-curly-spacing": ["error", "always"],
      "key-spacing": "error",
    },
  },
];
