module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
  },
};
