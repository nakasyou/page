<template>
  <div class="member">
    <div>
      <img :src="profile.icon" :alt="profile.name" class="member-icon"/>
    </div>
    <div class="profile-name">
      {{ profile.name }}
    </div>
    <div>
      {{ profile.posts.join(",")}}
    </div>
    <div>
      <span class="skills-label">SKILLS:&nbsp;</span><u>{{ profile.skills.join("/") }}</u>
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
  text-align: center;
}
.profile-name{
  font-weight: bold;
}
.profile-desc{
  font-size: 0.8em;
}
.member-icon{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.skills-label{
  font-size: 0.7em;
}
</style>
