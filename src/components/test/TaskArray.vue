<template>
  <div>
    <section>
      <h2>task objects</h2>
      <!-- <p style="font-size: 8px">
        Raw json: {{ this.$store.state.taskObjects }}
      </p> -->
      <ul>
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
        </li>
      </ul>
    </section>
    <ol>
      <li
        v-for="(taskObject, taskObjectId, arrayNumber) in filteredTaskObjects"
        :key="arrayNumber"
      >
        <p>Task title: {{ taskObject.title }}</p>
        <!-- <p>Task title: {{ taskObject[1].title }}</p> -->
        <p style="font-size: 9px">List id: {{ taskObject.listId }}</p>
        <!-- <p style="font-size: 9px">List id: {{ taskObject[1].listId }}</p> -->
        <p style="font-size: 9px">Task id: {{ taskObjectId }}</p>
        <!-- <p style="font-size: 9px">Task id: {{ taskObject[0] }}</p> -->
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
        // const taskObjectsEntries = Object.entries(this.$store.state.taskObjects)
        // const filteredTaskObjectsArray = taskObjectsEntries.filter(
        //   taskObject => taskObject[1].important === true
        // )
        // const filteredTaskObjects = Object.fromEntries(filteredTaskObjectsArray)

        const filteredTaskObjects = Object.fromEntries(
          Object.entries(this.$store.state.taskObjects).filter(
            taskObject => taskObject[1].important === true
          )
        )

        return filteredTaskObjects
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
