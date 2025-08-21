import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser, 
        ...globals.jest
      },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    rules: {
      semi: "warn",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-use-before-define": "error",
      "no-invalid-this": "error",
      "require-await": "error",
    },
  },
]);
