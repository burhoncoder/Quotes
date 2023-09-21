module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-prettier"
  ],
  rules: {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "prettier/prettier": [true, { "severity": "warning" }],
    "scss/at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind", "config"]
      }
    ]
  }
}