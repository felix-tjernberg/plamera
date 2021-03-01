<template>
  <div class="settings">
    <Navbar></Navbar>
    <div id="Header">
      <h1>Settings</h1>
      <router-link to="/"><p id="B">Back</p></router-link>
    </div>

    <div id="Set">
      <div class="bar"><p class="SetTxt">My Account</p></div>
      <div class="bar"><p class="SetTxt">General Settings</p></div>
      <div class="bar"><p class="SetTxt">Link Account</p></div>
      <div class="bar"><p class="SetTxt">Prefrences</p></div>

      <p id="ver">Ver 0.1</p>
    </div>

    <router-link to="/Login"><p id="RLoggout">Logg Out</p></router-link>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    name: 'settings',
    components: {
      Navbar
    }
  }
</script>
<style scoped>
  #Header {
    margin-top: 7vh;
  }
  #Set {
    display: flex;
    grid-gap: 3vh;
    flex-direction: column;
    margin-top: 10vh;
  }
  .bar {
    display: flex;
    background-color: #f6f6f6;
    height: 7vh;
    width: 100vw;
    margin-left: -2vw;
    border: solid rgb(219, 219, 219) 1px;
  }
  .SetTxt {
    color: black;
    margin-left: 2vw;
    font-size: 20px;
  }
  #ver {
    color: rgb(187, 187, 187);
  }
  #RLoggout {
    color: red;
  }
  #B {
    font-size: 23px;
    position: absolute;
    margin-top: -5.6vh;
    margin-left: 4vw;
  }
  @media only screen and (min-device-width: 1000px) {
    .bar {
      display: flex;
      background-color: #f6f6f6;
      height: 7vh;
      width: 500px;
      margin-left: 39%;
      border: solid rgb(219, 219, 219) 1px;
    }
    #B {
      display: none;
    }
  }
</style>
