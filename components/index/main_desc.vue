<template>
  <div class="main-desc">
    <ADesc title="What is Liberluna?">
      Liberlunaは、インターネット上で集まった、ハッカー/プログラマ集団です。
      Matrixプロトコルを使用している、安全なチャットである
      <a href="https://element.io">Element</a>
      を中心に活動してます。
      また、<a href="https://line.me/ti/g2/beNFT8zr5MEL_Um5xmSBZthZwfIuZcQu8-bYMA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
        LINE Open-chat
      </a>でも活動しています。
      GitHubを主に使っています。
    </ADesc>
    <ADesc title="What does 'Liberluna' do?">
      Liberlunaは、ITに関するスキルを活かして、様々なことに取り組んでいます。
        <div><b-button
            variant="outline-primary"
            href="./liberlunadoes"
          >例えば、こんな事<span class="material-symbols-outlined">open_in_new</span></b-button></div>
        気になる方は、LINEオープンチャットまでお越しください。歓迎します。
        また、LINEオープンチャットでは、セキュリティやコンピュータに関する雑談もしています。
    </ADesc>
    <ADesc title="Links"></ADesc>
  </div>
</template>
<script lang="ts">
import ADesc from "./a_desc.vue"
export default {
  name: "MainDesc",
  components: {
    ADesc,
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
.material-symbols-outlined{
  vertical-align: sub;
  font-size: 1em;
}
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
