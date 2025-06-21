<template>
	<section class="shopping-cart-page">
		<div class="container">
			<div class="shopping-cart">
				<h2 class="shopping-cart-title">Your Shopping Cart</h2>

				<div v-if="cartItems.length === 0" class="empty-cart">
					<p>Your cart is empty.</p>
					<router-link to="/catalogue" class="btn-checkout">
						Continue Shopping
					</router-link>
				</div>

				<div v-else>
					<div class="cart-items">
						<table class="cart-table">
							<thead>
								<tr>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Subtotal</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in cartItems" :key="index">
									<td>
										<span class="cart-product-name">{{ item.name }}</span>
									</td>
									<td>£{{ item.price.toFixed(2) }}</td>
									<td>
										<input
											type="number"
											min="1"
											:value="item.quantity"
											class="cart-quantity-input"
											@change="
												handleQuantityChange(item.id, $event.target.value)
											"
										/>
									</td>
									<td>£{{ (item.price * item.quantity).toFixed(2) }}</td>
									<td>
										<button
											class="btn-remove"
											@click="handleRemoveFromCart(item.id)"
										>
											Remove
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="cart-total">
						<p class="cart-total-price">
							Total: £{{ calculateTotalPrice().toFixed(2) }}
						</p>
						<router-link to="/checkout" class="btn-checkout">
							Proceed to Checkout
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";


export default {
	name: "ShoppingCart",
	setup() {
		const store = useStore(); // Get the Vuex store instance
		const cartItems = computed(() => store.state.cart.items); // Get cart items from Vuex

		const calculateTotalPrice = computed(() => {
			return cartItems.value.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
		});

		const handleRemoveFromCart = productId => {
			store.dispatch("removeFromCart", productId);
		};

		const handleQuantityChange = (productId, newQuantity) => {
			store.dispatch("updateQuantity", { productId, newQuantity });
		};

		return {
			cartItems,
			calculateTotalPrice,
			handleRemoveFromCart,
			handleQuantityChange,
		};
	},
};
</script>

