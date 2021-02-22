<template>
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
</template>

<script>
  export default {
    props: {
      listId: String
    }
  }
</script>
