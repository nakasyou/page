<template>
  <div class="member">
    <div>
      <img src="" :alt="profile.name"/>
    </div>
    <div class="profile-name">
      {{ profile.name }}
    </div>
    <div>
      {{ profile.skills.join("/") }}
    </div>
    <div class="profile-desc">
      {{ profile.descs.ja }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue"
import { type Profile } from "./members"

export default Vue.extend({
  name: "OneMember",
  props: {
    profile: {
      type: Object as PropType<Profile>,
      required: true,
    }
  }
})
</script>
<style scoped>
.member{
  width:30%;
  min-width: 200px;
  overflow-wrap: break-word;
}
.profile-name{
  font-weight: bold;
}
.profile-desc{
  font-size: 0.8em;
}
</style>
