<template>
  <form>
    <input v-model="title" />
    <button
      @click="
        $store.commit('addTask', {
          title: title,
          listId: listId,
          color: '#123'
        })
      "
    >
      Add task
    </button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    props: {
      listId: String
    }
  }
</script>
