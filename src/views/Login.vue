<template>
  <form>
    <!--MOBILE-->
    <div class="Mobilecontainer">
      <h1>Login</h1>
      <input type="text" placeholder="Email" v-model="email" required />
      <br />
      <span class="span-validation" v-if="message.email">{{
        message.email
      }}</span>
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      /><br />
      <span class="span-validation" v-if="message.password">{{
        message.password
      }}</span>
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
        <input type="text" placeholder="Email" v-model="email" required />
        <br />
        <span class="span-validation" v-if="message.email">{{
          message.email
        }}</span>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        /><br />
        <span class="span-validation" v-if="message.password">{{
          message.password
        }}</span>
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
    data() {
      return {
        password: '',
        email: '',
        message: []
      }
    },
    watch: {
      password(value) {
        this.password = value
        this.PasswordValidation(value)
      },
      email(value) {
        this.email = value
        this.EmailValidation(value)
      }
    },
    methods: {
      EmailValidation(value) {
        if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(value)) {
          this.message['email'] = 'Required'
        } else {
          this.message['email'] = 'Please, enter a valid email'
        }
      },
      PasswordValidation(value) {
        
        if (value.length < 8) {
          this.message['password'] =
            'Your password needs to be 8 characters'
        } else {
          this.message['password'] = 'Required'
        }
      },
      goToLandingpage() {
        this.$router.push('/signup')
      }
    }
  }
</script>

<style>
  .span-validation {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #ED2121;
    padding-top: 0px;
    margin-top: 0px;
  }
  @media only screen and (min-device-width: 1000px) {
  }
</style>
