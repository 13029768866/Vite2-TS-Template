module.exports = {
  root: true,
  // 需要启动的环境
  env: {
    browser: true, // 浏览器环境中的全局变量
    es2021: true, // 添加所有 ECMAScript 2021 全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  // 配置解析器解析.vue文件
  parser: 'vue-eslint-parser',
  // 解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析ts文件
    ecmaVersion: 2020, // es12版本  https://blog.csdn.net/TIAN20121221/article/details/114648905
    sourceType: 'module', // ECMAScript 模块
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 继承额外eslint配置
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 这条一定要放在最后面
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off', // 是否禁止ts-ignore注释
    '@typescript-eslint/explicit-function-return-type': 'off', // 函数返回值类型是否声明
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    'vue/custom-event-name-casing': 'off',
    // 检测setup中否使用了未声明的变量
    'vue/script-setup-uses-vars': 'error',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};
