// http://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  root: true,

  env: {
    browser: false,
    jest: true
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },

  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],

  rules: {
    "quotes": [1, "double"],
    "no-console": 0,
    "consistent-return": 0,
    "import/no-extraneous-dependencies": [2, { "packageDir": "./" }],
    "@typescript-eslint/quotes": [1, "double"],
    "@typescript-eslint/interface-name-prefix": 2,
    "@typescript-eslint/no-explicit-any": 0, // Revert this later
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": [2, {
      multiline: {
          delimiter: "semi",
          requireLast: true
      },
      singleline: {
          delimiter: "semi",
          requireLast: false
      }
    }],
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      "node": {
        "paths": ["./"]
      },
      typescript: {},
    }
  }
}

