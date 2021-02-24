<template>
  <div class="theme-picker">
    <input
      type="button"
      class="buttonTheme ? ''"
      v-for="(theme, i) in themes"
      :key="i"
      :style="'background:' + theme"
      @click="setTheme(theme)"
    />
  </div>
</template>

<script>
export default {
  name: "theme-picker",
  props: ["themes"],
  /*funktionen skickar emit event till föräldrar component*/
  methods: {
    setTheme(theme) {
      this.$emit("setTheme", theme);
    },
  },
};
</script>

<style scoped>
.theme-picker {
  display: flex;
  justify-content: center;
  width: 125px;
  display: grid;
  margin: 15px auto;
  grid-template-columns: repeat(5, 25px);
  grid-gap: 30px;
}
.buttonTheme {
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 5px;
}

.buttonTheme:hover {
  opacity: 0.4;
  box-shadow: 0 0 0 2px #d0d0d0;
  cursor: pointer;
}
</style>
