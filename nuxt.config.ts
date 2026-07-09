// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/fonts"],
	runtimeConfig: {
		adminLogin: process.env.SOROVNOMA_ADMIN_LOGIN || "rivoj98",
		adminPassword: process.env.SOROVNOMA_ADMIN_PASSWORD || "mavlonjon",
	},

	app: {
		head: {
			title: "Rivoj 98 — So'rovnoma",
			meta: [
				{
					name: "description",
					content: "Rivoj 98 mijozlar so'rovnomasi. Xizmatimiz sifati haqida fikringizni bildiring.",
				},
			],
		},
	},

	colorMode: {
		preference: "dark",
		fallback: "dark",
		classSuffix: "",
	},

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: [
				"@vue/devtools-core",
				"@vue/devtools-kit",
				"xlsx",
			],
		},
	},

	css: ["./app/assets/css/main.css"],

	fonts: {
		families: [
			{ name: "Syne", provider: "google", weights: [400, 500, 600, 700, 800] },
			{ name: "DM Sans", provider: "google", weights: [300, 400, 500] },
		],
	},
})
