const { createOpts } = require('./index');

module.exports = {
	createOpts: (namespace, opts = {}) => {
		const regexString = `node_modules\/(?!@${namespace}).*`;
		const regex = new RegExp(regexString);
		const ignore = [regex];

		return createOpts({ ignore, ...opts });
	},
};
