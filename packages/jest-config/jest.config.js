module.exports = {
	resetMocks: true,
	moduleDirectories: ["node_modules"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
	collectCoverageFrom: ["**/pages/**/*.{js,ts,jsx,tsx}"],
	moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
	transform: {
		"^.+\\.tsx?$": "esbuild-jest",
		"^.+\\.jsx?$": "esbuild-jest",
	},
	coveragePathIgnorePatterns: [],
	coverageThreshold: null,
};
