module.exports = {
  extends: [
    "plugin:genero/wordpress",
    "plugin:genero/react",
  ],
  globals: {
    wp: true,
  },
  env: {
    node: true,
    es6: true,
    amd: true,
    browser: true,
    jquery: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  }
};
