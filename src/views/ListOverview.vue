<template>
  <div>
    <h1>List Overview</h1>
    <!--Button for cathegories-->
    <hr />
    <div class="container">
      <input
        type="submit"
        value="Hemma"
        :style="cssProps"
        class="cathegorybutton"
        @click="goToList('Hemma')"
      />

      <input
        type="submit"
        value="Jobb"
        :style="cssProp"
        class="cathegorybutton"
        @click="goToList('Jobb')"
      />
      <input
        type="submit"
        :style="{
          background:
            'linear-gradient(249.63deg, #992DFF 22.39%, #0CDCEA 120.67%)'
        }"
        value="Personligt"
        class="cathegorybutton"
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
  span {
    display: flex;
    width: 43px;
    height: 19px;
    right: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #000;
    text-align: right;
  }
  .icon {
    display: flex;
    color: #000;
  }
  .importantcompletedactivies {
    position: absolute;
    font-size: 14px;
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
  .cathegorybutton {
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
  .importantcompletedbutton {
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
