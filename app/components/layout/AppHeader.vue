<script setup lang="ts">
import { assets, site } from "~/data/site"
const route = useRoute()
const mobileOpen = ref(false)
const navShadow = ref(false)

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "About Us", to: "/about" },
	{
		label: "Projects",
		children: [
			{ label: "EU Mobility Projects", to: "/projects/eu-mobility" },
			{ label: "Open Applications", to: "/projects/open-applications" },
			{ label: "Global Projects", to: "/projects/global" },
		],
	},
	{ label: "Research", to: "/research" },
	{ label: "Blog", to: "/blog" },
]

const isActive = (path: string) =>
	path === "/"
		? route.path === "/"
		: route.path === path || route.path.startsWith(`${path}/`)

watch(
	() => route.path,
	() => {
		mobileOpen.value = false
	},
)

const onScroll = () => {
	navShadow.value = window.scrollY > 10
}

onMounted(() => {
	window.addEventListener("scroll", onScroll, { passive: true })
	onScroll()
})

onUnmounted(() => {
	window.removeEventListener("scroll", onScroll)
})
</script>

<template>
	<header
		class="nav-glass fixed top-0 right-0 left-0 z-50 transition-shadow duration-300"
		:style="navShadow ? { boxShadow: `0 4px 40px var(--theme-shadow)` } : {}"
	>
		<div class="container">
			<div class="flex h-16 items-center justify-between lg:h-20">
				<NuxtLink to="/" class="group flex shrink-0 items-center">
					<img
						:src="assets.logo"
						:alt="`${site.name} logo`"
						class="h-10 w-auto transition-opacity group-hover:opacity-90 lg:h-11"
						width="200"
						height="44"
						fetchpriority="high"
					/>
				</NuxtLink>

				<nav
					class="hidden items-center gap-1 lg:flex"
					aria-label="Main navigation"
				>
					<template v-for="item in navLinks" :key="item.label">
						<div v-if="item.children" class="group relative">
							<button
								type="button"
								class="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-fg-muted transition-all hover:bg-hover hover:text-fg"
								:class="
									item.children.some(c => isActive(c.to)) ? 'text-main-dim' : ''
								"
							>
								{{ item.label }}
								<svg
									class="mt-0.5 size-3.5 transition-transform group-hover:rotate-180"
									viewBox="0 0 12 12"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
								>
									<path d="M1.5 4L6 8l4.5-4" stroke-linecap="round" />
								</svg>
							</button>
							<div
								class="invisible absolute top-full left-0 z-10 mt-2 w-52 rounded-xl border border-border bg-bg-card p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100"
							>
								<NuxtLink
									v-for="child in item.children"
									:key="child.to"
									:to="child.to"
									class="block rounded-lg px-3 py-2.5 text-sm transition-all hover:bg-hover hover:text-fg"
									:class="isActive(child.to) ? 'text-main-dim' : 'text-fg-muted'"
								>
									{{ child.label }}
								</NuxtLink>
							</div>
						</div>
						<NuxtLink
							v-else-if="item.to"
							:to="item.to"
							class="rounded-lg px-4 py-2 text-sm font-medium transition-all"
							:class="
								isActive(item.to)
									? 'text-main-dim'
									: 'text-fg-muted hover:bg-hover hover:text-fg'
							"
						>
							{{ item.label }}
						</NuxtLink>
					</template>
				</nav>

				<div class="hidden items-center gap-3 lg:flex">
					<LayoutThemeToggle />
					<NuxtLink
						to="/contact-us"
						class="rounded-xl bg-main px-5 py-2.5 text-sm font-semibold text-on-main transition-all hover:bg-main-hover active:scale-95"
					>
						Contact Us
					</NuxtLink>
				</div>

				<div class="flex items-center gap-2 lg:hidden">
					<LayoutThemeToggle />
				<button
					type="button"
					class="p-2 text-fg-muted hover:text-fg"
					:aria-expanded="mobileOpen"
					aria-label="Toggle menu"
					@click="mobileOpen = !mobileOpen"
				>
					<svg
						v-if="!mobileOpen"
						class="size-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						v-else
						class="size-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 6l12 12M18 6L6 18"
						/>
					</svg>
				</button>
				</div>
			</div>
		</div>

		<div
			v-show="mobileOpen"
			class="flex flex-col gap-1 border-t border-nav-border px-6 pb-4 lg:hidden"
		>
			<template v-for="item in navLinks" :key="item.label">
				<template v-if="item.children">
					<p
						class="border-b border-nav-border py-3 text-xs font-medium tracking-wider text-fg-soft uppercase"
					>
						{{ item.label }}
					</p>
					<NuxtLink
						v-for="child in item.children"
						:key="child.to"
						:to="child.to"
						class="block border-b border-nav-border py-3 text-sm"
						:class="isActive(child.to) ? 'text-main-dim' : 'text-fg-muted'"
					>
						{{ child.label }}
					</NuxtLink>
				</template>
				<NuxtLink
					v-else-if="item.to"
					:to="item.to"
					class="block border-b border-nav-border py-3 text-sm"
					:class="isActive(item.to) ? 'text-main-dim' : 'text-fg-muted'"
					@click="mobileOpen = false"
				>
					{{ item.label }}
				</NuxtLink>
			</template>
			<NuxtLink
				to="/contact-us"
				class="mt-3 block rounded-xl bg-main py-3 text-center text-sm font-semibold text-on-main"
				@click="mobileOpen = false"
			>
				Contact Us
			</NuxtLink>
		</div>
	</header>
</template>
