<template>
  <div>
    {{ this.$route.params.listName }}
    <button @click="$store.commit('resetStorage')">clear lists</button>
    <h1>Testing Area</h1>
    <section>
      <h2>list array</h2>
      <p>Raw json: {{ this.$store.state.listArray }}</p>
      <p
        v-for="(listObject, listArrayNumber) in this.$store.state.listArray"
        :key="listArrayNumber"
      >
        {{ listObject.title }}
      </p>
    </section>
    <form>
      <input v-model="listName" />
      <button @click="$store.commit('addList', listName)">Add list</button>
    </form>
    <task-array :listId="this.$route.params.listId" />
    <test-add-task :listId="this.$route.params.listId" />
  </div>
</template>

<script>
  import TaskArray from '@/components/test/TaskArray.vue'
  import TestAddTask from '@/components/test/TestAddTask.vue'

  export default {
    // computed: {
    //   listArray: function (){
    //     return this.listArray = this.$store.store.listArray
    //   },
    // },
    created() {
      /*       // filter taskArray based on listId
      const taskArray = this.$store.state.taskArray
      const taskArrayBasedOnListId = taskArray.filter(
        task => task.listId === '838648b4-8fc1-4c26-a46d-2c96794dab8d'
      )
      console.log(taskArrayBasedOnListId) */
    },
    data() {
      return {
        listName: '',
        taskTitle: ''
      }
    },
    components: {
      TaskArray,
      TestAddTask
    },
    methods: {}
  }
</script>
