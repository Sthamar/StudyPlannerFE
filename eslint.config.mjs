import { FlatCompat } from "@eslint/eslintrc";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // // Classic config compatibility (Next.js + Prettier)
  // ...compat.extends(
  //   "next/core-web-vitals",
  //   "next/typescript",
  //   "plugin:prettier/recommended", // ✅ Add Prettier integration here
  // ),

  {
    ignores: [
      "node_modules",
      "dist",
      "eslint.config.js",
      "eslint.config.js",
      "tailwind.config.js",
      "commitlint.config.cjs",
      "postcss.config.js",
      "vite.config.js",
      "vitest.config.js",
      "coverage",
    ],
  },
  // Unused import handling
  {
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./__test__/**/*.{js,jsx,ts,tsx}", "constants.ts"],
    parser: "@typescript-eslint/parser",
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      quotes: "off",
    },
  },
];
