<template>
	<Catalogue />
	<Items />
	<Newsletter />
	<Footer />
</template>

<script>
import Catalogue from "../CatalogueComponent.vue";
import Items from "../ItemsComponent.vue";
import Newsletter from "../NewsletterComponent.vue";
import Footer from "../FooterComponent.vue";

export default {
	name: "CataloguePage",
	components: {
		Catalogue,
		Items,
		Newsletter,
		Footer,
	},
};
</script>
