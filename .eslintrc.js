module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    "jest"
  ],
  // add your custom rules here
  rules: {
    quotes: ["off","single","double"],
    "comma-dangle":["off"],
    "comma-spacing":["off"],
  }
}
