const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["light"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: false,
	  },
};

module.exports = config;
