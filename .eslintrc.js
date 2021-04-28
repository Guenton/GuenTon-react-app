module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2017 },
  env: { es6: true },
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: { 'react-hooks/exhaustive-deps': 'warn' },
};
