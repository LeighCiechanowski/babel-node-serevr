module.exports = {
  rootDir: `${__dirname}`,
  verbose: true,
  bail: false,
  testMatch: ['**/*-test.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/dist_test/'],
  testEnvironment: 'node',
};
