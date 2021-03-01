<template>
  <div class="preview-container">
    <input
      class="TaskCard"
      :style="'border-left-color:' + color"
      type="button"
      :value="title"
    />
  </div>
</template>

<script>
  export default {
    props: ['color', 'title'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .preview-container {
    width: 80%;
    border: none;
  }
  .TaskCard {
    border: 1px solid #e8e8e8;
    border-left: 10px solid orange;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    background-color: #f0f0f0;
    margin-top:32px;
    margin-bottom: 15px;
  }

  .TaskTitle {
    color: black;
    font-weight: 300;
    align-self: center;
    margin: auto;
  }
</style>
