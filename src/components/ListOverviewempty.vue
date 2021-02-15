<template>
  <div id="app">
    <button class="btn-back" @click="
          goToListOverview()">Back</button>
    <h1>Jobb</h1>
    <p>No Tasks added yet</p>
    <button class="btn">+</button>
  </div>
</template>

<script>
  export default {
    methods:{
        goToListOverview(){
        this.$router.push('/listoverview')
      }
    }
  }
</script>

<style>
  .btn {
    position: absolute;
    right: 0;
    bottom: 0;
    margin:15px;
    height: 48px;
    width: 48px;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    background-color: #5db075;
    color: #fff;
    text-align: center;
    cursor: pointer;
    padding: none;
    border: none;
  }


  p {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 400px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #787885;
    margin: 30px;
  }
</style>
