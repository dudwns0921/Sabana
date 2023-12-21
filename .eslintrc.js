module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'webpack.config.js',
        'tailwind.config.js',
        'postcss.config.js',
      ],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
}
