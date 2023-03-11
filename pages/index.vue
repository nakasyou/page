<template>
  <div>
    <LiberlunaHeader/>
    <LiberlunaFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LiberlunaHeader from '~/components/liberluna_header.vue'
import LiberlunaFooter from '~/components/liberluna_footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader
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
