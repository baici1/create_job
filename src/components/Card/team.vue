<template>
  <n-card title="最近比赛信息" hoverable class="com">
    <div class="com_text" v-for="(item, index) of state.team" :key="index">
      {{ item.time }}+{{ item.name }}+{{ item.num }}
    </div>
  </n-card>
</template>

<script>
import { team } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "team",
  setup() {
    let state = reactive({
      team: [],
    });
    const res = async () => {
      const { data } = await team();
      state.team = data;
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

<style lang="less" scope></style>
