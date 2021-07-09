<template>
  <div class="home">
    <n-layout>
      <n-layout-header>
        <div>
          <naviga></naviga>
        </div>
      </n-layout-header>
      <n-layout-content class="layout-content">
        <div class="container">
          <div class="container-one">
            <carousel></carousel>
            <Competition style="width: 22.5%"></Competition>
          </div>
          <div class="container-one" style="margin-top: 30px">
            <Competition></Competition>
            <Competition></Competition>
            <Competition style="width: 22.5%"></Competition>
          </div>
        </div>
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </div>
</template>

<script>
import naviga from "@/components/Naviga";
import carousel from "@/components/Card/carousel";
import Competition from "../components/Card/competition.vue";
export default {
  name: "Home",
  components: {
    naviga,
    carousel,
    Competition,
  },
  setup() {},
};
</script>
<style lang="less" scope>
.container {
  width: 75%;
  margin: 0 auto;
  .container-one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}

.layout-content {
  margin: 40px auto;
}
</style>
