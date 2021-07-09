<template>
  <n-card title="卡片"> 卡片内容 </n-card>
</template>

<script>
import { team } from "@/api/home";
import { onMounted, reactive } from "vue";
export default {
  name: "TeamCard",
  setup() {
    let state = reactive({
      team: [],
    });
    const res = async () => {
      const { data } = await team();
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

<style></style>
