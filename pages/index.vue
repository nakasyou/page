<template>
  <div class="page">
    <LiberlunaHeader :class="{'hidden':scrollY<10}" class="liberluna-header-index"/>
    <MainTitle/>
    <LiberlunaFooter/>
  </div>
</template>
<style>
/* import Noto Sans JP */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
body{
  margin: 0px;
  padding: 0px;
  /* Noto Sans JP */
  font-family: 'Noto Sans JP', sans-serif;
}
.page{
  width:100%;
  height:100vh;
}
.hidden{
  visibility:hidden;
}
.liberluna-header-index{
  position:fixed;
  top:0px;
  left:0px;
}
</style>
<script lang="ts">
import Vue from 'vue'
import LiberlunaHeader from '~/components/liberluna_header.vue'
import LiberlunaFooter from '~/components/liberluna_footer.vue'
import MainTitle from '~/components/index/main_title.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader,
    LiberlunaFooter,
    MainTitle,
  },
  head: {
    title: "Liberluna",
    meta: [
      { charset: "utf-8" },
      { hid: 'description', name: 'description', content: 'Liberluna\'s page.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  data() {
    return {
      scrollY:0
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY=window.scrollY
    }
  }
})
</script>
