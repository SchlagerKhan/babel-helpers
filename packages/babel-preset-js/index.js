module.exports = function (api, opts) {
	const plugins = [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-export-default-from',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
	];

	return {
		presets: [['@schlagerkhan/base', opts]],
		plugins,
	};
};
