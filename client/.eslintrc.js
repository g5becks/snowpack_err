// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  // https://github.com/sveltejs/eslint-plugin-svelte3/issues/68
  // plugins: ["svelte3"],
  extends: ['plugin:@typescript-eslint/recommended'],
  /*
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],

   */
  rules: {},
}
