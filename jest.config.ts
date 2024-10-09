import type { Config } from 'jest' // Para obtener autocompletado
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',

  // Coverage config
  collectCoverage: true,
  coverageDirectory: 'coverage/jest/',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // Include all JS and JSX files
    '!src/**/*.d.ts', // Ignore definition files
    '!src/**/index.{js,jsx}', // Ignore index files
    '!src/**/__test__/**', // Ignore tests
    '!src/**/.*.test.{js,jsx}', // Ignore specific tests
    '!src/public/**', // Ignore public directory
    '!src/**/run-sonar.js' // Ignore sonar runner
  ]
}

export default createJestConfig(config)
