// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each']
};
