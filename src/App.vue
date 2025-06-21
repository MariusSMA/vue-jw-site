<template>
	<div id="app">
		<CartProvider>
			<HeaderComponent />
			<main>
				<router-view />
			</main>
		</CartProvider>
	</div>
</template>

<script>
import CartProvider from "./components/CartContext.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
	components: {
		CartProvider,
		HeaderComponent,
	},
};
</script>

<style>
@import "./assets/styles/style.css"; /* Import style.css */
</style>
