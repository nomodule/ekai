const path = require('path');
module.exports = function({ config }) {
	config.module.rules.unshift({
		test: /\.stories\.jsx?$/,
		loaders: [
			{
				loader: require.resolve('@storybook/source-loader'),
				options: {
					prettierConfig: {
						useTabs: true,
						printWidth: 120,
						semi: true,
						singleQuote: true
					}
				}
			}
		],
		enforce: 'pre'
	});

	return config;
};
