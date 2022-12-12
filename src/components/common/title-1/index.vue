<template>
  <div class="title-1"><slot /></div>
</template>

<script lang="ts">
export default {
  name: "Title1",
};
</script>
<style lang="scss" scoped>
.title-1 {
  color: blue;
  font-size: 18px;
  font-weight: 600;
}
</style>
