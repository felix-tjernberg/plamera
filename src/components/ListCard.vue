<template>
  <div>
    <button id="DesktopButton" @click="addListOverlay = !addListOverlay">
      Create List
    </button>
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
    <div v-if="mobile">
      <PlusButton
        id="Button"
        @openOverlay="addListOverlay = !addListOverlay"
      ></PlusButton>
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
      <add-task
        v-if="addTaskOverlay"
        @closeOverlay="closeAddTaskOverlay"
        :listId="AddTaskListId"
      />

      <div class="desktop-list-card-container">
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
    </div>
    <!--MOBILE-->
    <div class="Mobile">
      <router-link
        class="ListCard"
        v-on:goToList="listname"
        v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
          .listObjects"
        :key="listArrayNumber"
        :to="listObject.url"
        :style="'background:' + listObject.theme"
      >
        {{ listObject.title }}
      </router-link>
    </div>
    <!--MOBILE-->
    <!--DESKTOP-->
    <div class="Desktop">
      <div
        class="ListCardDesktop"
        v-for="(listObject, listObjectId, listArrayNumber) in this.$store.state
          .listObjects"
        :key="listArrayNumber"
        :to="listObject.url"
        :style="'background:' + listObject.theme"
      >
        <p id="ObjectTxt">{{ listObject.title }}</p>
        <TaskCard></TaskCard>
        <AddTask
          v-if="taskOverlay"
          v-on:openAddTaskOverlay="taskOverlay = !taskOverlay"
        />
        <AddTaskButton v-on:openAddTaskOverlay="taskOverlay = !taskOverlay" />
      </div>
    </div>
    <!--DESKTOP-->
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
  @media only screen and (min-device-width: 1000px) {
    #DesktopButton {
      border-radius: 30px;
      background-color: #5db075;
      border: none;
      height: 58px;
      width: 200px;
      font-size: 18px;
      color: white;
      float: left;
      margin-top: -50px;
    }
  }
</style>
