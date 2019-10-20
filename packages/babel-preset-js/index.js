const defaultTargets = '> 0.25%, not dead';
const defaultExtensions = ['.js'];

module.exports = function(api, opts) {
	const {
		// prettier-ignore
		targets = defaultTargets,
		extensions = defaultExtensions,
		alias = {},
		includeMetadata,
		includeStyledComponents,
	} = opts;

	const plugins = [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-export-default-from',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		[
			'babel-plugin-module-resolver',
			{
				root: ['.'],
				extensions,
				alias,
			},
		],
		[
			'babel-plugin-import',
			{
				libraryName: 'antd',
				style: 'css',
			},
		],
	];

	if (includeMetadata) {
		plugins.push('babel-plugin-transform-typescript-metadata');
	}

	if (includeStyledComponents) {
		plugins.push('babel-plugin-styled-components');
	}

	return {
		presets: [
			// prettier-ignore
			['@babel/env', { targets }],
			'@babel/react',
		],
		plugins,
	};
};
