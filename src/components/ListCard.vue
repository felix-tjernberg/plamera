<template>
  <div>
    <EditList
      :listId="EditListId"
      v-if="editListOverlay"
      v-on:closeOverlay="editListOverlay = !editListOverlay"
    />
    <div v-if="mobile">
      <div
        class="ListCard"
        v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
          .listObjects"
        :key="listArrayNumber"
        :style="'background:' + listObject.theme"
      >
        <button
          @click="OpenEditOverlay(listObjectId)"
          class="Editlistcard"
        ></button>
        <router-link class="testp" :to="listObject.url">
          <p>{{ listObject.title }}</p>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="desktop-list-card-container">
        <div
          v-for="(listObject, listObjectId, listArrayNumber) in this.$store
            .state.listObjects"
          :key="listArrayNumber"
          :style="'background:' + listObject.theme"
        >
          <h2>{{ listObject.title }}</h2>
          <button
            @click="OpenEditOverlay(listObjectId)"
            class="Editlistcard"
          ></button>
          <task-card :listId="listObjectId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EditList from '@/components/EditList'
  import TaskCard from '@/components/TaskCard'
  export default {
    components: {
      EditList,
      TaskCard
    },
    data() {
      return {
        editListOverlay: false,
        EditListId: '',
        mobile: true
      }
    },
    methods: {
      OpenEditOverlay(listId) {
        this.editListOverlay = !this.editListOverlay
        this.EditListId = listId
      }
    }
  }
</script>

<style scoped>
  .desktop-list-card-container {
    margin: 100px;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    gap: 100px;
  }
  .desktop-list-card-container h2 {
    color: white;
  }
  .ListCard {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    border-radius: 8px;
    background-color: #5db075;
    color: white;
    margin-bottom: 20px;
    text-decoration: none;
  }

  .Editlistcard {
    background: none;
    border: none;
    height: 20px;
    width: 20px;
    margin-left: 10px;
    background-image: Url('~@/assets/Edit.svg');
  }

  .testp {
    justify-self: center;
    align-self: center;
    margin: auto;
    color: white;
  }
</style>
