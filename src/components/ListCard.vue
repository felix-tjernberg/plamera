<template>
  <div>
    <EditList
      :listId="EditListId"
      v-if="Overlay"
      v-on:closeOverlay="Overlay = !Overlay"
    />
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
</template>

<script>
  import EditList from '@/components/EditList'
  export default {
    components: {
      EditList
    },
    data() {
      return {
        Overlay: false,
        EditListId: ''
      }
    },
    methods: {
      OpenEditOverlay(listId) {
        this.Overlay = !this.Overlay
        this.EditListId = listId
      }
    }
  }
</script>

<style scoped>
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
