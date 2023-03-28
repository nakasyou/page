<template>
  <div class="member-root">
    <h1>Members</h1>
    <MembersFolder/>
  </div>
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
.member-root{
  width: 100%;
  height: 100%;
}
</style>
