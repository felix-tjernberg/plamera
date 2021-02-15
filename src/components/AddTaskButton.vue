<template>
  <button class="addTaskButton" v-on:click="openAddTask"></button>
</template>

<script>
export default {
  methods: {
    openAddTask() {
      this.$emit("openAddTaskOverlay");
    },
  },
};
</script>

<style scoped>
.addTaskButton {
  background-image: Url("~@/assets/Plus.svg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  border-radius: 30px;
  background-color: #5db075;
  border: none;
  height: 58px;
  width: 58px;
}
</style>
