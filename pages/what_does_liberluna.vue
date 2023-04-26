<template>
  <div class="member-root">
    <LiberlunaHeader/>
    <h1>Liberlunaは何をしているの？</h1>
    <div>
      <div>
        Liberlunaは、学生が多くいるコミュニティです。
      </div>
    </div>
    <MembersFolder/>
  </div>
</template>
<script>
import Vue from "vue"
import MembersFolder from "~/components/members/members_folder.vue"
import LiberlunaHeader from '~/components/liberluna_header.vue'

export default Vue.extend({
  name: "MembersPage",
  components: {
    MembersFolder,
    LiberlunaHeader,
  }
})
</script>
<style scoped>
.member-root{
  width: 100%;
  height: 100%;
}
</style>
