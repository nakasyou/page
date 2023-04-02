<template>
  <div class="member card">
    <div>
      <img :src="profile.icon" :alt="profile.name" class="member-icon"/>
    </div>
    <div class="profile-name">
      {{ profile.name }}
    </div>
    <div>
      {{ profile.posts.join(",") }}
    </div>
    <div>
      <span class="skills-label">SKILLS:&nbsp;</span><u>{{ profile.skills.join("/") }}</u>
    </div>
    <div class="profile-desc">
      {{ profile.descs.ja }}
    </div>
    <div class="links">
      <span>Links:</span>
      <span v-for="link in profile.links" :key="JSON.stringify(link)">
        <a :href="link.url">
          <img :src="link.icon" :alt="link.name" class="link-icon" :title="link.name"/>
        </a>
      </span>
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
  },
  methods: {}
})
</script>
<style scoped>
.member{
  overflow-wrap: break-word;
  text-align: center;
  margin:auto;
  margin-bottom: 1em;
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
.link-icon{
  width: 1.2em;
  height: 1.2em;
}
</style>
