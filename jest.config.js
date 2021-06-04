module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  collectCoverage: true,

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
