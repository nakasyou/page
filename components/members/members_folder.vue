<template>
  <h1>Members</h1>
  <div>{{ JSON.stringify(membersList) }}</div>
</template>
<script>
import Vue from "vue"
import membersList from "./members.ts"

export default Vue.extend({
  name: "MembersFolder",
})
</script>