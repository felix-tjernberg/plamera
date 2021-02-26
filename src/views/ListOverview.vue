<template>
  <div class="container">
    <AddList
      v-if="addTaskOverlay"
      v-on:closeOverlay="addTaskOverlay = !addTaskOverlay"
      id="addListOverlay"
    ></AddList>
    <AddTaskButton
      id="Button"
      v-on:openOverlay="addTaskOverlay = !addTaskOverlay"
    ></AddTaskButton>
    <h1>My Tasks</h1>
    <default-lists />
    <div class="listContainer">
      <ListCard></ListCard>
    </div>
  </div>
</template>

<script>
  import ListCard from '@/components/ListCard.vue'
  import AddTaskButton from '@/components/AddTaskButton.vue'
  import AddList from '@/components/AddList.vue'
  import DefaultLists from '@/components/DefaultLists.vue'
  export default {
    components: {
      AddTaskButton,
      AddList,
      ListCard,
      DefaultLists
    },
    data: function() {
      return {
        addTaskOverlay: false
      }
    },
    methods: {}
  }
</script>

<style>
  h1 {
    height: 36px;
    left: 16px;
    right: 16px;
    top: 78px;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }

  /* This selector needs to be moved */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
  }

  textarea:focus,
  input:focus /* What are these selectors for? */ {
    outline: none;
  }
  #Button {
    bottom: 80px;
    right: 30px;
    position: fixed;
  }
  /* .listContainer {
    display: flex;
    place-content: center;
  } */
</style>
