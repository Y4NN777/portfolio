/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
				sans: ["Inter", "sans-serif"],
			},
			animation: {
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				float: "float 3s ease-in-out infinite",
				"gradient-shift": "gradient-shift 15s ease infinite",
				typing:
					"typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
				"particle-float": "particle-float 4s linear infinite",
				glitch: "glitch 1s, blur 0.2s ease-out",
			},
			keyframes: {
				"pulse-glow": {
					"0%, 100%": {
						opacity: "1",
						boxShadow: "0 0 5px rgba(83, 192, 251, 0.5)",
					},
					"50%": {
						opacity: "0.8",
						boxShadow:
							"0 0 20px rgba(83, 192, 251, 0.8), 0 0 30px rgba(41, 107, 141, 0.6)",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				typing: {
					from: { width: "0" },
					to: { width: "100%" },
				},
				"blink-caret": {
					"from, to": { borderColor: "transparent" },
					"50%": { borderColor: "#53c0fb" },
				},
				"particle-float": {
					"0%": {
						transform: "translateY(0px) rotate(0deg)",
						opacity: "1",
					},
					"100%": {
						transform: "translateY(-100px) rotate(360deg)",
						opacity: "0",
					},
				},
				glitch: {
					"0%": {
						textShadow:
							"0.05em 0 0 #53c0fb, -0.03em -0.04em 0 #4bbcff, 0.025em 0.04em 0 #296b8d",
					},
					"15%": {
						textShadow:
							"0.05em 0 0 #53c0fb, -0.03em -0.04em 0 #4bbcff, 0.025em 0.04em 0 #296b8d",
					},
					"16%": {
						textShadow:
							"-0.05em -0.025em 0 #53c0fb, 0.025em 0.035em 0 #4bbcff, -0.05em -0.05em 0 #296b8d",
					},
					"49%": {
						textShadow:
							"-0.05em -0.025em 0 #53c0fb, 0.025em 0.035em 0 #4bbcff, -0.05em -0.05em 0 #296b8d",
					},
					"50%": {
						textShadow:
							"0.05em 0.035em 0 #53c0fb, 0.03em 0 0 #4bbcff, 0 -0.04em 0 #296b8d",
					},
					"99%": {
						textShadow:
							"0.05em 0.035em 0 #53c0fb, 0.03em 0 0 #4bbcff, 0 -0.04em 0 #296b8d",
					},
					"100%": {
						textShadow:
							"-0.05em 0 0 #53c0fb, -0.025em -0.04em 0 #4bbcff, -0.04em -0.025em 0 #296b8d",
					},
				},
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
