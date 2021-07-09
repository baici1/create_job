<template>
  <n-card title="最近比赛信息" hoverable class="com">
    <div class="com_text" v-for="(item, index) of state.date" :key="index">
      {{ item.time }}+{{ item.name }}
    </div>
  </n-card>
</template>

<script>
import { com_time } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "competition",
  setup() {
    let state = reactive({
      date: [],
    });
    const res = async () => {
      const { data } = await com_time();
      state.date = data;
      console.log(
        "%c 🥧 data: ",
        "font-size:20px;background-color: #3F7CFF;color:#fff;",
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
.com {
  width: 30%;
  height: 300px;
  .com_text {
    width: 100%;
    text-align: center;
    // border-bottom: 1px solid black;
  }
  .n-card__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
