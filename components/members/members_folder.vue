<template>
  <div>
    <div class="members-list">
      <div v-for="members in membersList" :key="members.name">
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
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
}
</style>
