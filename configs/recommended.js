module.exports = {
  extends: [
    "eslint:recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  plugins: [
    'import'
  ],

  settings: {
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },

  rules: {
    'no-console': 'off',
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'ignore'
      }
    ],
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'newIsCapExceptions': [],
        'capIsNew': false,
        'capIsNewExceptions': [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List'
        ],
        'properties': false
      }
    ]
  }
};
