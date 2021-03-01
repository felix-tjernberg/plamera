<template>
  <div id="defaultLists">
    <div class="completedRow">
      <img
        class="MobileIcons"
        src="@/assets/filledCircle.svg"
        id="filledCircle"
        alt=""
      />
      <router-link :to="'/completed'" id="completed"> Completed </router-link
      ><img
        class="DesktopIcons"
        src="@/assets/filledCircle.svg"
        alt=""
        id="filledCircle"
      />
    </div>

    <div class="importantRow">
      <img
        class="MobileIcons"
        src="@/assets/filledStar.svg"
        alt=""
        id="filledStar"
      />
      <router-link :to="'/important'" id="important"> Important </router-link
      ><img
        class="DesktopIcons"
        src="@/assets/filledStar.svg"
        alt=""
        id="filledStar"
      />
    </div>

    <div>
      <router-link to="/" id="ML">My List</router-link>
    </div>
  </div>
</template>
<style scoped>
  #defaultLists {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  #filledStar {
    width: 23px;
    height: 23px;
  }

  #filledCircle {
    width: 23px;
    height: 23px;
  }
  .completedRow {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .importantRow {
  
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .DesktopIcons {
    display: none;
  }


  #ML {
    display: none;
  }

  #completed {
    margin-left: 5px;
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
  }
  #important {
    margin-left: 5px;
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
  }

  @media only screen and (min-device-width: 1000px) {
    #defaultLists {
      width: 700px;

      margin-left: 256px;
      display: flex;
      flex-direction: row;
      
      align-items: flex-start;
      align-items: center;
      
    }

    .completedRow {
      display: inline;
      
    }

    .importantRow {
      display: inline;
     
    }

    #ML {
      margin-left: 20px;
      display: block;
      color: black;
      font-weight: 600;
      font-size: 16px;
    
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
    }
    #important {
      color: black;
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      text-decoration: none;
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
