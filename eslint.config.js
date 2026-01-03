import js from "@eslint/js"
import ts from "typescript-eslint"

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".next/**",
      "build/**",
      "*.d.ts",
      "*.cjs"
    ]
  },
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-require-imports": "warn"
    }
  }
]
