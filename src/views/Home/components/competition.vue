<template>
  <n-card
    title="最近比赛信息"
    hoverable
    class="com"
    content-style="display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;"
    :segmented="{
      content: 'hard',
      footer: 'soft',
    }"
  >
    <div class="com_text" v-for="(item, index) of state.date" :key="index">
      <!-- <n-skeleton text width="100%" v-if="state.loading" class="com_ske" /> -->
      <div class="com_text_left">
        <n-icon>
          <ChevronForward></ChevronForward>
        </n-icon>
        <router-link :to="{ name: 'information', params: { id: item.id } }">
          <n-ellipsis style="max-width: 230px">
            {{ item.title }}
          </n-ellipsis>
        </router-link>
      </div>
      <div class="com_text_right">
        {{ relativeTime(item.time, "MM-DD") }}
      </div>
    </div>
  </n-card>
</template>

<script>
import { com_time } from "@/api/home";
import { onMounted, reactive } from "vue";
import { ChevronForward } from "@vicons/ionicons5";
import { relativeTime } from "@/utils/dayjs";
export default {
  name: "competition",
  components: {
    ChevronForward,
  },
  setup() {
    let state = reactive({
      date: [],
    });
    const res = async () => {
      const { data } = await com_time();
      state.date = data;
    };
    onMounted(() => {
      res();
    });
    return { state, res, relativeTime };
  },
};
</script>

<style lang="less" scope>
.com {
  width: 100%;
  .com_text {
    width: 100%;
    //text-align: center;
    line-height: 30px;
    //padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .com_text_right {
      padding-right: 10px;
    }
    // border-bottom: 1px solid black;
  }
}
</style>
