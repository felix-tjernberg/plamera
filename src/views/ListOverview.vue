<template>
  <div class="container">
    <div class="head">
      <router-link to="/" id="back">Back</router-link>
      <h1>My Tasks</h1>
    </div>
    <div id="defaultLists">
      <div>
        <router-link id="ML2" to="/">My List</router-link>
      </div>
      <div>
        <img
          class="MobileIcons"
          src="@/assets/Task-Completed-Icon.png"
          alt=""
        /><router-link :to="'/list/' + completed" id="completed"
          >Completed</router-link
        ><img
          class="DesktopIcons"
          src="@/assets/Task-Completed-Icon.png"
          alt=""
        />
      </div>

      <div>
        <img
          class="MobileIcons"
          src="@/assets/Star-Icon.png"
          alt=""
          id="star"
        /><router-link :to="'/list/' + important" id="important"
          >Important</router-link
        ><img
          class="DesktopIcons"
          src="@/assets/Star-Icon.png"
          alt=""
          id="star"
        />
      </div>
    </div>
    <hr />
    <p id="ML">My Lists</p>
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
    bottom: 80px;
    right: 30px;
    position: fixed;
  }

  #back {
    text-decoration: none;
    color: #ffffff;
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
    margin-top: 70px;
  }
  #star {
    width: 25px;
    height: 25px;
  }
  #ML {
    display: none;
  }
  #ML2 {
    display: none;
  }
  .DesktopIcons {
    display: none;
  }
  /* Desktop */
  @media only screen and (min-device-width: 1000px) {
    hr {
      border: 1px solid #e8e8e8;
      margin-bottom: 15px;
    }
    .DesktopIcons {
      display: block;
      margin-left: 100px;
      position: absolute;
      margin-right: 50px;
      margin-left: 110px;
      margin-bottom: 70px;
      margin-top: -21px;
    }
    #ML {
      display: block;
      color: black;
      margin-left: -90vw;
      margin-top: 8vh;
      font-weight: 600;
      font-size: 20px;
    }
    #ML2 {
      display: block;
      margin-right: 10px;
      color: black;
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      text-decoration: none;
    }
    h1 {
      height: 36px;
      left: 16px;
      right: 16px;
      top: 78px;
      margin-bottom: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;
      float: left;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
    #Button {
      bottom: 80px;
      right: 30px;
      position: fixed;
    }

    #back {
      text-decoration: none;
      color: #ffffff;
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
      flex-direction: row;
      align-items: flex-start;
      margin-top: 100px;
      grid-gap: 20px;
      margin-bottom: 0px;
    }
    #star {
      width: 25px;
      height: 25px;
    }
    .MobileIcons {
      display: none;
    }
    #important {
      font-weight: 600;
    }
    #completed {
      font-weight: 600;
    }
    #defaultLists a.router-link-exact-active {
      color: #42b983;
    }
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
