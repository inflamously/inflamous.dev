/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    moduleNameMapper: {
        // Handle absolute imports in Remix
        '~/(.*)': '<rootDir>/app/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.cache/',
        '<rootDir>/build/',
    ],
    testEnvironment: 'node',
    transform: {
        // Use @swc/jest to transpile tests
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
            'jest-preview/transforms/file',
    },
    transformIgnorePatterns: ['/node_modules/'],
};

export default config;
