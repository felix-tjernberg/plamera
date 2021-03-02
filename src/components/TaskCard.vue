<template>
  <div>
    <EditTask
      :taskId="EditTaskId"
      v-if="editTaskOverlay"
      v-on:closeOverlay="editTaskOverlay = !editTaskOverlay"
    />
    <div v-if="TaskExist">
      <h3>Important</h3>
      <div
        class="TaskCard"
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.important"
        :key="taskObjectId"
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
      <h3>Rest</h3>
      <!--this needs a better heading-->
      <div
        class="TaskCard"
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.rest"
        :key="taskObjectId"
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
      <h3>Completed</h3>
      <div
        class="TaskCard"
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.completed"
        :key="taskObjectId"
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
        <p
          @click="OpenEditOverlay(taskObjectId)"
          class="TaskTitle"
          :data-completed="taskObject.completed"
        >
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
    <div v-else>
      <p class="tasksp">
        No Tasks added yet
      </p>
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
        const filterTaskObjectsByListId = Object.fromEntries(
          Object.entries(this.$store.state.taskObjects).filter(
            taskObject => taskObject[1].listId === this.listId
          )
        )
        const filterTaskObjectsByImportant = Object.fromEntries(
          Object.entries(filterTaskObjectsByListId).filter(
            taskObject =>
              taskObject[1].important === true &&
              taskObject[1].completed === false
          )
        )
        const filterTaskObjectsByCompleted = Object.fromEntries(
          Object.entries(filterTaskObjectsByListId).filter(
            taskObject => taskObject[1].completed === true
          )
        )
        const filterTaskObjectsByFalse = Object.fromEntries(
          Object.entries(filterTaskObjectsByListId).filter(
            taskObject =>
              taskObject[1].important === false &&
              taskObject[1].completed === false
          )
        )

        return {
          all: filterTaskObjectsByListId,
          important: filterTaskObjectsByImportant,
          completed: filterTaskObjectsByCompleted,
          rest: filterTaskObjectsByFalse
        }
      },
      TaskExist() {
        return Boolean(Object.keys(this.filteredTaskObjects.all).length)
      }
    },
    props: {
      listId: String
    }
  }
</script>

<style scoped>
  h3 {
    color: white;
  }
  @media (max-width: 990px) {
    h3 {
      color: black;
    }
  }
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

  .tasksp {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 400px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #787885;
    margin: 30px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 300;
    width: 80%;
    margin: auto;
    height: 100%;
  }
  [data-completed='true'] {
    text-decoration: line-through;
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
