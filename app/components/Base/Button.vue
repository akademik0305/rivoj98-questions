<script lang="ts" setup>
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	inline: {
		type: Boolean,
		default: false,
	},
	customStyles: {
		type: String,
	},
})
</script>
<template>
	<button
		class=" border rounded-xl font-bold transition-all duration-300"
		:class="[
			inline
				? 'py-3 px-5 border-main text-sm text-white hover:bg-main hover:text-black'
				: 'py-4 px-7 bg-main text-black text-normal hover:bg-main-hover',
			props.customStyles,
		]"
	>
		{{ props.text }}
	</button>
</template>
<style></style>
