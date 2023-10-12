/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'index.html',
    '.eslintrc.cjs',
    'postcss.config.js',
    'commitlint.config.js'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
