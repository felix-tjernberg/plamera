<template>
  <div class="MyTasks">
    <MyTasks></MyTasks>
    <AddTask></AddTask>
  </div>
</template>
<script>
  import AddTask from '@/components/AddTask.vue'
  import MyTasks from '@/components/Helloworld.vue'
  export default {
    name: 'whatever',
    components: {
      AddTask,
      MyTasks
    }
  }
</script>
<style>
  .Mytasks {
    position: absolute;
  }
  #header {
    text-align: center;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  #SearchBar {
    border-radius: 30px;
    width: 90vw;
    height: 7vh;
    background-color: #e8e8e8;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  #back {
    text-decoration: none;
    color: #5db075;
    font-weight: bold;
    display: flex;
    font-size: 22px;
  }
  #important {
    background-image: url('~@/assets/Star-Icon.png');
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 14px;
    height: 6vh;
    background-size: 4vh;
    text-align: center;
    margin-top: 3vh;
    font-size: 16px;
    margin-left: -58vw;
    padding-right: 23px;
  }
  #completed {
    background-image: url('~@/assets/Task-Completed-Icon.png');
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 2.1vh;
    height: 6vh;
    background-size: 4vh;
    text-align: center;
    margin-top: -6vh;
    font-size: 16px;
    margin-left: -58vw;
    padding-right: 23px;
  }
</style>
