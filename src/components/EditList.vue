<template>
  <div class="overlay">
    <input
      placeholder="List name"
      type="text"
      name=""
      id="OverlayInput"
      v-model="title"
    />
    <PreviewTheme :title="title" :theme="theme"> </PreviewTheme>
    <ThemePicker class="Selection" :themes="themes" @setTheme="setTheme">
    </ThemePicker>

    <button id="EditListbutton" @click="editList">
      Confirm
    </button>

    <p @click="closeOverlay">
      Cancel
    </p>
  </div>
</template>

<script>
  import ThemePicker from '@/components/ThemePicker.vue'
  import PreviewTheme from '@/components/PreviewTheme.vue'

  export default {
    props: ['listId'],
    components: {
      ThemePicker,
      PreviewTheme
    },
    data() {
      return {
        title: '',
        theme: '',
        themes: [
          `url(${require('@/assets/monstera.jpg')})`,
          `url(${require('@/assets/code1.jpg')})`,
          'linear-gradient(249.63deg, #992DFF 22.39%, #0CDCEA 120.67%);',
          'linear-gradient(213.5deg, #FF7800 3.1%, #FFC700 69.07%);',
          'linear-gradient(224.12deg, #4AB17C 26.4%, #87FA8B 89.94%);'
        ]
      }
    },
    methods: {
      closeOverlay() {
        this.$emit('closeOverlay')
      },
      setTheme(theme) {
        this.theme = theme
        console.log('setting theme to' + theme)
      },
      editList() {
        this.$store.commit('editList', {
          listId: this.listId,
          title: this.title,
          theme: this.theme
        })
        this.closeOverlay()
      }
    },

    created() {
      this.theme = this.$store.state.listObjects[this.listId].theme
      this.title = this.$store.state.listObjects[this.listId].title
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
    height: 450px;
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
</style>
