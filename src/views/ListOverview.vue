<template>
  <div class="container">
    <AddList
      v-if="addTaskOverlay"
      v-on:closeOverlay="addTaskOverlay = !addTaskOverlay"
      id="addListOverlay"
    ></AddList>
    <PlusButton
      id="Button"
      v-on:openOverlay="addTaskOverlay = !addTaskOverlay"
    ></PlusButton>
    <h1>My Tasks</h1>
    <default-lists />
    <ListCard></ListCard>
  </div>
</template>

<script>
  import AddList from '@/components/AddList.vue'
  import DefaultLists from '@/components/DefaultLists.vue'
  import ListCard from '@/components/ListCard.vue'
  import PlusButton from '@/components/PlusButton.vue'
  export default {
    components: {
      AddList,
      ListCard,
      DefaultLists,
      PlusButton
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
  /* This selector needs to be moved */
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
</style>
