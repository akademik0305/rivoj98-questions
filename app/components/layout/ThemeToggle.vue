<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
	get: () => colorMode.value === "dark",
	set: (dark: boolean) => {
		colorMode.preference = dark ? "dark" : "light"
	},
})

const label = computed(() =>
	isDark.value ? "Switch to light mode" : "Switch to dark mode",
)
</script>

<template>
	<button
		type="button"
		class="flex size-10 items-center justify-center rounded-xl border border-border text-fg-muted transition-all hover:border-border-hover hover:bg-hover hover:text-fg"
		:aria-label="label"
		:title="label"
		@click="isDark = !isDark"
	>
		<svg
			v-if="isDark"
			class="size-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
		<svg
			v-else
			class="size-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
			/>
		</svg>
	</button>
</template>
