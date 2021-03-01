<template>
  <div class="container">
    <h1 id="MobilH">My Tasks</h1>
    <default-lists />
    <hr />
    <h3>My Lists</h3>
    <button id="DesktopButton" @click="addListOverlay = !addListOverlay">
      Create List
    </button>
    <ListCard></ListCard>
  </div>
</template>

<script>
  import DefaultLists from '@/components/DefaultLists.vue'
  import ListCard from '@/components/ListCard.vue'
  export default {
    components: {
      ListCard,
      DefaultLists
    }
  }
</script>

<style scoped>
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
  hr {
    opacity: 0.21;
    border: 1px solid #000000;
    margin-bottom: 15px;
    margin-left: 256px;
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
  @media only screen and (min-device-width: 1000px) {
    h3 {
      margin-left: 256px;
    }
    #DesktopButton {
      margin-left: 256px;
      display: block;
      border-radius: 30px;
      background-color: #5db075;
      border: none;
      height: 58px;
      width: 200px;
      font-size: 18px;
      color: white;
      float: left;
      margin-top: -4px;
    }
    #MobilH {
      margin-left: 256px;
      text-align: left;
      margin-bottom: 50px;
    }
    h3 {
      text-align: left;
    }
  }
</style>
