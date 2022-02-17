module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'at-rule-disallowed-list': 'extend',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'max-nesting-depth': [
      4,
      {
        ignoreAtRules: ['for', 'include', 'if', 'else', 'each'],
      },
    ],
    'indentation': null,
    'string-quotes': null,
    'selector-descendant-combinator-no-non-space': null,
    'color-hex-length': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'function-name-case': null,
    'number-leading-zero': null,
    'shorthand-property-no-redundant-values': null,
    'value-no-vendor-prefix': null,
    'scss/dollar-variable-pattern': null,
  },
}
