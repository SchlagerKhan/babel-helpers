const defaultTargets = '> 0.25%, not dead';
const defaultExtensions = ['.js', '.jsx', '.ts', '.tsx'];

const defaultOpts = {
	targets: defaultTargets,
	extensions: defaultExtensions,
};

module.exports = function (api, opts) {
	const { includeMetadata = true } = opts;

	const options = Object.assign(defaultOpts, opts);
	const plugins = [];

	if (includeMetadata) {
		plugins.push('transform-typescript-metadata');
	}

	return {
		presets: ['@babel/typescript', ['@schlagerkhan/base', options]],
		plugins,
	};
};
