<template>
  <form>
    <!--MOBILE-->
    <div class="Mobilecontainer">
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
    <!--MOBILE-->
    <!---------------------->
    <!--DESKTOP-->
    <div class="Desktopcontainer">
      <h1 class="LoginHeader">Login</h1>
      <div class="inputs">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <input
        type="submit"
        value="Log in"
        class="signinbutton"
        @click="goToLandingpage()"
      />
      <p>Forgot your password?</p>
    </div>
    <div class="circles"></div>
    <div class="stripes"></div>
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

<style>
  @media only screen and (min-device-width: 1000px) {
  }
</style>
