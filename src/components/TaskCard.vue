<template>
  <div>
    <!-- 
          #5D5FEF  - Purple
          #F2994A  - Orange
          #6FCF97  - Green
          #F178B6  - Pink



          <span class="rating" v-if="result.vote_average >= 7" style="color: #2B7D7D">Rating: {{
            result.vote_average
          }}</span>
          <span class="rating" v-else style="color:2B607D">Rating: {{ result.vote_average }}</span>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      -->
    <div
      class="TaskCard"
      :style="{ border: color }"
      v-for="data in this.$store.state.someString"
      :key="data"
    >
      <button
        :class="important ? 'filledStar' : 'emptyStar'"
        @click="addToImportant"
      ></button>
      <p class="TaskTitle">
        {{ data }}
      </p>
      <button
        :class="completed ? 'filledCircle' : 'emptyCircle'"
        @click="addToCompleted"
      ></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        taskTitle: 'planera sprintmöte',
        important: false,
        completed: false,
        color: 'blue',
      }
    },
    methods: {
      addToImportant() {
        this.important = !this.important
        //commit id + boolean
      },
      addToCompleted() {
        this.completed = !this.completed
      }
    }
  }
</script>

<style scoped>
  .TaskCard {
    border-left: 10px solid;
    display: flex;
    height: 100px;
    border-radius: 8px;
    background-color: #f0f0f0;
    margin-bottom: 15px;
  }

  .emptyStar {
    align-self: center;
    margin-left: 12px;
    background: none;
    border: none;
    height: 25px;
    width: 25px;
    background-image: Url('~@/assets/Star.svg');
  }

  .filledStar {
    align-self: center;
    margin-left: 12px;
    background: none;
    border: none;
    height: 25px;
    width: 25px;
    background-image: Url('~@/assets/filledStar.svg');
  }

  .TaskTitle {
    color: black;
    font-weight: 300;

    align-self: center;
    margin: auto;
  }

  .emptyCircle {
    align-self: center;
    margin-right: 12px;
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    background-image: Url('~@/assets/Circle.svg');
  }

  .filledCircle {
    align-self: center;
    margin-right: 12px;
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    background-image: Url('~@/assets/filledCircle.svg');
  }
</style>
