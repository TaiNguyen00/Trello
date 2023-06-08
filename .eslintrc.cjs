// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    // 'no-console': 1, // when project is building, clean code, simple is no console.log :(
    // 'no-lonely-if': 1, //check clean code else-if
    'no-unused-vars': 1, // check var when not using
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'space-before-blocks': ['error', 'always'], // for example like: () {}
    'object-curly-spacing': [1, 'always'], // for example: { }
    'indent': ['warn', 2], // chỉ 2 khoảng trống
    'semi': [1, 'never'], //dấu ; cuối code
    // 'quotes': ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1, //có khoảng trống
    'comma-dangle': 1, // dư thừa dấu phẩy cuối cùng
    'comma-spacing': 1, // dấu phẩy tới  mới là đúng
    'arrow-spacing': 1 // check only one spacing in arror func
  }
}
