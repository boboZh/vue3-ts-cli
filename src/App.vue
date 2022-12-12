<template>
  <div>
    <div class="text-red">撒根深蒂固</div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  setup(props, ctx) {},
};
</script>

<style scoped lang="scss">
.text-red {
  color: $red;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
