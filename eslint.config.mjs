import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: {
    globals:
    { 
      htmx: "readonly",
      ...globals.browser
    }
  }},
  pluginJs.configs.recommended,
];
