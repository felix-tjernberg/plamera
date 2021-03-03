<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="headercontainer">
      <button class="btn-back" @click="goToListOverview()" id="back">
        Back
      </button>
      <h1>{{ $route.params.listName }}</h1>
      <p id="tom">back</p>
    </div>
    <DefaultLists />
    <hr />
    <AddTask
      id="TaskOverlay"
      v-if="taskOverlay"
      @closeOverlay="taskOverlay = !taskOverlay"
      :listId="this.$route.params.listId"
    ></AddTask>

    <TaskCard :listId="this.$route.params.listId"></TaskCard>
    <PlusButton
      id="Button"
      @openOverlay="taskOverlay = !taskOverlay"
    ></PlusButton>
  </div>
</template>

<script>
  import DefaultLists from '@/components/DefaultLists.vue'
  import PlusButton from '@/components/PlusButton.vue'
  import AddTask from '@/components/AddTask.vue'
  import TaskCard from '@/components/TaskCard.vue'
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      AddTask,
      TaskCard,
      PlusButton,
      DefaultLists,
      Navbar
    },
    data: function() {
      return {
        taskOverlay: false
      }
    },
    methods: {
      goToListOverview() {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  #headercontainer {
    display: flex;
    justify-content: space-between;
  }
  #TaskOverlay {
    margin-top: 30vh;
    margin-left: 3vw;
    position: fixed;
  }
  hr {
    opacity: 0.21;
    border: 1px solid #000000;
    margin-bottom: 15px;
  }
  #tom {
    opacity: 0;
    font-weight: bold;
    font-size: 18px;
  }
  .btn-back {
    border: none;
    background-color: white;
    color: #5db075;
    font-weight: bold;
    font-size: 18px;
  }
  @media only screen and (min-device-width: 1000px) {
    hr {
      opacity: 0.21;
      border: 1px solid #000000;
      margin-bottom: 15px;
      margin-left: 300px;
    }
  }
</style>
