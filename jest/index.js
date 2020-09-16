module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['../config.js'],
  rules: {
    'jest/consistent-test-it': 'off',
    'jest/expect-expect': 'off',
    'jest/lowercase-name': 'off',
    'jest/no-alias-methods': 'off',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-duplicate-hooks': 'off',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'off',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'off',
    'jest/no-test-callback': 'off',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'off',
    'jest/no-truthy-falsy': 'off',
    'jest/no-try-expect': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-be-null': 'off',
    'jest/prefer-to-be-undefined': 'off',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'warn',
  },
};
