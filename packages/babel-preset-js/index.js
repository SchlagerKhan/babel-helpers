const defaultTargets = '> 0.25%, not dead';
const defaultExtensions = ['.js'];

module.exports = function({
	// prettier-ignore
	targets = defaultTargets,
	extensions = defaultExtensions,
	alias = {},
}) {
	return {
		presets: [
			// prettier-ignore
			['@babel/env', { targets }],
			'@babel/react',
			'@babel/typescript',
		],
		plugins: [
			'@babel/plugin-transform-runtime',
			'@babel/plugin-proposal-optional-chaining',
			'@babel/plugin-proposal-export-default-from',
			'babel-plugin-transform-typescript-metadata',
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
		],
	};
};
