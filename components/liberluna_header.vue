<template>
  <header class="header-root">
    <a href="https://liberluna.github.io/">
      <img
        src="@/assets/liberluna/liberluna-logo.svg"
        alt="Liberluna"
        class="liberluna-logo-link-header"/>
    </a>
    <button id="change-dark">
      <img src="@/assets/google-material/dark_mode.svg" id="dark" hidden/>
      <img src="@/assets/google-material/light_mode.svg" id="light" hidden/>
    </button>
  </header>
</template>
<script>
export default {
  name: "LiberlunaHeader"
}
</script>
<style scoped>
.header-root{
  background-color: #ddd;
}
.liberluna-logo-link-header{
  height: 20px;
}
</style>
