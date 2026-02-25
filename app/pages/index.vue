<script setup lang="ts">
//===============================-< deep articles >-===============================
const deepArticles = [
	{
		label: "Strategic Planning and Collaboration",
		content:
			"We begin with collaborative strategic planning to understand your project's nuances and formulate a goal-aligned plan for success.",
	},
	{
		label: "Iterative Development and Feedback Integration",
		content:
			"Through iterative development, we collaboratively build and refine solutions. Regular feedback check–ins ensure precision, guiding the project toward alignment with your vision.",
	},
	{
		label: "Quality Finalization and Post-Support",
		content:
			"As completion nears, we ensure high-quality deliverables. Post-implementation, our commitment includes ongoing support and insights for continuous improvement.",
	},
	{
		label: "Ongoing Improvement and Future Refinement",
		content:
			"After completion, we persistently refine our approach using gained insights, ensuring adaptability and excellence in future projects.",
	},
]
//===============================-< handle scrool >-===============================
//> functions
const deepBar = ref<HTMLElement | null>()
const deepImage = ref<HTMLElement | null>()
const deepArticle = ref<HTMLElement | null>()

function handleScrool() {
	if (deepBar.value) {
		deepBar.value.scrollTop = window.scrollY
	}
}

//===============================-< on load >-===============================
//> functions
onMounted(() => {
	window.addEventListener("scroll", handleScrool)
})

//===============================-< on unload >-===============================
//> functions
onUnmounted(() => {
	window.removeEventListener("scroll", handleScrool)
})
</script>

