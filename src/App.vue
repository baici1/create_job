<template>
  <div class="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scope>
.app {
  width: 100%;
  height: 100%;
}
</style>
