const nextJest = require('next/jest');

const customJestConfig = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
};

const createJestConfig = nextJest({
  dir: './',
})(customJestConfig);

module.exports = async () => {
  // Create Next.js jest configuration presets
  const jestConfig = await createJestConfig();

  // Custom `moduleNameMapper` configuration
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  };

  return { ...jestConfig, moduleNameMapper };
};
