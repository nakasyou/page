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
    'standard',
  ],
  plugins: [
    "jest"
  ],
  // add your custom rules here
  rules: {
    quotes: ["off","single","double"],
    "comma-dangle": ["off","never"],
    "comma-spacing": ["off"],
    "eol-last": ["off"],
    "space-before-function-paren": {"anonymous": 2, "named": 0, "asyncArrow": 0}
  }
}
