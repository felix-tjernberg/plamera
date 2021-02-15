<template>
  <form>
    <span class="login">Login</span>
    <div class="container">
      <h1>Sign up</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input
        type="submit"
        value="Sign up"
        class="signinbutton"
        @click="goToLogin()"
      />
    </div>
  </form>
</template>

<script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #5db075;
  }

  span {
    position: absolute;
    width: 43px;
    height: 19px;
    right: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #5db075;
    text-align: right;
  }
  * {
    box-sizing: border-box;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
    background-color: #fff;
  }

  /* Full-width input fields */
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 8px;
    background: #f6f6f6;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #bdbdbd;
  }

  /* Set a style for the submit button */
  .signinbutton {
    background-color: #5db075;
    color: #fff;
    padding: 16px 32px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 25px;
  }
  input[type='submit'] {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    line-height: 19px;
  }
  .registerbtn:hover {
    opacity: none;
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  }
</style>
