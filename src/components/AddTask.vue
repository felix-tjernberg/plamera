<template>
  <div class="AddTask">
    <div></div>
    <div id="list">
      <ul style="position: absolute">
        {{
          this.$store.state.someArray
        }}
      </ul>
      <input type="button" id="add" v-on:click="on = !on" />
    </div>
    <form v-if="!on" id="overlay">
      <button v-on:click="on = !on">X</button>
      <input type="text" name="" id="ListTxt" v-model="info" />
      <button @click="$store.commit('addString', info)">
        Add
      </button>
      <button @click="$store.commit('resetStorage')">Reset</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTask",
  data() {
    return {
      data: null,
      on: true,
      info: "",
      typed: "",
    };
  },
};
</script>
<style scoped>
@media screen {
}
#add {
  width: 3vw;
  height: 6vh;
  background-image: url("~@/assets/AddTaskButton.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-top: 50vh;
  margin-left: 15vw;
  position: absolute;
}
#overlay {
  background-color: beige;
  position: absolute;
  width: 30vw;
  height: 40vh;
  margin-left: 35vw;
  margin-top: 30vh;
  border-radius: 10%;
}
#ListTxt {
  position: absolute;
  margin-top: 30vh;
  margin-left: -10vh;
}
#Submit {
  position: absolute;
  margin-top: 30vh;
  margin-left: -15.5vh;
}
#list {
  position: absolute;
  width: 40vw;
  height: 60vh;
  margin-left: 30vw;
  margin-top: 20vh;
  background-color: rgb(224, 224, 224);
}
</style>
