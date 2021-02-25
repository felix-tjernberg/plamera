<template>
  <div class="overlay">
    <input
      placeholder="List name"
      type="text"
      name=""
      id="OverlayInput"
      v-model="title"
    />
    <PreviewColor :title="title" :color="color" />
    <h3>Pick a color</h3>
    <div id="colorPicker">
      <input type="color" v-model="color" />
    </div>

    <button id="EditListbutton" @click="editTask">
      Edit
    </button>

    <p @click="closeOverlay">
      Cancel
    </p>
  </div>
</template>

<script>
  import PreviewColor from '@/components/PreviewColor.vue'

  export default {
    props: ['taskId'],
    components: {
      PreviewColor
    },
    data() {
      return {
        title: '',
        color: '#ffa500'
      }
    },
    methods: {
      closeOverlay() {
        this.$emit('closeOverlay')
      },

      editTask() {
        this.$store.commit('editTask', {
          taskId: this.taskId,
          title: this.title,
          color: this.color
        })
        this.closeOverlay()
      }
    },

    created() {
      this.color = this.$store.state.taskObjects[this.taskId].color
      this.title = this.$store.state.taskObjects[this.taskId].title
    }
  }
</script>

<style>
  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;
    position: fixed;
    width: 380px;
    height: 525px;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    transform: translate(-50%, -50%);
    border-radius: 3%;
    box-shadow: 0px 0px 100px 2000px rgba(0, 0, 0, 0.5);
  }
  #OverlayInput {
    margin-top: 45px;
    margin-bottom: 10px;
    width: 343px;
  }

  #EditListbutton {
    width: 350px;
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
</style>
