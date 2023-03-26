<template>
  <div class="descs">
    <div class="title">
      <h2>{{title}}</h2>
    </div>
    <div class="detail">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ADesc",
  props: ["title"]
}
</script>
<style>
h2{
  font-size: 1.5em;
}
.title{
  width: calc(30% - 2px)
}
.detail{
  width: calc(70% - 2px);
  margin-top: 3em;
}
@media screen and (max-width: 570px) {
  .title{
    width: 100%
  }
  .detail{
    width: 100%;
    position: static;
    margin-top: 0px;
  }
}
.descs{
  display: flex;
  flex-wrap: wrap;
}
</style>