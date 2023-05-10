const jestConfig = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    testMatch: ["**/tests/*.test.ts"],
    collectCoverage: false,
    coverageDirectory: "./tests/coverage",
    rootDir: "./",
    testTimeout: 10000,
    setupFiles: ["dotenv/config"],
  };
  