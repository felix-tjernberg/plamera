<template>
  <div id="app">
    <button class="btn-back" @click="goToListOverview()">Back</button>
    <h1>{{$route.params.listName}}</h1>
    <p class="tasksp">No Tasks added yet</p>
    <add-task-button/>
  </div>
</template>

<script>
import AddTaskButton from '@/components/AddTaskButton.vue'
  export default {
    components: {
      AddTaskButton
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
</style>
