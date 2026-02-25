<!-- components/Navbar.vue -->
<script setup lang="ts">
const menuItems = [
	{
		label: "About Us",
		url: "about",
	},
	{
		label: "Services",
		url: "services",
	},
	{
		label: "How We Work",
		url: "we_work",
	},
	{
		label: "Testimonials",
		url: "testimonials",
	},
	{
		label: "FAQ",
		url: "faq",
	},
]
</script>

<template>
	<nav id="navbar" class="fixed top-0 left-0 w-full">
		<div class="container">
			<div class="flex items-center justify-between py-10">
				<!-- logo -->
				<NuxtLink to="/">
					<img src="~/assets/images/logo/logo.svg" alt="FG" />
				</NuxtLink>
				<!-- logo -->

				<!-- menu -->
				<ul class="flex items-center justify-center gap-6">
					<li v-for="menuItem in menuItems" :key="menuItem.url" class="">
						<a
							class="text-white font-medium leading-[1.4] group relative"
							:href="`#${menuItem.url}`"
							>{{ menuItem.label }}
							<span
								class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-main inline-block group-hover:w-full transition-all"
							></span>
						</a>
					</li>
				</ul>
				<!-- menu -->

				<!-- navbar right -->
				<div>
					<base-button text="Get In Touch" :inline="true" />
				</div>
				<!-- navbar right -->
			</div>
		</div>
	</nav>
</template>

<style scoped></style>
