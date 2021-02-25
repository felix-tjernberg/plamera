<template>
  <button class="addTaskButton" v-on:click="openAddTask">
    Create new List
  </button>
</template>

<script>
  export default {
    methods: {
      openAddTask() {
        this.$emit('openAddTaskOverlay')
      }
    }
  }
</script>

<style scoped>
  .addTaskButton {
    border-radius: 30px;
    background-color: #5db075;
    border: none;
    height: 58px;
    width: 200px;
    font-size: 18px;
    color: white;
    float: left;
  }
</style>
