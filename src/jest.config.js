const config = {
	testEnvironment: 'jsdom',
	verbose: true,
	roots: ['<rootDir>'],
	modulePaths: ['<rootDir>', 'node_modules'],
	moduleDirectories: ['node_modules'],
    moduleNameMapper: {
		'^services(.*)$': '<rootDir>/src/services$1',
		'^components(.*)$': '<rootDir>/src/components$1',
	},
};

module.exports = config;