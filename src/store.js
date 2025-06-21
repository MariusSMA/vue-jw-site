import { createStore } from "vuex";

const store = createStore({
	state: {
		cart: {
			items: [], // Initialize cart items as an empty array
		},
		auth: {
			isLoggedIn: false,
		},
		// Other state properties if needed
	},
	mutations: {
		addToCart(state, product) {
			const existingItem = state.cart.items.find(
				item => item.id === product.id
			);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.cart.items.push({ ...product, quantity: 1 });
			}
		},
		removeFromCart(state, productId) {
			const index = state.cart.items.findIndex(item => item.id === productId);
			if (index !== -1) {
				state.cart.items.splice(index, 1);
			}
		},
		// Other mutations if needed
	},
	actions: {
		addToCart({ commit }, product) {
			commit("addToCart", product);
		},
		removeFromCart({ commit }, productId) {
			commit("removeFromCart", productId);
		},
		// Other actions if needed
	},
	getters: {
		// Your getters
	},
});

export default store;
