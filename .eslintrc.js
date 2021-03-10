/**
 * @type import('eslint').Linter.Config
 */
const eslintConfig = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 12 },
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
                printWidth: 80,
                jsxSingleQuote: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: false },
        ],
        '@typescript-eslint/no-var-requires': 'off',
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
        'no-use-before-define': 'off', // 在声明之前使用
        'consistent-return': 'off',
        strict: 'off',
        'no-extra-boolean-cast': 'off',
        'class-methods-use-this': 'off',
        'no-return-assign': 'off',
        'one-var': 'off',
    },
}

module.exports = eslintConfig
