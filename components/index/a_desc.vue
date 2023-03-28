<template>
  <div class="descs" :class="{ slidein: viewable }">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="detail">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "ADesc",
  props: {
    title: {
      type: String,
      default: "This is title",
      required: true
    }
  },
  data() {
    return {
      viewable: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll(): void {
      if (this.viewable) {
        return
      }
      const { top } = this.$el.getBoundingClientRect()
      this.viewable = top > 0 && top+1 < window.innerHeight
    }
  }
})
</script>
<style scoped>
.slidein {
  animation: slideIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

h2 {
  font-size: 1.5em;
}

.title {
  width: calc(30% - 2px)
}

.detail {
  width: calc(70% - 2px);
  margin-top: 3em;
}

@media screen and (max-width: 570px) {
  .title {
    width: 100%
  }

  .detail {
    width: 100%;
    position: static;
    margin-top: 0px;
  }
}

.descs {
  display: flex;
  flex-wrap: wrap;
}
</style>
