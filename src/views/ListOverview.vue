<template>
  <div>
    <div id="list">
      <p id="MyList">My list</p>
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
.Mytasks {
  position: absolute;
}
#header {
  text-align: center;
}
textarea:focus,
input:focus {
  outline: none;
}
#SearchBar {
  border-radius: 30px;
  width: 90vw;
  height: 7vh;
  background-color: #e8e8e8;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#back {
  text-decoration: none;
  color: #5db075;
  font-weight: bold;
  position: absolute;
  margin-left: -25vh;
  margin-top: 1vh;
  font-size: 22px;
}
#important {
  background-image: url("~@/assets/Star-Icon.png");
  background-repeat: no-repeat;
  background-position-x: 58vw;
  background-position-y: 1.3vh;
  background-size: 40vh;
  padding: 14px;
  height: 6vh;
  background-size: 4vh;
  text-align: center;
  margin-top: 3vh;
  font-size: 16px;
  margin-left: -58vw;
  padding-right: 23px;
}
#completed {
  background-image: url("~@/assets/Task-Completed-Icon.png");
  background-repeat: no-repeat;
  background-position-x: 58vw;
  background-position-y: 1.3vh;
  background-size: 40vh;
  padding: 2.1vh;
  height: 6vh;
  background-size: 4vh;
  text-align: center;
  margin-top: -6vh;
  font-size: 16px;
  margin-left: -58vw;
  padding-right: 23px;
}
</style>
