<template>
  <div class="home">
    <router-link to="/MyTasks">My Tasks</router-link> |
    <router-link to="/about">About</router-link>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
