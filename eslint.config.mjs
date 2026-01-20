// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js"; // JS rules
import tsParser from "@typescript-eslint/parser"; // TypeScript parser
import tsPlugin from "@typescript-eslint/eslint-plugin"; // TypeScript plugin

const eslintConfig = defineConfig([
  // 1️⃣ Core JS recommended rules
  js.configs.recommended,

  // 2️⃣ Next.js rules
  ...nextVitals,
  ...nextTs,

  // 3️⃣ TypeScript plugin rules
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // Example TypeScript rules, you can extend
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",

      // React / JSX rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-literals": "off", // enable if you want all text literals flagged
    },
  },

  // 4️⃣ Global ignores for files/folders
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".env.local",
  ]),
]);

export default eslintConfig;

