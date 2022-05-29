<template>
<div class="nav" @click="open_nav">
  <div class="nav_logo">
    <img :src="nav.icon">
  </div>
  <div>
    {{ omi(nav.title, 16) }} <span v-if="nav.title.length >= 16">...</span>
  </div>

</div>
</template>

<script>
import omi from "@/utils/omi";
export default {
  name: "Nav_web",
  props: ['nav'],
  methods: {
    omi,
    open_nav() {
      window.open(this.nav.url,"_blank");
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: #ffebc9;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
}
.nav:hover {
  background-color: #ffca28;
  color: white;
}

.nav_logo {
  height: 18px;
  width: 18px;
}
.img_block {
  width: 16px;
}
</style>
