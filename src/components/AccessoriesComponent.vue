<template>
	<section class="accessories">
		<div class="container">
			<p class="accessories-description gradient">Best choices</p>
			<h2 class="accessories-title">
				Popular accessories
				<span class="gradient">.</span>
			</h2>
			<div class="accessories-cards">
				<div class="accessories-card-row">
					<div
						class="accessories-card"
						v-for="(product, index) in products.slice(0, 2)"
						:key="index"
					>
						<router-link :to="`/products/${product.id}`">
							<div class="accessories-card-img">
								<img :src="product.imageUrl" :alt="product.name" />
							</div>
							<p class="accessories-card-title">{{ product.name }}</p>
							<p class="accessories-card-price">
								<span class="gradient">£</span>
								{{ product.price.toFixed(2) }}
							</p>
						</router-link>
						<button
							class="add-to-cart-button"
							@click="handleAddToCart(product)"
						>
							Add to Cart
						</button>
					</div>
				</div>
				<div class="accessories-card-row">
					<div
						class="accessories-card"
						v-for="(product, index) in products.slice(2)"
						:key="index"
					>
						<router-link :to="`/products/${product.id}`">
							<div class="accessories-card-img">
								<img :src="product.imageUrl" :alt="product.name" />
							</div>
							<p class="accessories-card-title">{{ product.name }}</p>
							<p class="accessories-card-price">
								<span class="gradient">£</span>
								{{ product.price.toFixed(2) }}
							</p>
						</router-link>
						<button
							class="add-to-cart-button"
							@click="handleAddToCart(product)"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex"; // Assuming you're using Vuex for cart management

export default {
	name: "AccessoriesComponent",
	setup() {
		const store = useStore(); // Get the Vuex store instance
		const products = ref([
			{
				id: 1,
				name: "Dream Earrings",
				price: 2500,
				imageUrl: require("@/assets/images/earrings.png"),
			},
			{
				id: 2,
				name: "Dream Necklace",
				price: 12500,
				imageUrl: require("@/assets/images/necklace.png"),
			},
			{
				id: 3,
				name: "Panthère Ring",
				price: 8500,
				imageUrl: require("@/assets/images/ring.png"),
			},
			{
				id: 4,
				name: "Love Bracelet",
				price: 5000,
				imageUrl: require("@/assets/images/bracelet.png"),
			},
		]);

		const handleAddToCart = product => {
			store.dispatch("addToCart", product);
		};

		return {
			products,
			handleAddToCart,
		};
	},
};
</script>
