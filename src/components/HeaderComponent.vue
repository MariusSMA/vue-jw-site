<template>
	<header>
		<div class="container">
			<nav class="navbar">
				<router-link to="/" class="link" @click="scrollToTop">
					<img
						src="@/assets/images/logo.svg"
						alt="London Jewelry Logo"
						class="logo"
					/>
				</router-link>
				<form @submit.prevent="handleSearchSubmit" class="search-form">
					<input
						type="text"
						placeholder="Search..."
						v-model="searchTerm"
						class="search-input"
						@input="handleSearchChange"
					/>
					<button type="submit" class="search-button">
						<img
							src="@/assets/images/search-icon.svg"
							alt="Search Icon"
							class="search-icon"
						/>
					</button>
				</form>
				<ul class="links">
					<li class="link-item">
						<router-link to="/" class="link active" @click="scrollToTop">
							Home
						</router-link>
					</li>
					<li class="link-item">
						<router-link to="/catalogue" class="link" @click="scrollToTop">
							Catalogue
						</router-link>
					</li>
					<li class="link-item">
						<router-link
							:to="isLoggedIn ? '/profile' : '/login'"
							class="link"
							@click="toggleLoginDropdown"
						>
							<img
								src="@/assets/images/user-icon.svg"
								alt="User Icon"
								class="user-icon"
							/>
						</router-link>
					</li>
					<li class="link-item">
						<router-link to="/shopping-cart" class="link" @click="scrollToTop">
							<img
								src="@/assets/images/shopping-cart.svg"
								alt="Shopping Cart Icon"
								class="shopping-cart-icon"
							/>
							<span
								class="cart-badge"
								v-if="cartItemCount > 0"
								:class="{ show: cartItemCount > 0 }"
							>
								{{ cartItemCount }}
							</span>
						</router-link>
					</li>
				</ul>
			</nav>
			<div
				class="search-results"
				ref="searchResultsRef"
				v-if="showSearchResults"
				:class="{ show: showSearchResults }"
			>
				<h2>
					Search Results
					<span class="close-search-results" @click="handleCloseSearchResults">
						X
					</span>
				</h2>
				<ul>
					<li v-for="product in searchResults" :key="product.id">
						<router-link
							:to="`/products/${product.id}`"
							@click.prevent="
								scrollToTop;
								handleCloseSearchResults;
								router.push(`/products/${product.id}`);
							"
						>
							{{ product.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex"; // Assuming you're using Vuex for cart management
import data from "../assets/data/products.json"; // Import your JSON file
import { useRouter } from "vue-router"; // Import useRouter

export default {
	name: "HeaderComponent",
	setup() {
		const store = useStore(); // Get the Vuex store instance
		const cartItems = computed(() => store.state.cart.items); // Get cart items from Vuex
		const searchResultsRef = ref(null);
		const searchTerm = ref("");
		const searchResults = ref([]);
		const isLoggedIn = computed(() => store.state.auth.isLoggedIn);
		const username = ref("");
		const totalQuantity = computed(() =>
			cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
		);
		const showLoginDropdown = ref(false);
		const showSearchResults = ref(false);
		const router = useRouter(); // Get the router instance

		onMounted(() => {
			window.scrollTo(0, 0); // Scroll to the top of the page
		});

		const handleSearchChange = event => {
			searchTerm.value = event.target.value;
			// Filter products as the user types, considering case sensitivity
			const foundProducts = data.filter(
				product =>
					product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(searchTerm.value.toLowerCase())
			);

			// Update search results state
			searchResults.value = foundProducts;
			showSearchResults.value = searchTerm.value.trim() !== "";
		};

		const handleSearchSubmit = () => {
			// Filter products as the user types, considering case sensitivity
			const foundProducts = data.filter(
				product =>
					product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(searchTerm.value.toLowerCase())
			);

			// Update search results state
			searchResults.value = foundProducts;
		};

		const handleCloseSearchResults = () => {
			searchTerm.value = "";
			searchResults.value = [];
			showSearchResults.value = false;
		};

		const handleProductClick = productId => {
			scrollToTop;
			handleCloseSearchResults;
			router.push(`/products/${productId}`);
		};

		const toggleLoginDropdown = () => {
			showLoginDropdown.value = !showLoginDropdown.value;
		};

		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth", // Smooth scrolling
			});
		};

		const cartItemCount = computed(() => {
			return store.state.cart.items.reduce(
				(acc, item) => acc + item.quantity,
				0
			); // Get the cart item count from the Vuex store
		});

		return {
			cartItems,
			searchResultsRef,
			searchTerm,
			searchResults,
			isLoggedIn,
			username,
			totalQuantity,
			showLoginDropdown,
			showSearchResults,
			handleSearchChange,
			handleSearchSubmit,
			handleCloseSearchResults,
			toggleLoginDropdown,
			scrollToTop,
			cartItemCount,
			router,
			handleProductClick,
		};
	},
};
</script>
