<template>
  <MembersFolder/>
</template>
<script>
import Vue from "vue"
import MembersFolder from "~/components/members/members_folder.vue"

export default Vue.extend({
  name: "MembersPage",
  components: {
    MembersFolder,
  }
})
</script>
<style scoped>
</style>
