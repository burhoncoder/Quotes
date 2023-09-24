/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Example content paths...
		"./public/**/*.html",
		"./src/**/*.{js,vue}",
	],
	theme: {
		extend: {
			outlineWidth: {
				3: "3px",
			},

			borderWidth: {
				1: "1px",
			},

			colors: {
				gray: {
					control: "#d8e0f0",
					text: "#7d8592",
					bg: "#f2f9ff",
				},

				primary: {
					text: "#0a1629",
					50: "#e4f3ff",
					100: "#bfe0ff",
					200: "#96ceff",
					300: "#6cbaff",
					400: "#50aaff",
					500: "#3e9bff",
					600: "#3f8cff", // MAIN
					700: "#3e79ea",
					800: "#3c67d8",
					900: "#3846b8",
				},

				complementary: {
					50: "#fff2de",
					100: "#ffdead",
					200: "#ffc978",
					300: "#ffb23f", // MAIN
					400: "#ffa102",
					500: "#ff9100",
					600: "#fb8500",
					700: "#f57400",
					800: "#f06300",
					900: "#e74600",
				},

				"analogous-blue": {
					50: "#dafbff",
					100: "#9ff3fe",
					200: "#3fecff", // MAIN
					300: "#00e2fd",
					400: "#00d9f8",
					500: "#00d0f5",
					600: "#00c0e1",
					700: "#00aac4",
					800: "#0096ab",
					900: "#00727a",
				},

				"analogous-violet": {
					50: "#efe8ff",
					100: "#d3c8fe",
					200: "#b5a3ff",
					300: "#947bff",
					400: "#765dff",
					500: "#523fff", // MAIN
					600: "#413af8",
					700: "#2132ef",
					800: "#002de9",
					900: "#0020e3",
				},

				success: {
					50: "#e4f8e6",
					100: "#beecc1",
					200: "#90df98",
					300: "#59d36b",
					400: "#0ac946", // MAIN
					500: "#00be16",
					600: "#00af05",
					700: "#009c00",
					800: "#008b00",
					900: "#006b00",
				},

				warning: {
					50: "#fffde6",
					100: "#fff8c2",
					200: "#fff399",
					300: "#ffee6f",
					400: "#ffe94d",
					500: "#fee426",
					600: "#ffd528",
					700: "#ffbc21", // MAIN
					800: "#fda41a",
					900: "#fa790e",
				},

				error: {
					50: "#ffebf0",
					100: "#ffced7",
					200: "#f29ba2",
					300: "#e9747e",
					400: "#f6515f", // MAIN
					500: "#fd3c47",
					600: "#ee3345",
					700: "#db293e",
					800: "#ce2137",
					900: "#bf122b",
				},
			},

			fontSize: {
				1: "48px",
				2: "40px",
				3: "32px",
				4: "24px",
				5: "20px",
				6: "18px",

				xlg: "20px",
				lg: "18px",
				md: "16px",
				sm: "14px",
				xsm: "12px",
			},
		},
	},
	plugins: [],
};
