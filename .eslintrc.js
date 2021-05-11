module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "linebreak-style": ["off"],
    "no-console": 0,
    "no-constant-condition": 0
  }
};
