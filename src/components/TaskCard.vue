<template>
  <div>
    <EditTask
      :taskId="EditTaskId"
      v-if="editTaskOverlay"
      v-on:closeOverlay="editTaskOverlay = !editTaskOverlay"
    />
    <div
      class="TaskCard"
      v-for="(taskObject, taskObjectId, taskArrayNumber) in filteredTaskObjects"
      :key="taskArrayNumber"
      v-bind:style="{ borderLeftColor: taskObject.color }"
    >
      <button
        :class="taskObject.important ? 'filledStar' : 'emptyStar'"
        @click="
          $store.commit('emphasizeTask', {
            taskId: taskObjectId
          })
        "
      ></button>
      <p @click="OpenEditOverlay(taskObjectId)" class="TaskTitle">
        {{ taskObject.title }}
      </p>
      <button
        :class="taskObject.completed ? 'filledCircle' : 'emptyCircle'"
        @click="
          $store.commit('completeTask', {
            taskId: taskObjectId
          })
        "
      ></button>
    </div>
  </div>
</template>

<script>
  import EditTask from '@/components/EditTask'
  export default {
    components: {
      EditTask
    },
    data() {
      return {
        editTaskOverlay: false,
        EditTaskId: '',
        color: ''
      }
    },
    methods: {
      OpenEditOverlay(taskId) {
        this.editTaskOverlay = !this.editTaskOverlay
        this.EditTaskId = taskId
      }
    },
    computed: {
      filteredTaskObjects() {
        const filteredTaskObjects = Object.fromEntries(
          Object.entries(this.$store.state.taskObjects).filter(
            taskObject => taskObject[1].listId === this.listId
          )
        )

        return filteredTaskObjects
      }
    },
    props: {
      listId: String
    }
  }
</script>

<style scoped>
  .TaskCard {
    border-left-color: rgb(255, 165, 0);
    border-left-style: solid;
    border-left-width: 10px;
    display: flex;
    height: 100px;
    border-radius: 8px;
    background-color: #f0f0f0;
    margin-bottom: 15px;
  }
  @media (min-width: 990px) {
    .TaskCard {
      height: 50px;
    }
  }

  .emptyStar {
    align-self: center;
    margin-left: 12px;
    background: none;
    border: none;
    height: 25px;
    width: 25px;
    background-image: Url('~@/assets/Star.svg');
  }

  .filledStar {
    align-self: center;
    margin-left: 12px;
    background: none;
    border: none;
    height: 25px;
    width: 25px;
    background-image: Url('~@/assets/filledStar.svg');
  }

  .TaskTitle {
    color: black;
    font-weight: 300;
    align-self: center;
    margin: auto;
  }

  .emptyCircle {
    align-self: center;
    margin-right: 12px;
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    background-image: Url('~@/assets/Circle.svg');
  }

  .filledCircle {
    align-self: center;
    margin-right: 12px;
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    background-image: Url('~@/assets/filledCircle.svg');
  }
</style>
