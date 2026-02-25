// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/fonts"],

	vite: {
		plugins: [tailwindcss()],
	},

	css: ["./app/assets/css/main.css"],

	fonts: {
		families: [
			{
				name: "Futura PT Cond Extra",
				src: "/fonts/futura-cond/FuturaPTCond-ExtraBold.woff2",
				weight: "800",
				style: "normal",
				preload: true,
			},
			{
				name: "TT Travels",
				src: "/fonts/tt_travels/TTTravels-Medium.woff2",
				weight: "500",
				style: "normal",
				preload: true,
			},
			{
				name: "TT Travels",
				src: "/fonts/tt_travels/TTTravels-Bold.woff2",
				weight: "700",
				style: "normal",
				preload: true,
			},
		],
	},
})
