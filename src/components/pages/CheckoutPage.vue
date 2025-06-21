<template>
	<section class="checkout-page">
		<div class="container">
			<h1 class="checkout-title">Checkout</h1>

			<div class="checkout-content">
				<div class="cart-items-checkout">
					<h2>Your Order</h2>
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in cartItems" :key="index">
								<td>{{ item.name }}</td>
								<td>£{{ item.price.toFixed(2) }}</td>
								<td>{{ item.quantity }}</td>
								<td>£{{ (item.price * item.quantity).toFixed(2) }}</td>
							</tr>
						</tbody>
					</table>
					<p class="cart-total-price">
						Total: £{{ calculateTotalPrice.toFixed(2) }}
					</p>
				</div>

				<form @submit.prevent="handleCheckout" class="checkout-form">
					<div class="form-section">
						<h2>Shipping Address</h2>
						<div class="form-group">
							<label for="firstName">First Name:</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								v-model="shippingAddress.firstName"
								required
							/>
						</div>
						<div class="form-group">
							<label for="lastName">Last Name:</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								v-model="shippingAddress.lastName"
								required
							/>
						</div>
						<div class="form-group">
							<label for="address">Address:</label>
							<input
								type="text"
								id="address"
								name="address"
								v-model="shippingAddress.address"
								required
							/>
						</div>
						<div class="form-group">
							<label for="city">City:</label>
							<input
								type="text"
								id="city"
								name="city"
								v-model="shippingAddress.city"
								required
							/>
						</div>
						<div class="form-group">
							<label for="postalCode">Postal Code:</label>
							<input
								type="text"
								id="postalCode"
								name="postalCode"
								v-model="shippingAddress.postalCode"
								required
							/>
						</div>
						<div class="form-group">
							<label for="country">Country:</label>
							<input
								type="text"
								id="country"
								name="country"
								v-model="shippingAddress.country"
								required
							/>
						</div>
					</div>

					<div class="form-section">
						<h2>Payment Details</h2>
						<div class="form-group">
							<label for="cardNumber">Card Number:</label>
							<input
								type="text"
								id="cardNumber"
								name="cardNumber"
								v-model="paymentDetails.cardNumber"
								required
							/>
						</div>
						<div class="form-group">
							<label for="expiryDate">Expiry Date:</label>
							<input
								type="text"
								id="expiryDate"
								name="expiryDate"
								v-model="paymentDetails.expiryDate"
								required
							/>
						</div>
						<div class="form-group">
							<label for="cvv">CVV:</label>
							<input
								type="text"
								id="cvv"
								name="cvv"
								v-model="paymentDetails.cvv"
								required
							/>
						</div>
					</div>

					<button type="submit" class="checkout-button">Place Order</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex"; // Assuming you're using Vuex for cart management

export default {
	name: "CheckoutPage",
	setup() {
		const store = useStore();
		const cartItems = computed(() => store.state.cart.items);
		const shippingAddress = ref({
			firstName: "",
			lastName: "",
			address: "",
			city: "",
			postalCode: "",
			country: "",
		});
		const paymentDetails = ref({
			cardNumber: "",
			expiryDate: "",
			cvv: "",
		});

		const calculateTotalPrice = computed(() => {
			return cartItems.value.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
		});

		const handleCheckout = async () => {
			// 1. Validate shipping address
			if (
				!shippingAddress.value.firstName ||
				!shippingAddress.value.lastName ||
				!shippingAddress.value.address ||
				!shippingAddress.value.city ||
				!shippingAddress.value.postalCode ||
				!shippingAddress.value.country
			) {
				alert("Please fill in all shipping address fields.");
				return;
			}

			// 2. Validate payment details
			if (
				!paymentDetails.value.cardNumber ||
				!paymentDetails.value.expiryDate ||
				!paymentDetails.value.cvv
			) {
				alert("Please fill in all payment details.");
				return;
			}

			// 3. Process payment (using Stripe, PayPal, etc.)
			// This is where you would integrate your payment gateway
			// For this example, we'll simulate a successful payment
			try {
				// Simulate payment processing
				await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay

				// 4. Update order status in your database
				// This is where you would update your database with the order details
				// For this example, we'll just clear the cart
				store.dispatch("clearCart");

				// 5. Send order confirmation email
				// This is where you would send an email to the user confirming their order
				alert("Payment successful! Your order has been placed.");
				// Redirect to order confirmation page (replace with your actual route)
				this.$router.push("/order-confirmation");
			} catch (error) {
				console.error("Payment error:", error);
				alert("Payment failed. Please try again.");
			}
		};

		return {
			cartItems,
			shippingAddress,
			paymentDetails,
			calculateTotalPrice,
			handleCheckout,
		};
	},
};
</script>
