// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/fonts"],

	colorMode: {
		preference: "dark",
		fallback: "dark",
		classSuffix: "",
	},

	vite: {
		plugins: [tailwindcss()],
	},

	css: ["./app/assets/css/main.css"],

	fonts: {
		families: [
			{ name: "Syne", provider: "google", weights: [400, 500, 600, 700, 800] },
			{ name: "DM Sans", provider: "google", weights: [300, 400, 500] },
		],
	},
})
