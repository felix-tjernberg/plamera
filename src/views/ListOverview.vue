<template>
  <div class="container">
    <Navbar></Navbar>
    <h1 v-if="mobile">Plamera</h1>
    <h1 id="MobilH" v-else>My Tasks</h1>
    <default-lists />
    <hr />
    <h3>My Lists</h3>
    <button id="DesktopButton" @click="addListOverlay = !addListOverlay">
      Create List
    </button>
    <AddList
      v-if="addListOverlay"
      @closeOverlay="addListOverlay = !addListOverlay"
      id="addListOverlay"
    ></AddList>
    <ListCard></ListCard>
  </div>
</template>

<script>
  import DefaultLists from '@/components/DefaultLists.vue'
  import ListCard from '@/components/ListCard.vue'
  import AddList from '@/components/AddList.vue'
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      ListCard,
      DefaultLists,
      AddList,
      Navbar
    },
    mounted() {
      window.onresize = this.onResize
    },
    methods: {
      onResize() {
        this.mobile = window.innerWidth < 990
      }
    },
    data() {
      return {
        addListOverlay: false,
        mobile: true
      }
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
    color: #2d3436;
  }
  hr {
    opacity: 0.21;
    border: 1px solid #000000;
    margin-bottom: 15px;
    margin-top: 20px;
    margin-left: 0;
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
  #DesktopButton {
    display: none;
  }
  @media only screen and (min-device-width: 1000px) {
    h3 {
      margin-left: 300px;
    }

    hr {
      opacity: 0.21;
      border: 1px solid #000000;
      margin-bottom: 15px;
      margin-left: 300px;
    }
    #DesktopButton {
      margin-left: 300px;
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
      margin-left: 300px;
      text-align: left;
      margin-bottom: 50px;
    }
    h3 {
      text-align: left;
    }
  }
</style>
