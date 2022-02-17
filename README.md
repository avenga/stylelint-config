# Avenga's Stylelint Config

[![npm version](http://img.shields.io/npm/v/@avenga/stylelint-config.svg)](https://www.npmjs.org/package/@avenga/stylelint-config)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](/CONTRIBUTING.md)
[![Downloads per month](https://img.shields.io/npm/dm/@avenga/stylelint-config.svg)](https://npmcharts.com/compare/@avenga/stylelint-config)

This config extends the [`stylelint-config-standard-scss` shared config](https://github.com/stylelint-scss/stylelint-config-standard-scss) 
and configures its own rules.

To see the rules that this config uses, please read the [config itself](/index.js).

## Installation

Install [stylelint](https://stylelint.io/) and `@avenga/stylelint-config`:

```shell
npm install --save-dev stylelint @avenga/stylelint-config 
```

## Usage

stylelint expects a configuration object. If your project already has one, just reference `@avenga/stylelint-config`
with `extends`.

```json
{
  "extends": "@avenga/stylelint-config"
} 
```
 
If you need to add a stylelint configuration object to your project, there are 
[different approaches](https://stylelint.io/user-guide/configure).
One popular approach is to add a `.stylelintrc.js` file to the root of your project. 

```js
// .stylelintrc.js

module.exports = {
  extends: '@avenga/stylelint-config',
};
```

It is possible to [overwrite rules](https://stylelint.io/user-guide/configure#extends) to meet your project specific 
needs. 

### Stylelint Editor Plugins

- [Atom](https://atom.io/packages/linter-stylelint)
- [vim](https://github.com/vim-syntastic/syntastic/blob/master/syntax_checkers/css/stylelint.vim)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-stylelint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)
