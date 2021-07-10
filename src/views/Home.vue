<template>
  <div class="home">
    <n-layout>
      <n-layout-header>
        <div>
          <naviga></naviga>
        </div>
      </n-layout-header>

      <n-layout-content class="layout-content">
        <n-grid
          cols="1 600:4"
          class="container"
          style="width: 75%"
          :x-gap="12"
          :y-gap="8"
        >
          <n-grid-item :span="3">
            <carousel></carousel>
          </n-grid-item>
          <n-grid-item :span="1">
            <!-- <n-calendar
              #="{ year, month, date }"
              style="width: 100%; height: 300px"
            >
              {{ year }}-{{ month }}-{{ date }}
            </n-calendar> -->
            <Competition></Competition>
          </n-grid-item>
          <n-grid-item :span="3">
            <n-grid cols="1 800:3" :x-gap="20">
              <n-grid-item>
                <Competition></Competition>
              </n-grid-item>
              <n-grid-item>
                <Competition></Competition>
              </n-grid-item>
              <n-grid-item>
                <team></team>
              </n-grid-item>
            </n-grid>
          </n-grid-item>
          <n-grid-item :span="1">
            <Competition></Competition>
          </n-grid-item>
        </n-grid>
        <!-- <div class="container">
          <div class="container-one">
            <carousel style="width: 67.5%"></carousel>
            <Competition style="width: 22.5%"></Competition>
          </div>
          <div class="container-one" style="margin-top: 30px">
            <Competition></Competition>
            <Competition></Competition>
            <Competition style="width: 22.5%"></Competition>
          </div>
        </div> -->
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </div>
</template>

<script>
import naviga from "@/components/Naviga";
import carousel from "@/components/Card/carousel";
import Competition from "../components/Card/competition.vue";
import team from "../components/Card/team.vue";
export default {
  name: "Home",
  components: {
    naviga,
    carousel,
    Competition,
    team,
  },
  setup() {},
};
</script>
<style lang="less" scope>
.container {
  margin: 0 auto;
  // .container-one {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   flex-wrap: wrap;
  // }
}

.layout-content {
  margin: 40px auto;
}
</style>
