<template>
  <div class="main-title" ref="mainTitle">
    <img
      class="liberluna-title-image"
      src="@/assets/liberluna/liberluna-logo.svg"
      alt="liberluna"
    />
    <span @click="scrollToDown" class="scroll-to-down scroll-to-down-btn">
      <img
        class="scroll-to-down"
        src="@/assets/icons/scroll.svg"
        alt="↓Scroll↓"
      />
    </span>
  </div>
</template>
<script>
export default {
  name: "MainTitle",
  methods: {
    scrollToDown() {
      document.getElementById('main-title-end').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>
<style scoped>
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
