<template>
  <div class="hello">
    <div id="navbar">
      <router-link to="/" id="back">Back</router-link>

      <h1 id="header">My Tasks</h1>
      <p id="filter">Filter</p>
    </div>

    <input type="field" placeholder="Search" id="SearchBar" />
    <div>
      <p id="important"><strong> Important</strong></p>
    </div>

    <p id="completed"><strong>Completed</strong></p>
    <hr style="margin-top: -3vh" />

    <AddTask></AddTask>
  </div>
</template>

<script>
  import AddTask from '@/components/AddTask.vue'
  export default {
    name: 'MyTasks',
    data() {
      return {
        data: null
      }
    },
    components: {
      AddTask
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #filter {
    margin: 0%;
    text-decoration: none;
    color: #5db075;
    font-weight: bold;
    display: flex;
    font-size: 22px;
    align-self: center;
  }
  #back {
    text-decoration: none;
    color: #5db075;
    font-weight: bold;
    display: flex;
    font-size: 22px;
    align-self: center;
  }
  #navbar {
    display: flex;

    justify-content: space-between;
  }
  #SearchBar {
    margin-top: 20px;
    border-radius: 30px;
    width: 90vw;
    height: 7vh;
    background-color: #e8e8e8;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  #important {
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 14px;
    height: 6vh;
    display: flex;
    background-size: 4vh;
    margin-top: 3vh;
    font-size: 16px;
    padding-right: 23px;
  }
  #completed {
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 2.1vh;
    height: 6vh;
    display: flex;
    background-size: 4vh;
    margin-top: -6vh;
    font-size: 16px;
    padding-right: 23px;
  }
  #header {
    text-align: center;
    margin: 0;
    align-self: center;
  }
</style>
