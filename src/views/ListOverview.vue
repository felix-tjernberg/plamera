<template>
  <div class="container">
    <h1 id="MobilH">My Tasks</h1>
    <default-lists />
    <hr />
    <h3>My Lists</h3>
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
  hr {
    border: 2px solid #e8e8e8;
    margin-bottom: 15px;
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
    #MobilH {
      text-align: left;
      margin-bottom: 50px;
    }
    h3 {
      text-align: left;
      margin-left: 100px;
    }
  }
</style>
