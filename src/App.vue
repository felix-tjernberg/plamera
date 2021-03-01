<template>
  <div id="app">
    <main>
      <router-view />
    </main>

    <Navbar></Navbar>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    } 
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  main:first-child {
    margin-bottom: 100px;
  }
</style>
