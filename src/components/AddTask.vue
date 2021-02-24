<template>
  <div class="Container">
    <form id="overlay">
      <input
        placeholder="List name"
        type="text"
        name=""
        id="OverlayInput"
        v-model="title"
      />
  
      <h3>Pick a color</h3>
      <div id="colorPicker">
        <input type="color" v-model="color" />
      </div>

      <button @click="addTask()" class="addtaskbutton" id="save">
        Add List
      </button>
      <p id="close" v-on:click="openAddTask">Cancel</p>
    </form>
  </div>
</template>
<script>

  export default {
    name: 'AddTask',

    data() {
      return {
        title: '',
        color: ''
      }
    },
    methods: {
      addTask() {
        this.$store.commit('addTask', {
          title: this.title,
          listId: this.listId,
          color: this.color // Change to dynamic color picker value
        })
        this.openAddTask()
      },
      openAddTask() {
        this.$emit('openAddTaskOverlay')
      },

    },
    props: {
      listId: String
    }
  }
</script>
<style scoped>
  #overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;
    position: fixed;
    width: 90vw;
    border-radius: 8px;
    box-shadow: 0px 0px 100px 1000px rgba(0, 0, 0, 0.5);
  }

  input[type='color'] {
    border: 0;
    padding: 0;
    width: 200%;
    height: 200%;
    cursor: pointer;
    transform: translate(-25%, -25%);
  }

  #colorPicker {
    width: 60px;
    height: 60px;
    margin-bottom: 50px;
    border-radius: 50px;
    overflow: hidden;
    border: 2px solid grey;

  }

  #OverlayInput {
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 80vw;
  }

  .addtaskbutton {
    width: 80vw;
    margin: 8px 0;
    background-color: #5db075;
    padding: 16px 32px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
</style>
