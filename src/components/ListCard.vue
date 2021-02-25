<template>
  <div>
    <!--MOBILE-->
    <div class="Mobile">
      <router-link
        class="ListCard"
        v-on:goToList="listname"
        v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
          .listObjects"
        :key="listArrayNumber"
        :to="listObject.url"
        :style="'background:' + listObject.theme"
      >
        {{ listObject.title }}
      </router-link>
    </div>
    <!--MOBILE-->
    <!--DESKTOP-->
    <div class="Desktop">
      <div
        class="ListCardDesktop"
        v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
          .listObjects"
        :key="listArrayNumber"
        :to="listObject.url"
        :style="'background:' + listObject.theme"
      >
        <p id="ObjectTxt">{{ listObject.title }}</p>
        <TaskCard></TaskCard>
        <AddTask
          v-if="taskOverlay"
          v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
        />
        <AddTaskButton v-on:openAddTaskOverlay="taskOverlay = !taskOverlay" />
      </div>
    </div>
    <!--DESKTOP-->
  </div>
</template>

<script>
  import AddTask from '@/components/AddTask.vue'
  import TaskCard from '@/components/TaskCard.vue'
  import AddTaskButton from '@/components/AddTaskButton'
  export default {
    components: {
      TaskCard,
      AddTask,
      AddTaskButton
    }
  }
</script>

<style scoped>
  .Desktop {
    display: none;
  }
  .ListCard {
    display: flex;
    height: 100px;
    border-radius: 8px;
    background-color: #5db075;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 20px;
    text-decoration: none;
  }
  @media only screen and (min-device-width: 1000px) {
    .Mobile {
      display: none;
    }
    .Desktop {
      display: block;
    }
    .ListCardDesktop {
      display: flex;
      display: grid;
      height: 530px;
      width: 320px;
      border-radius: 8px;
      background-color: #5db075;
      align-items: top;
      justify-content: top;
      color: white;
      margin-bottom: 20px;
      text-decoration: none;
    }
    #ObjectTxt {
      margin-left: 20px;
      color: white;
      font-weight: 600;
      font-size: 18px;
    }
  }
</style>
