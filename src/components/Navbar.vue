<template>
  <nav>
    <h1 id="Desktoph1">Plamera</h1>
    <ul>
      <li>
        <router-link to="/">
          <NavbarIcon
            :color="isActive ? '#5DB075' : 'black'"
            name="task_overview"
            value="My task"
          >
          </NavbarIcon>
          <p>My Tasks</p>
        </router-link>
      </li>
      <li>
        <router-link to="/CalendarView">
          <NavbarIcon :color="isActive ? '#5DB075' : 'black'" name="calendar">
          </NavbarIcon>
          <p>Calender</p>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <NavbarIcon :color="isActive ? '#5DB075' : 'black'" name="settings">
          </NavbarIcon>
          <p>Settings</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import NavbarIcon from '@/components/NavbarIcon.vue'

  export default {
    components: {
      NavbarIcon
    },

    data() {
      return {
        isActive: false
      }
    },

    methods: {
      toggleActive() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  nav {
    height: 60px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: white;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
  }

  /*ul li {
    display: inline;
  }*/

  button {
    margin: 23px;
    border: none;
    background: none;
  }

  #Desktoph1 {
    display: none;
  }

  @media only screen and (min-device-width: 1000px) {
    #Desktoph1 {
      display: block;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      grid-gap: 10px;
    }

    nav {
      box-shadow: -96px 0px 1px 98px rgba(0, 0, 0, 0.21);
      height: 100%;
      width: 256px;
      top: 0;
      left: 0;
      position: fixed;
      background-color: white;
    }
    li a {
      width: 236px;
      display: flex;
      align-items: center;
      text-decoration: none;
      grid-gap: 25px;
    }
    li svg {
      width: 25px;
      height: 25px;
    }
    li p {
      font-size: 16px;
      color:black;
    }
    h1 {
      font-size: 48px;
    }

    a:hover{
      background-color:#e8e8e8e8;
      border-radius: 6px;
      
    }
  
  }
</style>
