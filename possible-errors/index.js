module.exports = {
  extends: ['../config.js'],
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'off',
    'no-obj-calls': 'error',
    // 'no-promise-executor-return': 'error', // only avaliable in ESLint > 7
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    // 'no-unreachable-loop': 'error', // only avaliable in ESLint > 7
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    // 'no-useless-backreference': 'error', // only avaliable in ESLint > 7
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
  },
};
