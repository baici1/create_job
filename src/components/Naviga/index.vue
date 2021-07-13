<template>
  <div class="navigation">
    <n-grid cols="2 600:6" style="text-align: center">
      <n-grid-item v-for="(item, index) of state.team" :key="index">
        <div class="smallbox border-r">
          <router-link :to="{ name: 'match', params: { id: item.id } }"
            >{{ item.name }}
          </router-link>
        </div>
      </n-grid-item>
    </n-grid>
    <!-- <div class="contianer border-l">
      <div
        class="smallbox border-r"
        v-for="(item, index) of state.team"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div> -->
  </div>
</template>

<script>
import { getdata } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    let state = reactive({
      team: [],
    });
    const res = async () => {
      const { data } = await getdata();
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
.navigation {
  width: 100%;
  // .contianer {
  //   width: 80%;
  //   margin: 0 auto;
  //   height: 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   //flex-wrap: wrap;

  // }
  .smallbox {
    line-height: 46px;
    text-align: center;
    font-size: 18px;
    background: rgb(232, 233, 232);
    //margin-right: 2px;
  }
  .smallbox:hover {
    background-color: rgb(38, 135, 235);
  }
  .border-r {
    border-right: 2px solid white;
    a {
      color: black;
    }
  }
}
</style>
