
<template>
  <client-only>
    <html>
      <head>
        
      </head>
      <body>
        <LiberlunaHeader/>
      </body>
    </html>
  </client-only>
</template>

<script lang="ts">
import LiberlunaHeader from '~/components/liberluna_header.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader
  },
})
</script>
