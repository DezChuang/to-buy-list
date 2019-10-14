module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-unused-vars': 1,
    semi: [2, 'never'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'no-console': 'off',
    'space-before-function-paren': [
      1,
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ],
    'generator-star-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': [2, 2, { baseIndent: 1, switchCase: 1 }],
    'vue/order-in-components': [
      1,
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'fetch',
          ['props', 'propsData'],
          'asyncData',
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
