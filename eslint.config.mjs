import withNuxt from "./.nuxt/eslint.config.mjs";
import vueI18n from "@intlify/eslint-plugin-vue-i18n";

export default withNuxt(vueI18n, {
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-empty": "error",
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
  },
});
