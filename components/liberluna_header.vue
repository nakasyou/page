<template>
  <header>
    <div id='header-main'>
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

<script>
export default {
  name: "LiberlunaHeader"
}
</script>
