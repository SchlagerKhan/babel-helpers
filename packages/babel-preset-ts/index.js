const defaultTargets = '> 0.25%, not dead';
const defaultExtentions = ['.js', 'ts', '.tsx'];

module.exports = function({
	// prettier-ignore
    targets = defaultTargets,
    extensions = defaultExtentions,
    alias = {},
    ...otherOptions,
}) {
    const options = {targets, extensions, alias, ...otherOptions};
    
	return {
		presets: [
			// prettier-ignore
			['@schlagerkhan/js', options],
			'@babel/typescript',
		],
	};
};
