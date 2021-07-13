<template>
  <div class="competition">
    <n-empty description="你什么也找不到" v-if="loading">
      <template #extra>
        <n-button size="small">看看别的</n-button>
      </template>
    </n-empty>
    <n-thing v-else content-indented>
      <template #avatar>
        <div class="t_avatar">比赛信息</div>
      </template>
      <template #header>
        <h2 class="t_header">
          {{ state.com.title }}
        </h2>
      </template>
      <template #header-extra>
        时间：{{ state.com.time }} <br />作者：{{ state.com.author }}</template
      >
      <template #description> 介绍 </template>
      {{ state.com.describe }}
      <template #footer></template>
      <template #action> </template>
    </n-thing>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { com_time } from "@/api/home";
export default {
  name: "Match",
  setup() {
    let loading = ref(true);
    const route = useRoute();
    let id = route.params.id;
    let state = reactive({
      com: [],
    });
    const res = async () => {
      const { data } = await com_time();
      state.com = data[0];
      console.log(
        "%c 🥐 data: ",
        "font-size:20px;background-color: #4b4b4b;color:#fff;",
        data
      );
      loading.value = false;
    };
    onMounted(() => {
      res();
    });
    return { id, loading, state };
  },
};
</script>

<style lang="less" scope>
.competition {
  width: 75%;
  margin: 15px auto;
  .t_avatar {
    width: 9rem;
    height: 6rem;
    background-color: rgb(38, 93, 180);
    text-align: center;
    color: white;
    line-height: 6rem;
    font-size: 1.5rem;
  }
}
</style>
