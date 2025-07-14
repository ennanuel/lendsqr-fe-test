const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // moduleNameMapper: {
  //   '^@/components/(.*)$': '<rootDir>/src/components/$1',
  //   '^@/helpers/(.*)$': '<rootDir>/src/helpers/$1',
  //   '^@/types/(.*)$': '<rootDir>/src/types/$1',
  // },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}', // Adjust based on your source folder
  //   '!src/**/*.d.ts',
  //   '!src/**/_app.js',
  //   '!src/**/_document.js',
  // ],
  // coverageDirectory: 'coverage',
};

module.exports = createJestConfig(config);