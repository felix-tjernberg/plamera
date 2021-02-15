<template>
  <form>
    <div class="container">
      <h1>Login</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input
        type="submit"
        value="Log in"
        class="signinbutton"
        @click="goToLandingpage()"
      />
      <p>Forgot your password?</p>
    </div>
  </form>
</template>

<script>
  export default {
    methods: {
      goToLandingpage() {
        this.$router.push('/')
      }
    }
  }
</script>

<style></style>
