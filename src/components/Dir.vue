<template>
<div class="dir">
  <div class="logo">
    <el-image style="height: 40px;" src="./img/folder.png"></el-image>
  </div>
  <div style="text-align: center; ">
    {{dir.title}}
  </div>
</div>
</template>

<script>
export default {
  name: "Dir_web",
  props: ['dir']
}
</script>

<style scoped>
.logo {
  text-align: center;
}
.dir {
  background-color: bisque;
  border-radius: 10px;
}

.dir:hover {
  background-color: #fad69c;
}
</style>
