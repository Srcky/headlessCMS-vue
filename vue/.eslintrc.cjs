/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['cypress'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-arrow/prefer-arrow-functions': 'off',
    'space-before-function-paren': 'off',
    'no-var': 'off',
    'no-shadow': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-shorthand': 'off',
    'no-fallthrough': 'off',
    'prefer-const': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-multi-spaces': ['error'],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
};
