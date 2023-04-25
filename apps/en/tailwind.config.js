const config = require("tailwind-config/tailwind.config.js");

module.exports = {
	config,
	content: [
		"app/**/*.{js,ts,jsx,tsx,mdx}",
		"pages/**/*.{js,ts,jsx,tsx,mdx}",
		"components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",

		//packages
		"../../packages/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xxsmall: { max: "340px" },
				xsmall: { max: "500px" },
				small: { max: "768px" },
				medium: { max: "940px" },
				large: { max: "1400px" },
				xlarge: { max: "1600px" },
				xxlarge: { max: "2000px" },
			},
		},
	},
	plugins: [],
};
