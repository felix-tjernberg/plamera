<template>
  <div id="defaultLists">
    <div>
      <img src="@/assets/Task-Completed-Icon.png" alt="" />
      <router-link :to="'/completed'" id="completed">
        Completed
      </router-link>
    </div>
    <div>
      <img src="@/assets/Star-Icon.png" alt="" id="star" />
      <router-link :to="'/important'" id="important">
        Important
      </router-link>
    </div>
    <hr />
  </div>
</template>
<style scoped>
  hr {
    border: 1px solid #e8e8e8;
    margin-bottom: 15px;
  }
  #completed {
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 20px;
  }
  #important {
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 20px;
  }
  #defaultLists {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10vh;
  }
  #star {
    width: 25px;
    height: 25px;
  }
</style>
