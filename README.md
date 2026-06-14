# `@shgysk8zer0/stylelint-config`

A standard config for Stylelint

[![CodeQL](https://github.com/shgysk8zer0/stylelint-config/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/stylelint-config/actions/workflows/codeql-analysis.yml)
![Node CI](https://github.com/shgysk8zer0/stylelint-config/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://github.com/shgysk8zer0/stylelint-config/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/stylelint-config.svg)](https://github.com/shgysk8zer0/stylelint-config/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/stylelint-config.svg)](https://github.com/shgysk8zer0/stylelint-config/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/stylelint-config?logo=github)](https://github.com/shgysk8zer0/stylelint-config/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/@shgysk8zer0/stylelint-config)](https://www.npmjs.com/package/@shgysk8zer0/stylelint-config)
![node-current](https://img.shields.io/node/v/@shgysk8zer0/stylelint-config)
![npm bundle size gzipped](https://img.shields.io/bundlephobia/minzip/@shgysk8zer0/stylelint-config)
[![npm](https://img.shields.io/npm/dw/@shgysk8zer0/stylelint-config?logo=npm)](https://www.npmjs.com/package/@shgysk8zer0/stylelint-config)

[![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)](https://github.com/shgysk8zer0)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/stylelint-config.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/stylelint-config.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
- [Security Policy](./.github/SECURITY.md)

## Usage

Create a `stylelint.config.js` file in the root of your project and choose one of the following methods to apply the configuration.

### 1. Using the Default Config

To use the base configuration exactly as-is, re-export the default `config` object:

```js
export { config as default } from '@shgysk8zer0/stylelint-config';

```

### 2. Modifying Rules with Exported Constants

If you prefer to manually construct your configuration object using the base standards, import the exported constants (`RULES`, `IGNORE_FILES`, `PLUGINS`) and spread them into your export:

```js
import { RULES, IGNORE_FILES, PLUGINS } from '@shgysk8zer0/stylelint-config';

export default {
  ignoreFiles: [...IGNORE_FILES, 'public/**/*.css'],
  plugins: [...PLUGINS],
  rules: {
    ...RULES,
    'max-nesting-depth': 5, // Override a base rule
    'block-no-empty': null  // Disable a base rule
  }
};
```

### 3. Using `getStyleLintConfig()`

You can use the exported factory function to generate the configuration object. Any properties you pass in will automatically merge with the package defaults:

```js
import { getStyleLintConfig } from '@shgysk8zer0/stylelint-config';

export default getStyleLintConfig({
  ignoreFiles: ['public/**/*.css'], // Appends to the default IGNORE_FILES
  rules: {
    'max-nesting-depth': 5 // Overwrites this specific rule in the default RULES
  }
});
```
