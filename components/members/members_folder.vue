<template>
  <div>
    <h1>Members</h1>
    <div>{{ JSON.stringify(membersList) }}</div>
  </div>
</template>
<script>
import Vue from "vue"
import membersList from "./members.ts"

export default Vue.extend({
  name: "MembersFolder",
  data() {
    return {
      membersList
    }
  }
})
</script>