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
                <Competition></Competition>
              </n-grid-item>
            </n-grid>
          </n-grid-item>
          <n-grid-item :span="1">
            <entrance></entrance>
          </n-grid-item>
        </n-grid>

        <n-grid
          cols="1 600:4"
          class="container"
          style="width: 75%"
          :x-gap="12"
          :y-gap="8"
        >
          <n-grid-item
            :span="1"
            v-for="(item, index) of state.team"
            :key="index"
          >
            <Thing
              :num="item.num"
              :name="item.name"
              :describe="item.describe"
            ></Thing>
          </n-grid-item>
        </n-grid>
      </n-layout-content>
      <n-layout-footer>
        <div class="container" style="width: 75%">
          <Footer style="style: 'width: 75%'"></Footer>
        </div>
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script>
import naviga from "@/components/Naviga";
import carousel from "@/components/Card/carousel";
import Competition from "@/components/Card/competition.vue";
import entrance from "@/components/Card/entrance.vue";
import Thing from "@/components/Card/thing.vue";
import Footer from "@/components/footer";
import { team } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "Home",
  components: {
    naviga,
    carousel,
    Competition,
    entrance,
    Thing,
    Footer,
  },
  setup() {
    let state = reactive({
      team: [],
    });
    const res = async () => {
      const { data } = await team();
      state.team = data;
    };

    onMounted(() => {
      res();
    });
    return { state, res };
  },
};
</script>
<style lang="less" scope>
.container {
  margin: 0 auto;
  margin-top: 20px;
}

.layout-content {
  margin: 40px auto;
}
</style>
