<template>
  <div class="app">
    <Header></Header>
    <naviga></naviga>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import naviga from "@/components/Naviga";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    naviga,
    Footer,
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
