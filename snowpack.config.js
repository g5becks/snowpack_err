/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    'snowpack-plugin-less',
    '@snowpack/plugin-typescript',
    'snowpack-plugin-relative-css-urls',
    ['@snowpack/plugin-run-script', { cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream' }],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    // don't open browser
    open: 'none',
    // don't clear the output
    output: 'stream',
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
