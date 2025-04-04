

const config = {
//   preset: 'jest-preset-angular',
//   roots: ['<rootDir>/src/'],
//   //globalSetup: 'jest-preset-angular/global-setup',
//   testEnvironment: 'jest-environment-jsdom',
//   //testEnvironment: 'jsdom', // original
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

//   testMatch: ['**/+(*.)+(spec).+(ts)'],
//   //testMatch: ['**/app.component.spec.ts'],

//   testEnvironmentOptions: {
//     resources: "usable",
//   },

//   transform: {
//     '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
//   },
//   // transform: {
//   //   <transform_regex>: ['ts-jest', { /* ts-jest config goes here in Jest */ }],
//   // },
  
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   collectCoverage: true, 
//   coverageReporters: ['html', 'lcov', 'text-summary'],
//   coverageDirectory: '<rootDir>/coverage/',
//   globals: {
//     'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.spec.json', 
//       stringifyContentPathRegex: '\\.html$',
//     }, 
//   },

//   moduleNameMapper: {
//     //'^@angular/(.*)$': '<rootDir>/node_modules/@angular/$1',
//     'zone.js/dist/zone-testing': '<rootDir>/node_modules/zone.js/dist/zone-testing',
//     // 'src/(.*)': '<rootDir>/src/$1',
//     // '\\.(css|scss)$': 'identity-obj-proxy', // Mock styles
//     // 'zone.js/bundles/zone-testing-bundle.umd': 'zone.js/dist/zone-testing'
//   },

  displayName: 'Libertant',
  maxWorkers: 3,
  bail: true,
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  cacheDirectory: '<rootDir>/jestCache',
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'coverage/libertant',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  },


};

export default config;

