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
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: true },
        ],
        'consistent-return': 'off',
        strict: 'off',
    },
}
