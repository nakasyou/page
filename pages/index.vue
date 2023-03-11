<template>
  <div>
    <LiberlunaHeader/>
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
</style>
<script lang="ts">
import Vue from 'vue'
import LiberlunaHeader from '~/components/liberluna_header.vue'
import LiberlunaFooter from '~/components/liberluna_footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader,
    LiberlunaFooter
  },
  head: {
    title: "Liberluna",
    meta: [
      { charset: "utf-8" },
      { hid: 'description', name: 'description', content: 'Liberluna\'s page.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
})
</script>
