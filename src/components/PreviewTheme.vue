<template>
  <div>
    <input
      class="themeOfthebutton"
      :style="'background:' + theme"
      type="button"
      :value="title"
    />
  </div>
</template>

<script>
  export default {
    props: ['theme', 'title']
  }
</script>

<style scoped>
  * {
    display: flex;
    justify-content: center;
  }

  h3 {
    display: flex;
    justify-content: center;
    color: black;
    font-size: 28px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .themeOfthebutton {
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
    margin-top: 32px;
    font-style: normal;
    font-size: 16px;
    font-weight: bold;
  }
</style>
