"use strict";
module.exports = {
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    testMatch: [
        '**/tests/*.ts',
        '**/*test*.ts',
        '!**/stryker-tmp/**',
        '!**/test-helpers.js**',
        '!**/*global-setup*',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: false,
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'test_reports/jest',
                outputName: 'results.xml',
            },
        ],
    ],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!**/node_modules/**',
        '!**/src/libraries/**',
        '!**/test/**',
        '**/*test*.ts',
    ],
    forceExit: true,
    notify: true,
    notifyMode: 'change',
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
        'jest-watch-master',
        [
            'jest-watch-toggle-config',
            {
                setting: 'verbose',
            },
        ],
        [
            'jest-watch-toggle-config',
            {
                setting: 'collectCoverage',
            },
        ],
    ],
};
//# sourceMappingURL=jest.config.js.map