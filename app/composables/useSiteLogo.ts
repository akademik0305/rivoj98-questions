import { assets } from "~/data/site"

export function useSiteLogo() {
	const colorMode = useColorMode()

	const logoSrc = computed(() =>
		colorMode.value === "dark" ? assets.logoDark : assets.logoLight,
	)

	return { logoSrc, colorMode }
}
