module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    srequireConfigFile: false,
    ecmaVersion: "latest",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:tailwindcss/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
