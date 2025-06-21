<template>
	<section class="newsletter-page">
		<div class="container">
			<Subscribe />
		</div>
	</section>
</template>

<script>
import Subscribe from "../SubscribeComponent.vue"; // Import the Subscribe component

export default {
	name: "NewsletterPage",
	components: {
		Subscribe,
	},
};
</script>

<style scoped>
/* ... your CSS styles ... */
</style>
