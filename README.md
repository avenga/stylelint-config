# Stylelint Config

Avenga's stylelint rules and config

## Installation

Install [stylelint](https://stylelint.io/) and `@avenga/stylelint-config`:

```
npm install --save-dev stylelint @avenga/stylelint-config 
```

## Usage

stylelint expects a configuration object. If your project already has one, just reference `@avenga/stylelint-config`
with `extends`.

```
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

It is possible to [overwrite rules](https://stylelint.io/user-guide/configure#extends) to meet your project specific needs.

Note: `@avenga/stylelint-config` already includes the recommended 
[`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) config and the
[`stylelint-scss`](https://github.com/kristerkari/stylelint-scss) plugin. 

### Stylelint Editor Plugins

- [Atom](https://atom.io/packages/linter-stylelint)
- [vim](https://github.com/vim-syntastic/syntastic/blob/master/syntax_checkers/css/stylelint.vim)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-stylelint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)
