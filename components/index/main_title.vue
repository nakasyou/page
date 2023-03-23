<template>
  <div class="main-title" ref="mainTitle">
    <img class="liberluna-title-image"
      src="@/assets/liberluna/liberluna-logo.svg"/>
    <img class="scroll-to-down"
      src="@/assets/icons/scroll.svg"
      @click="scrollToDown"/>
  </div>
</template>
<style>
.main-title{
  width:100%;
  height:100%;
  background-color:aliceblue;
  position:relative;
}
.liberluna-title-image{
  width:50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  min-width: 50px;
}
.scroll-to-down{
  transform: translateX(-50%);
  position: absolute;
  top: 90%;
  left: 50%;
}
</style>
<script>
export default {
  name: "MainTitle",
  methods: {
    scrollToDown(){
      window.scrollTo({
        top: this.$refs.mainTitle.clientHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>