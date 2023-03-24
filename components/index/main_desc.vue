<template>
  <div class="main-desc">
    <div class="about">
      <div class="what-big-title">What</div>
      <div class="descs">
        <h1>What is Liberluna?</h1>
        <div>
          Liberlunaは、インターネット上で集まった、ハッカー/プログラマ集団です。
          Matrixプロトコルを使用している、安全なチャットである<a href="https://element.io">Element</a>を中心に活動してます。
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.about{

}
.what-big-title{
  font-size: 10em;
  font-weight: 700;
  color: green;
  position: absolute;
  vertical-align: top;
  opacity: 0.5;
}
.descs{
  display: flex;
}
</style>
<script lang="ts">
export default {
  name: "MainDesc",
  methods: {
    resize() {
      this.width=window.innerWidth
    }
  },
  mounted() {
    window.addEventListener("resize",this.resize)
    this.width=window.innerWidth
  },
  data() {
    return {
      width: 0
    }
  }
}
</script>