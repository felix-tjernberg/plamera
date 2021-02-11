<template>
  <div class="AddTask">
    <div></div>
    <div id="list">
      {{ typed }}
      <input type="button" id="add" v-on:click="on = !on" />
    </div>
    <form v-if="!on" id="overlay" @submit="onSubmit">
      <button v-on:click="on = !on">X</button>
      <input type="text" name="" id="ListTxt" v-model="info" />
      <input type="submit" value="Save" id="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTask",
  data() {
    return {
      on: true,
      info: "",
      typed: "",
    };
  },
  mounted() {
    if (localStorage.typed) {
      this.typed = localStorage.typed;
    }
  },
  methods: {
    onSubmit() {
      console.log(this.info);
      this.typed = this.info;
      localStorage.typed = this.typed;
    },
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
  margin-left: 25vw;
}
#overlay {
  background-color: beige;
  position: absolute;
  width: 40vw;
  height: 60vh;
  margin-left: 30vw;
  margin-top: 20vh;
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
