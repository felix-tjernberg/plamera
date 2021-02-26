<template>
  <div id="defaultLists">
    <div>
      <router-link to="/" id="ML">My List</router-link>
    </div>
    <div>
      <img class="MobileIcons" src="@/assets/Task-Completed-Icon.png" alt="" />
      <router-link :to="'/completed'" id="completed"> Completed </router-link
      ><img
        class="DesktopIcons"
        src="@/assets/Task-Completed-Icon.png"
        alt=""
      />
    </div>
    <div>
      <img class="MobileIcons" src="@/assets/Star-Icon.png" alt="" id="star" />
      <router-link :to="'/important'" id="important"> Important </router-link
      ><img
        class="DesktopIcons"
        src="@/assets/Star-Icon.png"
        alt=""
        id="star"
      />
    </div>
  </div>
</template>
<style scoped>
  .DesktopIcons {
    display: none;
  }
  .MobileIcons {
    display: block;
  }
  #ML {
    display: none;
  }
  #ML2 {
    display: none;
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
    margin-left: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0vh;
  }
  #star {
    width: 25px;
    height: 25px;
  }
  @media only screen and (min-device-width: 1000px) {
    #ML {
      display: block;
      color: black;
      font-weight: 600;
      font-size: 16px;
    }
    #ML2 {
      display: block;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
      font-style: normal;
      text-decoration: none;
    }
    #back {
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      position: absolute;
      margin-left: -25vh;
      margin-top: -2vh;
      font-size: 22px;
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
      flex-direction: row;
      align-items: flex-start;
      margin-top: 0vh;
    }

    #star {
      width: 25px;
      height: 25px;
    }
    .MobileIcons {
      display: none;
    }
    .DesktopIcons {
      display: block;
      margin-left: 130px;
      padding: 0;
      margin-top: -21px;
    }

    #defaultLists a.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
