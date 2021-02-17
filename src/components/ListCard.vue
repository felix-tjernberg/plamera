<template>
  <div>
    <router-link
      class="ListCard"
      v-on:goToList="listname"
      v-for="data in this.$store.state.someArray"
      :key="data"
      :to="'/list/' + data"
      :theme="'/list/' + Theme"
      >{{ data }}</router-link
    >
  </div>
</template>

<script>
  export default {
    props: ['Name', 'Url', 'Theme'],
    methods: {
      goToList(listName) {
        this.$router.push('/list/' + listName)
      }
    }
  }
</script>

<style scoped>
  .ListCard {
    display: flex;
    height: 100px;
    border-radius: 8px;
    background-color: #5db075;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 20px;
    text-decoration: none;
  }
</style>
