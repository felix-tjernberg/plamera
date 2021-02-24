<template>
  <div>
    <div
      class="TaskCard"
      :style="'border-left-color:'+color" 
      
    >
     
    </div>
  </div>
</template>

<script>
  export default {
      props:['color'],
    data() {
      return {
        
      }
    },
    methods: {
    
    }
  }
</script>

<style scoped>
  .TaskCard {
    border-left: 10px solid orange;
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
