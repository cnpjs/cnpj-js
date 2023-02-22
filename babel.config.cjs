const jestConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

module.exports = process.env.NODE_ENV === 'test' ? jestConfig : {};
