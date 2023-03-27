<template>
  <header>
    <div class='header-main'>
      <a href="https://liberluna.github.io/">
        <img src="@/assets/liberluna/liberluna-logo.svg" alt="Liberluna" class="liberluna-logo-link-header">
      </a>
      <button id="change-dark">
        <img src="@/assets/google-material/dark_mode.svg" id="dark" hidden>
        <img src="@/assets/google-material/light_mode.svg" id="light" hidden>
      </button>
    </div>
  </header>
</template>
<style>
  .header-main{
    height:30px;
    width:100%;
    background-color:#ddffdd;
    padding: 0px 5px;
  }
  .liberluna-logo-link-header{
    height:90%;
    max-width:50%;
  }
</style>
<script>
export default {
  name: "LiberlunaHeader"
}
</script>
