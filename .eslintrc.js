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
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    }],
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    "vue/multiline-html-element-content-newline": ["off"]
  }
}
