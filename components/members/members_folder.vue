<template>
  <div class="members-list-root">
    <div class="members-list row row-cols-2 row-cols-md-3">
      <div v-for="members in membersList" :key="members.name" class="col">
        <OneMember :profile="members"/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import membersList from "./members.ts"
import OneMember from "./one_member.vue"
export default Vue.extend({
  name: "MembersFolder",
  components: {
    OneMember,
  },
  data() {
    return {
      membersList: membersList(),
    }
  },
})
</script>
<style scoped>
.members-list{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
}
.members-list-root{
  width:100%;
  height: 100%;
}
</style>
<style>
#__nuxt{
  overflow-x: hidden;
}
</style>