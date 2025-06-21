<template>
	<section class="items">
		<div class="container">
			<div
				class="products"
				v-for="(category, categoryIndex) in categories"
				:key="categoryIndex"
			>
				<div class="products-header">
					<div class="products-text">
						<span class="gradient">{{ category.header.span }}</span>
						<h2>
							{{ category.header.title }}
							<span class="gradient">.</span>
						</h2>
					</div>
					<div class="products-view-more">
						<p>View more</p>
						<img
							src="@/assets/images/right-blue-arrow.svg"
							alt="Right blue arrow"
						/>
					</div>
				</div>
				<div class="products-body">
					<div
						class="product-card"
						v-for="(product, productIndex) in category.products"
						:key="productIndex"
					>
						<router-link :to="`/products/${product.id}`">
							<div class="product-card-img">
								<img :src="product.imageUrl" :alt="product.name" />
							</div>
							<p class="product-card-title">{{ product.name }}</p>
							<p class="product-card-price">
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
	name: "ItemsComponent",
	setup() {
		const store = useStore(); // Get the Vuex store instance
		const categories = ref([
			{
				header: {
					span: "New collection",
					title: "Bracelets",
				},
				products: [
					{
						id: 5,
						name: "Trinity Bracelet",
						price: 2500,
						imageUrl: require("@/assets/images/bracelet-1.png"),
					},
					{
						id: 6,
						name: "Panthére Bracelet",
						price: 3500,
						imageUrl: require("@/assets/images/bracelet-2.png"),
					},
					{
						id: 7,
						name: "Clash Bracelet",
						price: 7500,
						imageUrl: require("@/assets/images/bracelet-3.png"),
					},
				],
			},
			{
				header: {
					span: "Recommended",
					title: "Necklaces",
				},
				products: [
					{
						id: 8,
						name: "Agrafe Necklace",
						price: 9500,
						imageUrl: require("@/assets/images/necklace-1.png"),
					},
					{
						id: 9,
						name: "Amulette Necklace",
						price: 1500,
						imageUrl: require("@/assets/images/necklace-2.png"),
					},
					{
						id: 10,
						name: "Cactus Necklace",
						price: 15000,
						imageUrl: require("@/assets/images/necklace-3.png"),
					},
				],
			},
			{
				header: {
					span: "Popular",
					title: "Earrings",
				},
				products: [
					{
						id: 11,
						name: "Dream Earrings",
						price: 20000,
						imageUrl: require("@/assets/images/earrings-1.png"),
					},
					{
						id: 12,
						name: "Serpenti Earrings",
						price: 15000,
						imageUrl: require("@/assets/images/earrings-2.png"),
					},
					{
						id: 13,
						name: "B.Zero1 Earrings",
						price: 2000,
						imageUrl: require("@/assets/images/earrings-3.png"),
					},
				],
			},
			{
				header: {
					span: "New",
					title: "Rings",
				},
				products: [
					{
						id: 14,
						name: "Serpenti Ring",
						price: 1500,
						imageUrl: require("@/assets/images/ring-1.png"),
					},
					{
						id: 15,
						name: "B.Zero1 Ring",
						price: 1000,
						imageUrl: require("@/assets/images/ring-2.png"),
					},
					{
						id: 16,
						name: "Bvulgari Ring",
						price: 3500,
						imageUrl: require("@/assets/images/ring-3.png"),
					},
				],
			},
		]);

		const handleAddToCart = product => {
			store.dispatch("addToCart", product);
		};

		return {
			categories,
			handleAddToCart,
		};
	},
};
</script>
