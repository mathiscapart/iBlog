import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: "script",
      ecmaVersion: 2021
    },
    plugins: {
      js
    },
    extends: [js.configs.recommended]
  }
]);
