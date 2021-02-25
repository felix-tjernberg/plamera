<template>
  <div id="app">
    <button class="btn-back" @click="goToListOverview()" id="back">Back</button>
    <h1>{{ $route.params.listName }}</h1>
    <AddTask
      id="TaskOverlay"
      v-if="taskOverlay"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
      :listId="this.$route.params.listId"
    ></AddTask>
    <p class="tasksp" v-if="this.$store.state.someString < [0]">
      No Tasks added yet
    </p>
    <TaskCard :listId="this.$route.params.listId"></TaskCard>
    <AddTaskButton
      id="Button"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
    ></AddTaskButton>
  </div>
</template>

<script>
  import AddTaskButton from '@/components/AddTaskButton.vue'
  import AddTask from '@/components/AddTask.vue'
  import TaskCard from '@/components/TaskCard.vue'
  export default {
    components: {
      AddTaskButton,
      AddTask,
      TaskCard
    },
    data: function() {
      return { taskOverlay: false }
    },
    methods: {
      goToListOverview() {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .tasksp {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 400px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #787885;
    margin: 30px;
  }
  #TaskOverlay {
    margin-top: 30vh;
    margin-left: 3vw;
    position: fixed;
  }
</style>
