<template>
  <div>
    <div class="hello">
      <div id="navbar">
        <router-link to="/" id="back">Back</router-link>

        <h1 id="header">List Overview</h1>
        <p id="filter">Filter</p>
      </div>

      <input type="field" placeholder="Search" id="SearchBar" />
      <div>
        <p id="important"><strong> Important</strong></p>
      </div>

      <p id="completed"><strong>Completed</strong></p>
    </div>

    <hr />
    <!--Button for cathegories-->
    <div class="container">
      <input
        type="submit"
        value="Hemma"
        :style="cssProps"
        class="categorybutton"
        @click="goToList('Hemma')"
      />

      <input
        type="submit"
        value="Jobb"
        :style="cssProp"
        class="categorybutton"
        @click="goToList('Jobb')"
      />
      <input
        type="submit"
        :style="{
          background:
            'linear-gradient(249.63deg, #992DFF 22.39%, #0CDCEA 120.67%)'
        }"
        value="Personligt"
        class="categorybutton"
        @click="goToList('Personligt')"
      />
    </div>
    <input
      type="submit"
      value="+ New List"
      class="newlistbutton"
      @click="goToListOverviewempty()"
    />

    <ul>
      <li v-for="data in this.$store.state.someArray" :key="data">
        {{ data }}
      </li>
    </ul>
    <AddList
      v-if="taskOverlay"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
    ></AddList>
    <AddTaskButton
      id="Button"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
    ></AddTaskButton>
  </div>
</template>

<script>
  import AddTaskButton from '@/components/AddTaskButton.vue'
  import AddList from '@/components/AddList.vue'
  export default {
    components: {
      AddTaskButton,
      AddList
    },
    data: function() {
      return {
        //isActive: false, <h1 v-if="isActive">Hemma/Jobb/Personligt</h1>@click="isActive = !isActive"
        taskOverlay: false,
        cssProps: {
          backgroundImage: `url(${require('@/assets/monstera.jpg')})`
        },
        cssProp: {
          backgroundImage: `url(${require('@/assets/code1.jpg')})`
        }
      }
    },
    methods: {
      goToList(listName) {
        this.$router.push('/list/' + listName)
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
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
  .icon {
    display: flex;
    color: #000;
  }

  .btn-back {
    display: flex;
    background-color: #fff;
    border: none;
    cursor: pointer;
    margin: 5px;
    color: #5db075;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  /* Add padding to containers */
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 16px;
    background-color: #fff;
  }
  /* Set a style for the submit button */
  .categorybutton {
    background-color: #e8e8e8;
    color: #fff;
    padding: 16px 32px;
    margin: 8px;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    height: 94px;
    width: 343px;
    letter-spacing: -0.02em;
    font-style: bold;
    top: 0px;
    left: 26px;
    line-height: 19px;
  }
  input[type='submit'] {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    line-height: 19px;
  }
  .container {
    display: flex;
    background-color: #fff;
    border: none;
    cursor: pointer;
    margin: 20px;
  }
  .newlistbutton {
    display: flex;
    background-color: #fff;
    border: none;
    cursor: pointer;
    margin: 5px;
    color: #5db075;
  }
  #Button {
    margin-top: 15vh;
    margin-left: 78.5vw;
  }
  #header {
    text-align: center;
    margin: 0;
    align-self: center;
  }
  #completed {
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 2.1vh;
    height: 6vh;
    display: flex;
    background-size: 4vh;
    margin-top: -6vh;
    font-size: 16px;
    padding-right: 23px;
  }
  #filter {
    margin: 0%;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    display: flex;
    font-size: 22px;
    align-self: center;
  }
  #back {
    text-decoration: none;
    color: #5db075;
    font-weight: bold;
    display: flex;
    font-size: 22px;
    align-self: center;
  }
  #navbar {
    display: flex;

    justify-content: space-between;
  }
  #SearchBar {
    margin-top: 20px;
    border-radius: 30px;
    width: 90vw;
    height: 7vh;
    background-color: #e8e8e8;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  #important {
    background-repeat: no-repeat;
    background-position-x: 58vw;
    background-position-y: 1.3vh;
    background-size: 40vh;
    padding: 14px;
    height: 6vh;
    display: flex;
    background-size: 4vh;
    margin-top: 3vh;
    font-size: 16px;
    padding-right: 23px;
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
