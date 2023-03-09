
<template>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
    </head>
    <body>
      <Header/>
    </body>
  </html>
</template>

<script lang="ts">
import Header from '~/components/header.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
