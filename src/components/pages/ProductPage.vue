<template>
	<section class="product-page">
		<div class="container">
			<div class="product-card" v-if="product">
				<div class="product-details">
					<img
						:src="product.imageUrl"
						:alt="product.name"
						class="product-image"
					/>
					<h2>{{ product.name }}</h2>
					<p class="product-price">£{{ product.price.toFixed(2) }}</p>
					<p class="product-description">{{ product.description }}</p>
				</div>
				<div class="add-to-cart">
					<button class="add-to-cart-button" @click="handleAddToCart(product)">
						Add to Cart
					</button>
					<button class="buy-now-button" @click="handleBuyNow">Buy Now</button>
				</div>
			</div>
			<div v-else>
				<p>Product not found</p>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import { useStore } from "vuex"; // Assuming you're using Vuex for cart management
import data from "../../assets/data/products.json"; // Import your JSON file

export default {
	name: "ProductPage",
	setup() {
		const router = useRouter(); // Get the router instance
		const productId = router.currentRoute.value.params.productId; // Access the productId
		const store = useStore();
		const product = ref(null);

		onMounted(() => {
			const foundProduct = data.find(item => item.id === parseInt(productId));
			product.value = foundProduct;
		});

		const handleAddToCart = product => {
			store.dispatch("addToCart", product);
		};

		const handleBuyNow = () => {
			handleAddToCart(product.value);
			// Redirect to the checkout page
			this.$router.push("/checkout");
		};

		return {
			product,
			handleAddToCart,
			handleBuyNow,
		};
	},
};
</script>

<style scoped>
/* ... your CSS styles ... */
</style>