<template>
	<div class="">
		<!-- hero -->
		<section
			class="hero min-h-screen bg-cover bg-center bg-no-repeat pt-40 pb-38"
		>
			<div class="container">
				<div class="text-center flex flex-col items-center mx-auto max-w-212">
					<!-- content -->
					<div
						class="flex items-center gap-4 border border-main/25 bg-main/10 rounded-full p-2 pr-6"
					>
						<!-- images -->
						<div class="flex items-center">
							<div class="w-8 h-8 rounded-full border-2 border-main-10">
								<img
									src="~/assets/images/png/Man.png"
									alt="man"
									class="rounded-full"
								/>
							</div>
							<div
								class="w-8 h-8 rounded-full border-2 border-main-10 relative -ml-2 overflow-hidden"
							>
								<img
									src="~/assets/images/png/Woman.png"
									alt="man"
									class="rounded-full"
								/>
							</div>
							<div
								class="w-8 h-8 rounded-full border-2 border-main-10 relative -ml-2 overflow-hidden"
							>
								<img
									src="~/assets/images/png/Man-1.png"
									alt="man"
									class="rounded-full"
								/>
							</div>
						</div>
						<!-- images -->

						<div class="flex items-center gap-3">
							<p class="font-medium leading-[1.4] text-main-light">
								What Others Say About Us
							</p>
							<lazy-icons-arrow-right />
						</div>
					</div>

					<h1
						class="mt-8 font-extrabold text-[104px] font-second-family text-white leading-none uppercase"
					>
						<span class="text-main">Grow Sales </span> With Our Strategy First
						Approach
					</h1>
					<p class="font-medium text-xl leading-[1.4] text-gray-60">
						Forge's sales and marketing solutions are strategically assigned
						each month to adapt quickly and hit your goals.
					</p>

					<div class="mt-10 flex items-center justify-center">
						<base-button text="Book a Free Consultation" />
					</div>
					<!-- content -->
				</div>
			</div>
		</section>
		<!-- hero -->

		<!-- sales -->
		<section class="sales pb-50">
			<div class="container">
				<!-- header -->
				<div class="max-w-xl">
					<h2
						class="font-extrabold text-7xl leading-none uppercase text-white font-second-family"
					>
						Strategic <span class="text-main">Sales Growth</span> Catalyst
					</h2>
					<p class="text-xl leading-[1.4] text-gray-60">
						By seamlessly integrating data-driven insights, market intelligence,
						and a deep understanding of your business, we propel your sales to
						new heights.
					</p>
				</div>
				<!-- header -->

				<!-- content -->
				<div class="mt-14">
					<!-- banner -->
					<div class="banner bg-main-light rounded-[28px] flex justify-between">
						<!-- left -->
						<div class="p-14 flex-1 max-w-1/2">
							<div
								class="rounded-full bg-main-dark p-6 inline-flex items-center justify-center"
							>
								<lazy-icons-rocket />
							</div>
							<h3
								class="mt-12 uppercase font-extrabold font-second-family text-5xl leading-none text-main-dark"
							>
								Fueling Progress with a Strategic Foundation for Growth
							</h3>
							<p class="mt-5 font-medium text-lg text-black leading-[1.4]">
								As a dynamic and forward-thinking powerhouse, we specialize in
								meticulously crafting innovative strategies that transcend
								conventional norms. Our commitment lies not only in meeting
								immediate sales objectives but in strategically positioning
								businesses for sustained success in the ever-evolving market
								landscape.
							</p>
						</div>

						<!-- image -->
						<div class="flex-1 w-1/2 h-auto">
							<img
								src="~/assets/images/png/sales-1.png"
								alt="sales banner"
								class="w-full h-full"
							/>
						</div>
					</div>

					<!-- cards -->
					<div class="mt-4 grid grid-cols-2 gap-4">
						<!-- card 1 -->
						<article class="bg-orange-light rounded-[28px]">
							<img src="~/assets/images/png/sales-2.png" alt="sales card" />

							<div class="p-14 pb-16">
								<h3
									class="uppercase font-extrabold font-second-family text-5xl leading-none text-orange-dark"
								>
									Illuminating Pathways for Business Triumphs
								</h3>
								<p
									class="mt-4 font-medium text-lg text-black leading-[1.4] line-clamp-3"
								>
									We craft success through strategies integrating data-driven
									insights and deep understanding of each client's unique
									business landscape.
								</p>
							</div>
						</article>
						<article class="bg-yellow-light rounded-[28px]">
							<div class="rounded-[28px] overflow-hidden">
								<img src="~/assets/images/png/sales-3.png" alt="sales card" />
							</div>

							<div class="p-14 pb-16">
								<h3
									class="uppercase font-extrabold font-second-family text-5xl leading-none text-yellow-dark"
								>
									Illuminating Pathways for Business Triumphs
								</h3>
								<p
									class="mt-4 font-medium text-lg text-black leading-[1.4] line-clamp-3"
								>
									We craft success through strategies integrating data-driven
									insights and deep understanding of each client's unique
									business landscape.
								</p>
							</div>
						</article>
					</div>
				</div>

				<!-- content -->
			</div>
		</section>
		<!-- sales -->

		<!-- solutions -->
		<section class="solutions pb-50">
			<div class="container">
				<!-- header -->
				<div class="max-w-xl mx-auto text-center">
					<h2
						class="font-extrabold text-7xl leading-none uppercase text-white font-second-family"
					>
						Innovative <span class="text-main">Solutions</span>Hub
					</h2>
					<p class="text-xl leading-[1.4] text-gray-60">
						From strategic consulting to seamless execution, we're your partners
						in unlocking unparalleled success. Elevate your business experience
						with our dynamic services.
					</p>
				</div>
				<!-- header -->

				<!-- content -->
				<div class="mt-14 grid grid-cols-3 gap-4">
					<!-- card 1 -->
					<div
						class="pt-6 px-8 pb-12 bg-main-light rounded-[28px] text-center flex flex-col items-center"
					>
						<div class="flex items-center justify-center relative">
							<span
								class="inline-block w-50 h-50 rounded-full bg-main-hover absolute top-1/2 left-1/2 -translate-1/2"
							></span>
							<img
								src="~/assets/images/png/solutions-1.png"
								alt="solution 1"
								class="w-full h-full relative"
							/>
						</div>

						<h3
							class="mt-8 text-main-dark font-second-family font-extrabold text-[40px] leading-none uppercase"
						>
							Strategic Insight Consulting
						</h3>
						<p class="mt-4 text-black text-lg font-medium leading-[1.4]">
							Our seasoned experts analyze market trends, assess competition,
							and delve into your business dynamics to provide actionable
							insights.
						</p>
					</div>
					<!-- card 2 -->
					<div
						class="pt-6 px-8 pb-12 bg-main-light rounded-[28px] text-center flex flex-col items-center"
					>
						<div class="flex items-center justify-center relative">
							<span
								class="inline-block w-50 h-50 rounded-full bg-main-hover absolute top-1/2 left-1/2 -translate-1/2"
							></span>
							<img
								src="~/assets/images/png/solutions-2.png"
								alt="solution 2"
								class="w-full h-full relative"
							/>
						</div>

						<h3
							class="mt-8 text-main-dark font-second-family font-extrabold text-[40px] leading-none uppercase"
						>
							Dynamic Marketing Solutions
						</h3>
						<p class="mt-4 text-black text-lg font-medium leading-[1.4]">
							We elevate your brand with engaging digital campaigns, tailored
							content, and innovative strategies to boost engagement and
							maximize reach.
						</p>
					</div>
					<!-- card 3 -->
					<div
						class="pt-6 px-8 pb-12 bg-main-light rounded-[28px] text-center flex flex-col items-center"
					>
						<div class="flex items-center justify-center relative">
							<span
								class="inline-block w-50 h-50 rounded-full bg-main-hover absolute top-1/2 left-1/2 -translate-1/2"
							></span>
							<img
								src="~/assets/images/png/solutions-3.png"
								alt="solution 3"
								class="w-full h-full relative"
							/>
						</div>

						<h3
							class="mt-8 text-main-dark font-second-family font-extrabold text-[40px] leading-none uppercase"
						>
							Agile Technology Integration
						</h3>
						<p class="mt-4 text-black text-lg font-medium leading-[1.4]">
							Stay ahead with cutting-edge tech. From cloud solutions to
							AI-driven automation, empowering your business in the digital
							landscape.
						</p>
					</div>
				</div>
				<!-- content -->
			</div>
		</section>
		<!-- solutions -->

		<!-- deep -->
		<section class="deep pb-50">
			<div class="container">
				<!-- header -->
				<div class="max-w-160 mx-auto text-center">
					<h2
						class="font-extrabold text-7xl leading-none uppercase text-white font-second-family"
					>
						A Deep Dive into Our
						<span class="text-main">Collaborative</span> Work Methodology
					</h2>
				</div>
				<!-- header -->

				<!-- content -->
				<div class="mt-30 flex items-start gap-2">
					<!-- left -->
					<div class="flex-1">
						<div class="flex gap-10 items-stretch">
							<!-- line -->
							<div class="bg-main-10 rounded-[28px] h-auto w-1 shrink-0 block">
								<div
									id="deepBar"
									ref="deepBar"
									class="w-full h-28 bg-main rounded-[28px]"
								></div>
							</div>

							<!-- content -->
							<!-- item 1 -->
							<div>
								<article
									v-for="article in deepArticles"
									:key="article.label"
									class="not-first:mt-32"
									ref="deepArticle"
								>
									<h3
										class="mt-8 text-main font-second-family font-extrabold text-[40px] leading-none uppercase"
									>
										{{ article.label }}
									</h3>
									<p
										class="mt-4 text-gray-60 text-lg font-medium leading-[1.4]"
									>
										{{ article.content }}
									</p>
								</article>
							</div>
						</div>
					</div>

					<!-- image -->
					<div
						class="flex-1 max-w-173 sticky top-30 flex items-center justify-center"
						ref="deepImage"
					>
						<img
							src="~/assets/images/png/deep.png"
							alt="deep"
							class="deepImage w-full h-full max-w-[384px] animate-spin"
						/>
					</div>
				</div>
				<!-- content -->
			</div>
		</section>
		<!-- deep -->

		<!-- empovering -->
		<section class="empovering mb-50">
			<div class="container">
				<!-- content -->
				<div class="bg-green-dark-1 rounded-[28px] pt-24 overflow-hidden">
					<div class="max-w-150 mx-auto flex flex-col items-center text-center pb-24">
						<div
							class="inline-flex items-center gap-2 py-2 px-6 border border-main-dark bg-green-dark-2 rounded-full"
						>
							<lazy-icons-chat />

							<div class="flex items-center gap-3">
								<p class="font-medium leading-[1.4] text-main-hover">
									Have Questions?
								</p>
								<lazy-icons-arrow-right :color="'#7fd136'" />
							</div>
						</div>

						<!-- main -->
						<div class="mt-5">
							<h2
								class="font-extrabold text-7xl leading-none uppercase text-white font-second-family"
							>
								Empowering <span class="text-main">Success</span> in Numbers
							</h2>
							<p class="mt-5 text-xl leading-[1.4] text-white">
								We redefine collaboration, innovation, and success. From our
								unwavering commitment to excellence to our dynamic approach that
								adapts to your unique needs, discover why working with us is not
								just a choice, it's a strategic investment in your unparalleled
								success.
							</p>

							<base-button text="Get In Touch" custom-styles="mt-8" />
						</div>
						<!-- main -->
					</div>

					<!-- footer -->
					<div
						class="bg-green-dark-2 grid grid-cols-3 gap-4 rounded-[28px] p-20"
					>
						<div class="text-center">
							<p
								class="font-extrabold text-[112px] leading-none uppercase text-main font-second-family"
							>
								97%
							</p>
							<p class="mt-2 text-xl leading-[1.4] text-white">
								Satisfaction rate
							</p>
						</div>
						<div class="text-center">
							<p
								class="font-extrabold text-[112px] leading-none uppercase text-main font-second-family"
							>
								50+
							</p>
							<p class="mt-2 text-xl leading-[1.4] text-white">
								Delivered projects
							</p>
						</div>
						<div class="text-center">
							<p
								class="font-extrabold text-[112px] leading-none uppercase text-main font-second-family"
							>
								10
							</p>
							<p class="mt-2 text-xl leading-[1.4] text-white">
								Years of experience
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- empovering -->
	</div>
</template>
<style>
.hero {
	background-image: url("~/assets/images/png/header-bg.png");
}

.deepImage {
	animation-duration: 5s;
}
</style>
