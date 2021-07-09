<template>
  <div class="navigation">
    <div class="contianer border-l">
      <div
        class="smallbox border-r"
        v-for="(item, index) of state.team"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
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
      console.log(
        "%c 🥘 data: ",
        "font-size:20px;background-color: #F5CE50;color:#fff;",
        data
      );
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
  height: 46px;
  background: rgb(232, 233, 232);
  .contianer {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //flex-wrap: wrap;
    .smallbox {
      width: 100%;
      line-height: 46px;
      text-align: center;
      font-size: 18px;
    }
    .smallbox:hover {
      background-color: rgb(38, 135, 235);
    }
    .border-r {
      border-right: 2px solid white;
    }
  }
  .border-l {
    border-left: 2px solid white;
  }
}
</style>
