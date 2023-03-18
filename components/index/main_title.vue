<template>
  <div class="main-title">
    <img class="liberluna-title-image"
      src="@/assets/liberluna/liberluna-logo.svg"
      :class="{'hidden':scrollY>10}"/>
  </div>
</template>
<style>
.main-title{
  width:100%;
  height:100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.liberluna-title-image{
  width:90%;
}
.hidden{
  visibility: hidden;
}
</style>
<script>
export default {
  name: "MainTitle",
  data(){
    return {
      scrollY: 0
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>