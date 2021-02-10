<template>
  <div class="about">
    <div>
      <button @click="$store.commit('initArray')">
        I initialize someArray with 1,2,3
      </button>
    </div>
    <div>
      <input v-model="testNumber" />
      <button @click="$store.commit('addNumber', testNumber)">
        Add number to left into someArray
      </button>
    </div>
    <div>This is someArray: {{ this.$store.state.someArray }}</div>
    <div>
      <button @click="$store.commit('resetStorage')">
        Reset local storage
      </button>
    </div>
  </div>
</template>

<style scoped>
* + * {
  margin-top: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      testNumber: 0,
    };
  },
};
</script>
