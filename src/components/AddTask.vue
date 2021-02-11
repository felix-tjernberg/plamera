<template>
  <div class="AddTask">
    <div id="list">
      <p id="MyList">My list</p>
      <p id="NewList"><strong>New List</strong></p>
      <ul>
        <li v-for="data in this.$store.state.someArray" :key="data">
          {{ data }}
        </li>
      </ul>
      <input type="button" id="add" v-on:click="on = !on" />
    </div>
    <form v-if="!on" id="overlay">
      <input
        placeholder="List name"
        type="text"
        name=""
        id="ListTxt"
        v-model="info"
      />
      <p id="close" v-on:click="on = !on">Cancel</p>
      <button id="save" @click="$store.commit('addString', info)">
        Add List
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
#MyList {
  text-align: left;
  margin-top: -0.2vh;
  font-weight: bold;
  font-size: 24px;
}
#NewList {
  background-image: url("~@/assets/Plus-Icon.png");
  background-repeat: no-repeat;
  background-position-x: 54vw;
  background-position-y: 1.7vh;
  padding: 14px;
  height: 6vh;
  background-size: 4vh;
  text-align: center;
  margin-top: -2vh;
  font-size: 24px;
  margin-left: -53vw;
  padding-right: 23px;
  color: #5db075;
}
#add {
  width: 20vw;
  height: 10vh;
  background-image: url("~@/assets/AddTaskButton.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-top: 25vh;
  margin-left: 20vw;
  position: absolute;
}
#overlay {
  background-color: #ffff;
  position: absolute;
  width: 90vw;
  height: 60vh;
  margin-left: 3vw;
  margin-top: -20vh;
  border-radius: 3%;
  box-shadow: 0px 0px 100px 1000px rgba(0, 0, 0, 0.5);
}
#ListTxt {
  position: absolute;
  margin-top: 10vh;
  margin-left: -9vh;
  height: 6vh;
  border-radius: 10px;
  background-color: #e8e8e8;
  color: #bdbdbd;
}

#close {
  position: absolute;
  margin-top: 50vh;
  text-align: center;
  margin-left: 40vw;
  color: #5db075;
}
#save {
  position: absolute;
  margin-top: 40vh;
  width: 80vw;
  height: 7vh;
  margin-left: -18vh;
  border-radius: 40px;
  font-weight: bold;
  color: white;
  background-color: #5db075;
}
#list {
  position: absolute;
  width: 98vw;
  height: 60vh;

  background-color: rgb(255, 255, 255);
}
</style>
