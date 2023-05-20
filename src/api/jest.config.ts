// eslint-disable-next-line no-unused-vars
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/tests/*.test.js'],
  collectCoverage: false,
  coverageDirectory: './tests/coverage',
  rootDir: './',
  testTimeout: 10000,
  setupFiles: ['dotenv/config'],
};
