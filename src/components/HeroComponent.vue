<template>
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<div class="hero-text">
					<h1 class="hero-title">
						Discover the realm of luxuriousness
						<span class="gradient">.</span>
					</h1>
					<p class="hero-description">
						Find a variety of accessories that suit you perfectly, enhance your
						day-to-day outfits and allow yourself to be free.
					</p>
					<a href="./Catalogue">
						<button class="hero-btn">
							<p class="hero-btn-text">Explore our catalogue</p>
							<img
								src="@/assets/images/right-arrow.png"
								class="right-arrow"
								alt="Right arrow"
							/>
						</button>
					</a>
				</div>
				<img
					src="@/assets/images/illustration.svg"
					alt="Illustration"
					class="hero-illustration"
				/>
			</div>
			<img
				src="@/assets/images/scroll-for-more.svg"
				alt="Down Arrow"
				class="scroll-for-more"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: "HeroComponent",
};
</script>

