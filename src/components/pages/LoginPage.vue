<template>
	<section class="login-page">
		<div v-if="showSuccessMessage" class="success-message">
			<p>Success!</p>
		</div>
		<div v-if="showErrorMessage" class="error-message">
			<p>Error: Invalid username or password.</p>
		</div>
		<div v-if="showLogin">
			<!-- Login Form -->
			<form @submit.prevent="handleLogin">
				<h2>Login</h2>
				<input type="text" placeholder="Username" v-model="username" />
				<input type="password" placeholder="Password" v-model="password" />
				<button type="submit">Login</button>
				<p>
					Don't have an account?
					<span @click="toggleForm" style="cursor: pointer">Register</span>
				</p>
			</form>
		</div>
		<div v-else>
			<!-- Registration Form -->
			<form @submit.prevent="handleRegister">
				<h2>Register</h2>
				<input type="text" placeholder="Username" v-model="username" />
				<input type="password" placeholder="Password" v-model="password" />
				<button type="submit">Register</button>
				<p>
					Already have an account?
					<span @click="toggleForm" style="cursor: pointer">Login</span>
				</p>
			</form>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
	name: "LoginPage",
	setup() {
		const router = useRouter();
		const username = ref("");
		const password = ref("");
		const showLogin = ref(true);
		const showSuccessMessage = ref(false);
		const showErrorMessage = ref(false);
		const users = ref({
			user1: {
				username: "user1",
				password: "password1",
			},
			user2: {
				username: "user2",
				password: "password2",
			},
		});

		const handleLogin = () => {
			const enteredUsername = username.value;
			const enteredPassword = password.value;

			const user = users.value[enteredUsername];
			if (user && user.password === enteredPassword) {
				// Set login status in a higher-level component (e.g., App.vue)
				// You'll need to implement this logic in your App.vue
				// For example:
				// this.$emit('login', enteredUsername);
				router.push("/"); // Redirect to the home page
				showSuccessMessage.value = true;
				setTimeout(() => {
					showSuccessMessage.value = false;
				}, 1000);
			} else {
				showErrorMessage.value = true;
				setTimeout(() => {
					showErrorMessage.value = false;
				}, 1000);
			}
		};

		const handleRegister = () => {
			const enteredUsername = username.value;
			const enteredPassword = password.value;

			if (users.value[enteredUsername]) {
				showErrorMessage.value = true;
				setTimeout(() => {
					showErrorMessage.value = false;
				}, 1000);
			} else {
				users.value = {
					...users.value,
					[enteredUsername]: {
						username: enteredUsername,
						password: enteredPassword,
					},
				};
				showSuccessMessage.value = true;
				setTimeout(() => {
					showSuccessMessage.value = false;
				}, 1000);
			}
		};

		const toggleForm = () => {
			showLogin.value = !showLogin.value;
		};

		return {
			username,
			password,
			showLogin,
			showSuccessMessage,
			showErrorMessage,
			users,
			handleLogin,
			handleRegister,
			toggleForm,
		};
	},
};
</script>

<style scoped>
/* ... your CSS styles ... */
</style>
