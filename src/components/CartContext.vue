<template>
	<div>
		<slot />
	</div>
</template>

<script>
import { reactive, provide } from "vue";

export default {
	setup() {
		const cart = reactive({
			items: [],
		});

		// Provide the cart object to all child components
		provide("cart", cart);

		// Function to add an item to the cart
		const addToCart = product => {
			const existingItem = cart.items.find(item => item.id === product.id);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				cart.items.push({ ...product, quantity: 1 });
			}
		};

		// Function to remove an item from the cart
		const removeFromCart = productId => {
			cart.items = cart.items.filter(item => item.id !== productId);
		};

		// Function to update the quantity of an item in the cart
		const updateQuantity = (productId, newQuantity) => {
			const item = cart.items.find(item => item.id === productId);
			if (item) {
				item.quantity = newQuantity;
			}
		};

		return {
			addToCart,
			removeFromCart,
			updateQuantity,
		};
	},
};
</script>
