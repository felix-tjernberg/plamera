<template>
  <div>
    <router-link
      class="ListCard"
      v-on:goToList="listname"
      v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
        .listObjects"
      :key="listArrayNumber"
      :to="listObject.url"
      :theme="listObject.theme"
    >
      {{ listObject.title }}
    </router-link>
  </div>
</template>

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
