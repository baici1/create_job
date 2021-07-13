<template>
  <div class="home">
    <n-layout>
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
    </n-layout>
  </div>
</template>

<script>
import carousel from "./components/carousel.vue";
import Competition from "./components/competition.vue";
import entrance from "./components/entrance.vue";
import Thing from "./components/thing.vue";
import { team } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "Home",
  components: {
    carousel,
    Competition,
    entrance,
    Thing,
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
  margin-top: 30px;
}

.layout-content {
  margin: 20px auto;
}
</style>
