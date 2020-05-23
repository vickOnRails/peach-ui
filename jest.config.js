module.exports = {
  roots: ["<rootDir>/src"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
