<template>
  <div>
    <LiberlunaHeader/>
  </div>
</template>

<script lang="ts">
import LiberlunaHeader from '~/components/liberluna_header.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader
  },
  head:{
    title: "Liberluna",
    meta: [
      {charset: "utf-8"},
      {hid: 'description', name: 'description', content: 'Liberluna\'s page.'}
    ]
  }
})
</script>
