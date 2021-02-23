<template>
  <div class="AddTask">
    <form id="overlay">
      <input placeholder="List name" type="text" id="ListTxt" v-model="title" />
      <button
        v-on:click="openAddTask"
        class="addlistbutton"
        @click="
          $store.commit('addList', {
            title: title,
            theme: theme // Change to dynamic theme picker value
          })
        "
        id="save"
      >
        Add List
      </button>
      <p id="close" v-on:click="openAddTask">Cancel</p>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        theme: '#000'
      }
    },
    methods: {
      openAddTask() {
        this.$emit('openAddTaskOverlay')
      }
    }
  }
</script>
<style scoped>
  #MyList {
    text-align: left;
    margin-top: -0.2vh;
    font-weight: bold;
    font-size: 24px;
  }
  #NewList {
    background-image: url('~@/assets/Plus-Icon.png');
    background-repeat: no-repeat;
    background-position-x: 54vw;
    background-position-y: 1.7vh;
    padding: 14px;
    height: 6vh;
    background-size: 4vh;
    text-align: center;
    margin-top: -2vh;
    font-size: 24px;
    margin-left: -53vw;
    padding-right: 23px;
    color: #5db075;
  }
  #overlay {
    background-color: #ffff;
    position: fixed;
    width: 90vw;
    height: 42vh;
    margin-left: 0vw;
    margin-top: -20vh;
    border-radius: 3%;
    box-shadow: 0px 0px 100px 1000px rgba(0, 0, 0, 0.5);
  }
  #ListTxt {
    margin-top: 5vh;
    width: 80vw;
  }

  #save {
    margin-top: 10vh;
    width: 80vw;
    height: 7vh;
  }
  #list {
    position: absolute;
    width: 98vw;
    height: 60vh;

    background-color: rgb(255, 255, 255);
  }
  .addlistbutton {
    background-color: #5db075;
    color: #fff;
    padding: 16px 32px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
</style>
