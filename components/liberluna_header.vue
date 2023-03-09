<template>
  <header>
    <div id='header-main'>
      <a href="https://liberluna.github.io/" style="color:#000" id="homelink">
        <img src="img/liberluna.svg" alt="Liberluna">
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