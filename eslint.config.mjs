import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  // {
  //   "extends": "airbnb-base",
  //   "env": {
  //     "es6": true,
  //     "browser": true
  //   },
  //   "rules": {
  //     "no-restricted-syntax": [
  //       "error",
  //       "LabeledStatement",
  //       "WithStatement"
  //     ]
  //   },
  // },
  {
    ignores: [
        "dist",
        ".eslintrc.js"
    ]
  },
  pluginJs.configs.recommended,
];