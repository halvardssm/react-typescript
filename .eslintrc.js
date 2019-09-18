module.exports = {
    env: {
        browser: true,
		es6: true,
		node:true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        indent: ['error', 'tab'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                trailingComma: 'all',
                printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				jsxSingleQuote: true
            }
        ],
        '@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'key-spacing': ["error", { "afterColon": true,"mode": "strict" }]

    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    }
}
