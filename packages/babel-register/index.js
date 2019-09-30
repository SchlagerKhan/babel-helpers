const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
	createOpts: (opts) => ({ extensions, ...opts }),
};
