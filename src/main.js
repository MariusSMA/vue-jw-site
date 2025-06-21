import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Import your Vuex store

createApp(App)
	.use(router)
	.use(store) // Register the Vuex store
	.mount("#app");
