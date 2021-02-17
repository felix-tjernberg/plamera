<template>
  <div class="container">
    <div class="head">
      <router-link to="/" id="back">Back</router-link>
      <h1>My Tasks</h1>
    </div>
    <div id="defaultLists">
      <div>
        <img src="@/assets/Task-Completed-Icon.png" alt="" /><router-link
          :to="'/list/' + completed"
          id="completed"
          >Completed</router-link
        >
      </div>

      <div>
        <img src="@/assets/Star-Icon.png" alt="" id="star" /><a
          href="/important"
          id="important"
          >Important</a
        >
      </div>
    </div>
    <hr />
    <div class="listContainer">
      <AddList
        v-if="taskOverlay"
        v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
      ></AddList>
      <ListCard></ListCard>

      <AddTaskButton
        id="Button"
        v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
      ></AddTaskButton>
    </div>
  </div>
</template>

<script>
  import ListCard from '@/components/ListCard.vue'
  import AddTaskButton from '@/components/AddTaskButton.vue'
  import AddList from '@/components/AddList.vue'
  export default {
    components: {
      AddTaskButton,
      AddList,
      ListCard
    },
    data: function() {
      return {
        taskOverlay: false
      }
    },
    methods: {}
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
  }
  hr {
    border: 1px solid #e8e8e8;
    margin-bottom: 15px;
  }
  h1 {
    position: absolute;
    height: 36px;
    left: 16px;
    right: 16px;
    top: 78px;
    margin-bottom: px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
  #Button {
    bottom: 0;
    right: 0;
    position: fixed;
  }

  #back {
    text-decoration: none;
    color: #5db075;
    font-weight: bold;
    position: absolute;
    margin-left: -25vh;
    margin-top: -2vh;
    font-size: 22px;
  }

  #completed {
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 20px;
  }
  #important {
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 20px;
  }
  #defaultLists {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10vh;
  }
  #star {
    width: 25px;
    height: 25px;
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  }
  /* Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }
  /* Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  }
</style>
