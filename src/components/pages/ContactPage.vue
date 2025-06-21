<template>
	<Contact />
	<Form />
	<Newsletter />
	<Footer />
</template>

<script>
import Contact from "../ContactComponent.vue";
import Form from "../FormComponent.vue";
import Newsletter from "../NewsletterComponent.vue";
import Footer from "../FooterComponent.vue";

export default {
	name: "ContactPage",
	components: {
		Contact,
		Form,
		Newsletter,
		Footer,
	},
};
</script>
