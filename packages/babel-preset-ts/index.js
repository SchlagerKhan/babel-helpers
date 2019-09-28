const defaultTargets = '> 0.25%, not dead';
const defaultExtentions = ['.js', 'ts', '.tsx'];

module.exports = function(opts) {
	const options = Object.assign(
		{
			targets: defaultTargets,
			extensions: defaultExtentions,
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
