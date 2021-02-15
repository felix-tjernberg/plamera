<template>
  <!-- tag = button -->

  <nav>
    <ul>
      <li>
        <router-link v-slot="{ isActive }" to="/">
    
          <NavbarIcon
            :color="isActive ? '#5DB075' : 'black'"
            
            name="task_overview"
          >
          </NavbarIcon>
        </router-link>
      </li>

      <li>
        <router-link v-slot="{ isActive }" to="/2">
          <NavbarIcon
            :color="isActive ? '#5DB075' : 'black'"
            
            name="calendar"
          >
          </NavbarIcon>
        </router-link>
      </li>

      <li>
        <router-link v-slot="{ isActive }" to="/3">
          <NavbarIcon
            :color="isActive ? '#5DB075' : 'black'"
            
            name="notifications"
          >
          </NavbarIcon>
        </router-link>
      </li>

      <li>
        <router-link v-slot="{ isActive }" to="/4">
          <NavbarIcon
            :color="isActive ? '#5DB075' : 'black'"
            
            name="settings"
          >
          </NavbarIcon>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavbarIcon from "@/components/NavbarIcon.vue";

export default {
  components: {
    NavbarIcon,
  },

  data() {
    return {
     // isActive: false,
    };
  },

  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>


nav {
  height: 60px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: white;
}

ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
}

ul li {
  display: inline;
}

button {
  margin: 23px;
  border: none;
  background: none;
}
</style>
