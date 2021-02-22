<template>
  <div>
    <section>
      <h2>task array test</h2>
      <!-- <p>Raw json: {{ this.$store.state.taskArray }}</p> -->
      <ul>
        <!-- istället för taskArrayNumber så blir det taskId istället -->
        <li
          v-for="(taskObject, taskArrayNumber) in this.$store.state.taskArray"
          :key="taskArrayNumber"
        >
          <p>
            {{ taskObject.title }} / c: {{ taskObject.completed }} i:
            {{ taskObject.important }}
          </p>
          <p style="font-size: 9px;">raw json: {{ taskObject }}</p>
          <button
            @click="
              /*doSomet(taskObject.uuid, color,)*/
              $store.commit('editTask', {
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
    <ol>
      <li
        v-for="(taskObject, arrayNumber) in filteredTaskArray"
        :key="arrayNumber"
      >
        <p>{{ taskObject.title }}</p>
      </li>
    </ol>
    <!-- {{ filteredTaskArray }} -->
  </div>
</template>

<script>
  export default {
    computed: {
      filteredTaskArray() {
        const taskArray = this.$store.state.taskArray // Detta ska konverteras från ett object till array så att vi kan använda filter
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
