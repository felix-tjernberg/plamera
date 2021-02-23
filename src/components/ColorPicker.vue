<template>
  <div class="color-picker">
    <input
      type="button"
      class="buttonColor"
      :class="{active : isActive}"
      v-for="(color, i) in colors"
      :key="i"
      :style="'background:' + color"
      @click="pickColor(color)"
      
    />
  
  </div>
</template>

<script>
export default {
  name: "color-picker",
  props: ["colors"],
  data(){
    return{
      isActive:'checkmark',
     
     
      
    }
  },
 
  methods: {
    pickColor(color) {
      this.$emit("pickColor", color);
    
    },
  },
};
</script>

<style scoped>
.color-picker {
  
  display: flex;
  justify-content: center;
  width: 125px;
  display: grid;
  margin: 15px auto;
  grid-template-columns: repeat(4, 25px);
  grid-gap: 30px;
}
.buttonColor {
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
}

.buttonTheme:hover {
  opacity: 0.4;
  box-shadow: 0 0 0 2px #d0d0d0;
  cursor: pointer;
}
</style>
