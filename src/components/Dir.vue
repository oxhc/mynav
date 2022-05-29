<template>
<div class="dir">
{{dir.title}}
</div>
</template>

<script>
export default {
  name: "Dir_web",
  props: ['dir']
}
</script>

<style scoped>
.dir {
  background-color: bisque;
}
</style>
