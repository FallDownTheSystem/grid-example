module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		extend: {},
		typography: {
			default: {
				css: {
					h2: {
						color: '#ffffff',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
