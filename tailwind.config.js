/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				/* Brand tokens */
				navy: {
					950: "#00214c",
					900: "#061825",
					800: "#0f2d40",
					700: "#1f4d67",
					600: "#296b8d",
				},
				sky: {
					accent: "#53c0fb",
					link: "#4bbcff",
					muted: "#62b6e2",
					deep: "#296b8d",
				},
			},
			fontFamily: {
				sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				/* Navy/sky grid textures */
				"grid-sky":
					"linear-gradient(rgba(83,192,251,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(83,192,251,0.07) 1px, transparent 1px)",
				"grid-sky-light":
					"linear-gradient(rgba(83,192,251,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(83,192,251,0.08) 1px, transparent 1px)",
				"grid-white":
					"linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
				"grid-black":
					"linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
			},
		},
	},
	plugins: [],
};
