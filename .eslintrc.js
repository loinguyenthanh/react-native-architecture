module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    createDefaultProgram: true,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // ===================================
        // typescript
        // ===================================
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 2,

        // ===================================
        // common
        // ===================================
        'no-shadow': 'off',
        'no-undef': 'off',
        'arrow-body-style': 0,

        // import
        'import/no-named-as-default': 0,
        'import/export': 0,
        'import/prefer-default-export': 0,
        // ===================================
        // react
        // ===================================
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/jsx-props-no-spreading': 0,

        'prettier/prettier': 2,
        // ===================================
      },
    },
  ],
};
