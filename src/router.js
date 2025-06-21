import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import CataloguePage from "./components/pages/CataloguePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ShoppingCartPage from "./components/pages/ShoppingCartPage.vue";
import CheckoutPage from "./components/pages/CheckoutPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";
import NewsletterPage from "./components/pages/NewsletterPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import ProfilePage from "./components/pages/ProfilePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/catalogue", component: CataloguePage },
	{ path: "/about", component: AboutPage },
	{ path: "/shopping-cart", component: ShoppingCartPage },
	{ path: "/checkout", component: CheckoutPage },
	{ path: "/contact", component: ContactPage },
	{ path: "/newsletter", component: NewsletterPage },
	{ path: "/products/:productId", component: ProductPage },
	{ path: "/login", component: LoginPage },
	{
		path: "/profile",
		component: ProfilePage,
		meta: { requiresAuth: true }, // Add meta for authentication
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

// Authentication guard
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !localStorage.getItem("isLoggedIn")) {
		next("/login");
	} else {
		next();
	}
});

export default router;
