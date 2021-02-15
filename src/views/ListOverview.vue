<template>
  <div>
    <hr />
    <div id="list">
      <p id="NewList"><strong>New List</strong></p>
      <ul>
        <li v-for="data in this.$store.state.someArray" :key="data">
          {{ data }}
        </li>
      </ul>
    </div>
    <AddTask
      v-if="taskOverlay"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
    ></AddTask>
    <AddTaskButton
      id="Button"
      v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
    ></AddTaskButton>
  </div>
</template>
<script>
import AddTaskButton from "@/components/AddTaskButton.vue";
import AddTask from "@/components/AddTask.vue";
export default {
  name: "ListOverview",
  components: {
    AddTaskButton,
    AddTask,
  },
  data() {
    return {
      taskOverlay: false,
    };
  },
};
</script>
<style>
#Button {
  margin-top: 40vh;
  margin-left: 70vw;
}
</style>
