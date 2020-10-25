module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		// 'vue/experimental-script-setup-vars': 'off',
		'no-unused-vars': 'warn',
		'vue/no-unused-vars': 'warn',
		'vue/no-unused-components': 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
