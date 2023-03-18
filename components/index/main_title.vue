<template>
  <div class="main-title">
    <img class="liberluna-title-image"
      src="@/assets/liberluna/liberluna-logo.svg"/>
    <img class="scroll-to-down"
      src="@/assets/icons/scroll.svg"/>
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
  width:60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.scroll-to-down{
  top:70%;
  left:50%;
  transform: translateY(-50%) translateX(-30%);
}
</style>
<script>
export default {
  name: "MainTitle",
}
</script>