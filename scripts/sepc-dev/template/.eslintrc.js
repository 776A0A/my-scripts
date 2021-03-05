const prettierConfig = require('./.prettierrc.js')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    rules: {
        'prettier/prettier': [
            'error',
            { ...prettierConfig, trailingComma: 'es5' },
        ],
        semi: ['error', 'never'], // 不需要不必要的分号
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ], // 对于逗号的规则
        'no-console': 'off', // 允许使用console
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'global-require': 'off', // 关闭默认只能顶层使用require()
        'import/no-dynamic-require': 'off', // require(path) path允许动态内容
        'no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: true },
        ], // 函数和类允许提升使用
        'consistent-return': 'off', // 允许不统一的return
        strict: 'off', // 允许使用 'use strict'
        'no-extra-boolean-cast': 'off', // 允许使用连续的!运算符
    },
}
