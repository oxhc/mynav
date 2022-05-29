<template>
<div class="nav" @click="open_nav">
nav: {{nav.title}}
</div>
</template>

<script>
export default {
  name: "Nav_web",
  props: ['nav'],
  methods: {
    open_nav() {
      window.open(this.nav.url,"_blank");
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: aquamarine;
  cursor: pointer;
}
.nav:hover {
  background-color: aqua;
}
</style>
