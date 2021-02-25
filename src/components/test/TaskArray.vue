<template>
  <div>
    <section>
      <h2>task objects</h2>
      <!-- <p style="font-size: 8px">
        Raw json: {{ this.$store.state.taskObjects }}
      </p> -->
      <!--<ul>
        <li
          v-for="(taskObject, taskObjectId, taskArrayNumber) in this.$store
            .state.taskObjects"
          :key="taskArrayNumber"
        >
          <p>
            {{ taskObject.title }} / c: {{ taskObject.completed }} i:
            {{ taskObject.important }}
          </p>
          <p style="font-size: 9px;">
            raw json for key: {{ taskObjectId }} + {{ taskObject }}
          </p>
          <button
            @click="
              $store.commit('completeTask', {
                taskId: taskObjectId
              })
            "
          >
            complete {{ taskObject.title }}
          </button>
          <button
            @click="
              $store.commit('emphasizeTask', {
                taskId: taskObjectId
              })
            "
          >
            imoprtant {{ taskObject.title }}
          </button>
          <button
            @click="
              $store.commit('removeTask', {
                taskId: taskObjectId
              })
            "
          >
            Remove {{ taskObject.title }}
          </button>
          <button
            @click="
              $store.commit('editTask', {
                taskId: taskObjectId,
                title: 'IwasChanged',
                color: '#FFF'
              })
            "
          >
            Edit {{ taskObject.title }}
          </button>
        </li>
      </ul>-->
    </section>
    <ol>
      <h3>imporntant</h3>
      <li
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.important"
        :key="taskObjectId"
      >
        <p>
          {{ taskObject.title }} / c: {{ taskObject.completed }} i:
          {{ taskObject.important }}
        </p>
        <!-- <p style="font-size: 9px">List id: {{ taskObject.listId }}</p> -->
        <!-- <p style="font-size: 9px">Task id: {{ taskObjectId }}</p> -->
        <button
          @click="
            $store.commit('completeTask', {
              taskId: taskObjectId
            })
          "
        >
          complete {{ taskObject.title }}
        </button>
        <button
          @click="
            $store.commit('emphasizeTask', {
              taskId: taskObjectId
            })
          "
        >
          imoprtant {{ taskObject.title }}
        </button>
      </li>
      <h3>all</h3>
      <li
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.rest"
        :key="taskObjectId"
      >
        <p>
          {{ taskObject.title }} / c: {{ taskObject.completed }} i:
          {{ taskObject.important }}
        </p>
        <!-- <p style="font-size: 9px">List id: {{ taskObject.listId }}</p> -->
        <!-- <p style="font-size: 9px">Task id: {{ taskObjectId }}</p> -->
        <button
          @click="
            $store.commit('completeTask', {
              taskId: taskObjectId
            })
          "
        >
          complete {{ taskObject.title }}
        </button>
        <button
          @click="
            $store.commit('emphasizeTask', {
              taskId: taskObjectId
            })
          "
        >
          imoprtant {{ taskObject.title }}
        </button>
      </li>
      <h3>completed</h3>
      <li
        v-for="(taskObject, taskObjectId) in filteredTaskObjects.completed"
        :key="taskObjectId"
      >
        <p>
          {{ taskObject.title }} / c: {{ taskObject.completed }} i:
          {{ taskObject.important }}
        </p>
        <!-- <p style="font-size: 9px">List id: {{ taskObject.listId }}</p> -->
        <!-- <p style="font-size: 9px">Task id: {{ taskObjectId }}</p> -->
        <button
          @click="
            $store.commit('completeTask', {
              taskId: taskObjectId
            })
          "
        >
          complete {{ taskObject.title }}
        </button>
        <button
          @click="
            $store.commit('emphasizeTask', {
              taskId: taskObjectId
            })
          "
        >
          imoprtant {{ taskObject.title }}
        </button>
      </li>
    </ol>
    <!-- <p style="font-size: 9px">{{ filteredTaskObjects }}</p> -->
  </div>
</template>

<script>
  export default {
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
      }
    },
    data() {
      return {
        title: ''
      }
    },
    components: {},
    methods: {},
    props: {
      listId: String
    }
  }
</script>
