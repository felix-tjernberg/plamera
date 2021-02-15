<template>
  
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/listoverview">Listoverview</router-link>|
      <router-link to="/listoverviewempty">Listoverviewempty</router-link>
      <router-link to="/">List Overview</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/signup">SignUp</router-link>|
      <router-link to="/list/important">Important</router-link>|
      <router-link to="/list/completed">Completed</router-link>|
      <router-link to="/calendar">Calendar</router-link>|
      <router-link to="/testarea">Test Area</router-link>
    <router-view />
  </div>
</template>

<style>

  /* Tempory styling of a tempory nav */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

#nav a.router-link-exact-active {
  color: #42b983;
}

  nav a.router-link-exact-active {
    color: #42b983;
  }

</style>
