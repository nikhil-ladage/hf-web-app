const config = require("tailwind-config/tailwind.config.js");

module.exports = {
	...config,
	theme: {
		extend: {
			screens: {
				xxsmall: { min: "340px" },
				xsmall: { min: "768px" },
				small: { min: "1024px" },
				medium: { min: "1200px" },
				large: { min: "1440px" },
				xlarge: { min: "1600px" },
				xxlarge: { min: "2000px" },
			},
		},
	},
};
