<template>
  <div>
    <n-layout>
      <n-layout-header>
        <div>
          <Banner></Banner>
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px">
        <n-card title="组队" style="margin-bottom: 16px">
          <n-tabs
            v-model:value="state.match1"
            justify-content="space-between"
            tab-style="margin:0 5px"
            type="line"
          >
            <n-tab-pane
              v-for="(item, index) in state.match"
              :key="index"
              :name="item.name"
              :tab="item.name"
            >
              <n-grid cols="1 600:4">
                <n-grid-item
                  :span="1"
                  v-for="(itema, key) of state.match[index].team"
                  :key="key"
                >
                  <Thing
                    :id="itema.id"
                    :num="itema.num"
                    :describe="itema.describe"
                    :name="itema.name"
                    :partner="itema.partner"
                    :Ispartner="true"
                  ></Thing>
                </n-grid-item>
              </n-grid>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </n-layout-content>
      <!-- <n-layout-footer>成府路</n-layout-footer> -->
    </n-layout>
  </div>
</template>

<script>
import { matchdata } from "@/api/home";
import Banner from "@/components/Banner";
import Thing from "@/components/Card/thing.vue";
import { reactive } from "vue";
export default {
  components: {
    Banner,
    Thing,
  },
  setup() {
    let state = reactive({
      match: [],
      match1: "",
    });

    const match = async () => {
      const { data } = await matchdata();
      console.log(
        "%c 🍝 data: ",
        "font-size:20px;background-color: #B03734;color:#fff;",
        data
      );
      state.match = data;
      state.match1 = data[0].name;
      console.log(
        "%c 🍰 state.match1: ",
        "font-size:20px;background-color: #ED9EC7;color:#fff;",
        state.match1
      );
    };

    match();
    return { state };
  },
};
</script>

<style></style>
