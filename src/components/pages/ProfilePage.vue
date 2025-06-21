<template>
  <section class="profile">
    <div class="container">
      <h1>Profile</h1>
      <p>Welcome, {{ username }}</p>
      <ul>
        <li>Order history</li>
        <li>Settings</li>
      </ul>
      <button class="logout-button" @click="handleLogout">Logout</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfilePage',
  props: {
    username: String,
    handleLogout: Function,
  }
};
</script>

<style scoped>
/* ... your CSS styles ... */
</style>
