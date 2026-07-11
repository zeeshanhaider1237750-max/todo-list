// const js = require("@eslint/js");
// const globals = require("globals");

// module.exports = [
//   // 1. Tell ESLint to analyze all JavaScript files while ignoring production bundles
//   {
//     files: ["**/*.js"],
//     ignores: ["dist/**", "node_modules/**"],
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//       globals: {
//         ...globals.browser, // Enables window, document, localStorage
//         ...globals.node,    // Required for Webpack configuration environments
//       },
//     },
//     // 2. Load ESLint's official recommended structural safety rules
//     rules: {
//       ...js.configs.recommended.rules,
//       "no-unused-vars": "warn",      // Warns you if you create variables but forget to use them
//       "no-console": "off",           // Allows you to use console.log while debugging your app
//       "prefer-const": "error",       // Forces you to use const if a variable never changes
//       "eqeqeq": ["error", "always"], // Forces you to use strict equality (===) instead of (==)
//     },
//   },
// ];
