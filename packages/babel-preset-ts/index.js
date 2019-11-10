const defaultTargets = '> 0.25%, not dead';
const defaultExtensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = function(api, opts) {
	const options = Object.assign(
		{
			targets: defaultTargets,
			extensions: defaultExtensions,
			includeMetadata: true,
		},
		opts,
	);

	return {
		presets: [
			// prettier-ignore
			['@schlagerkhan/js', options],
			'@babel/typescript',
		],
	};
};
