<template>
			<About />
			<Collaborations />
</template>

<script>
import About from "../AboutComponent.vue"; // Import the About component
import Collaborations from "../CollaborationsComponent.vue"; // Import the Collaborations component

export default {
	name: "AboutPage",
	components: {
		About,
		Collaborations,
	},
};
</script>
