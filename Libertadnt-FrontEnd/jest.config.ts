const config = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/+(*.)+(spec).+(ts)'], 
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true, 
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: '<rootDir>/coverage/',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json', 
      stringifyContentPathRegex: '\\.html$',
    },
  },
  moduleNameMapper: {
    '@angular/(.*)': '<rootDir>/node_modules/@angular/$1', // Correct module resolution
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock styles
  },
  testEnvironment: 'jsdom', // Simulates browser environment
};

export default config;

