module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['react-hooks', 'prettier', 'import', 'jsdoc', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: false,
        ignoreFunctionalComponents: true,
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    curly: ['error', 'multi-line'],
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['info', 'error'],
      },
    ],
    'import/no-unresolved': 'error',
    'no-unused-vars': 'error',
    'no-inline-comments': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/tag-lines': 'error',
    'jsdoc/valid-types': 'error',
  },
  globals: {
    window: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      rules: {
        'no-undef': 'off',
        'require-jsdoc': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
