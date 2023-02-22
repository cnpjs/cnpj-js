module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  reporters: [['github-actions', { silent: false }], 'summary'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
