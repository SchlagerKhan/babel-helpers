module.exports = function (api, opts) {
	const plugins = [
		// prettier-ignore
		'@babel/plugin-proposal-export-default-from',
	];

	return {
		presets: [['@schlagerkhan/base', opts]],
		plugins,
	};
};
