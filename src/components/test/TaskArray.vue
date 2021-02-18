<template>
  <div>
    <section>
      <h2>task array test</h2>
      <!-- <p>Raw json: {{ this.$store.state.taskArray }}</p> -->
      <ul
        v-for="(taskObject, taskArrayNumber) in this.$store.state.taskArray"
        :key="taskArrayNumber"
      >
        <li>
          <p>
            {{ taskObject.title }} + c: {{ taskObject.completed }} + i:
            {{ taskObject.important }}
          </p>
          <button
            @click="
              $store.commit('completeTask', {
                taskId: taskObject.uuid
              })
            "
          >
            complete {{ taskObject.title }}
          </button>
          <button
            @click="
              $store.commit('emphasizeTask', {
                taskId: taskObject.uuid
              })
            "
          >
            imoprtant {{ taskObject.title }}
          </button>
        </li>
      </ul>
    </section>
    <form>
      <input v-model="title" />
      <button
        @click="
          $store.commit('addTask', {
            title: title,
            listId: listId
          })
        "
      >
        Add task
      </button>
    </form>
    <!-- {{ filteredTaskArray }} -->
    <ol>
      <li v-for="(task, arrayNumber) in filteredTaskArray" :key="arrayNumber">
        <p>{{ task.title }}</p>
      </li>
    </ol>
    {{ this.$store.state.testFind }}
  </div>
</template>

<script>
  export default {
    computed: {
      filteredTaskArray() {
        const taskArray = this.$store.state.taskArray
        const filterTaskArrayByListId = taskArray.filter(
          task => task.listId === this.listId
        )
        return filterTaskArrayByListId
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
