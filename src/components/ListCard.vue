<template>
  <div>
    <AddList
      v-if="addListOverlay"
      @closeOverlay="addListOverlay = !addListOverlay"
      id="addListOverlay"
    ></AddList>
    <EditList
      :listId="EditListId"
      v-if="editListOverlay"
      @closeOverlay="editListOverlay = !editListOverlay"
    />
    <div class="Listoverlay" v-if="mobile">
      <PlusButton
        id="Button"
        @openOverlay="addListOverlay = !addListOverlay"
      ></PlusButton>
      <div v-if="ListExist">
        <div
          class="ListCard"
          v-for="(listObject, listObjectId, listArrayNumber) in this.$store
            .state.listObjects"
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
        <p class="listp">
          No Lists added yet
        </p>
      </div>
    </div>
    <div v-else>
      <add-task
        v-if="addTaskOverlay"
        @closeOverlay="closeAddTaskOverlay"
        :listId="AddTaskListId"
      />

      <div v-if="ListExist" class="desktop-list-card-container">
        <div
          class="desktop-list-card"
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
          <plus-button @openOverlay="OpenAddTaskOverlay(listObjectId)" />
        </div>
      </div>
      <div v-else>
        <div class="image-container">
          <p class="listp">
            No Lists added yet
          </p>
          <img class="EmptyListimage" src="@/assets/EmptyLists.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddList from '@/components/AddList.vue'
  import AddTask from '@/components/AddTask'
  import EditList from '@/components/EditList'
  import PlusButton from '@/components/PlusButton'
  import TaskCard from '@/components/TaskCard'
  export default {
    created() {
      this.mobile = window.innerWidth < 990
    },
    components: {
      AddList,
      AddTask,
      EditList,
      TaskCard,
      PlusButton
    },
    data() {
      return {
        addTaskOverlay: false,
        AddTaskListId: '',
        addListOverlay: false,
        editListOverlay: false,
        EditListId: '',
        mobile: true
      }
    },
    methods: {
      OpenEditOverlay(listId) {
        this.editListOverlay = !this.editListOverlay
        this.EditListId = listId
      },
      OpenAddTaskOverlay(listId) {
        this.addTaskOverlay = !this.addTaskOverlay
        this.AddTaskListId = listId
      },
      closeAddTaskOverlay() {
        this.addTaskOverlay = !this.addTaskOverlay
      },
      onResize() {
        this.mobile = window.innerWidth < 990
      }
    },
    mounted() {
      window.onresize = this.onResize
    },
    computed: {
      ListExist() {
        return Boolean(Object.keys(this.$store.state.listObjects).length)
      }
    }
  }
</script>

<style scoped>
  .desktop-list-card-container {
    --margin-desktop: 100px;
    margin: var(--margin-desktop);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--margin-desktop);
    margin-left: 256px;
  }
  .desktop-list-card-container h2 {
    color: white;
  }
  /* Had to throw important on cover, as "repeat scroll 0% 0%" gets applied in style attribute (I suspect it's webpack applying that statement) */
  .desktop-list-card {
    background-size: cover !important;
    border-radius: var(--border-radius-base);
    padding: 32px;
    align-self: start; /* choose center or start */
  }
  .ListCard {
    background-size: cover !important;
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin: 6px;
    background-image: Url('~@/assets/Edit.svg');
  }
  #DesktopButton {
    display: none;
  }

  .listp {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 200px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #787885;
  
  }

  .testp, p{
    font-size: 1em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    width: 100%;
    height: 100%;
  }


  @media only screen and (min-device-width: 1000px) {
    .listp {
      display: block;
      font-size: 16px;
      font-style: normal;
      height: inherit;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;
      color: #787885;
      margin-top: 250px;
    }
    .EmptyListimage {
      height: 250px;
      width: 250px;
    }

    .image-container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
