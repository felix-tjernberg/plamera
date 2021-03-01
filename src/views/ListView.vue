<template>
  <div id="app">
    <button class="btn-back" @click="goToListOverview()" id="back">Back</button>
    <h1>{{ $route.params.listName }}</h1>
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
  import PlusButton from '@/components/PlusButton.vue'
  import AddTask from '@/components/AddTask.vue'
  import TaskCard from '@/components/TaskCard.vue'
  export default {
    components: {
      AddTask,
      TaskCard,
      PlusButton
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
  #TaskOverlay {
    margin-top: 30vh;
    margin-left: 3vw;
    position: fixed;
  }
</style>
