<template>
  <div class="home">
    <title-1>{{ doubleCount }}</title-1>
  </div>
</template>

<script lang="ts">
import { useGlobalStore } from "@/store/index";
import { storeToRefs } from "pinia";

export default {
  name: "Home",
  components: {},
  props: {},
  setup() {
    const globalStore = useGlobalStore();
    const { doubleCount } = storeToRefs(globalStore);
    // globalStore.startInterval();
    return { doubleCount };
  },
};
</script>
<style lang="scss" scoped></style>
