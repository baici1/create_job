<template>
  <n-card title="最近比赛信息" hoverable class="com">
    <div class="com_text" v-for="(item, index) of state.date" :key="index">
      <!-- <n-skeleton text width="100%" v-if="state.loading" class="com_ske" /> -->
      <div class="com_text_left">
        <n-icon>
          <ChevronForward></ChevronForward>
        </n-icon>
        <n-ellipsis style="max-width: 230px">
          {{ item.name }}
        </n-ellipsis>
      </div>
      <div class="com_text_right">
        {{ item.time }}
      </div>
    </div>
  </n-card>
</template>

<script>
import { com_time } from "@/api/home";
import { onMounted, reactive } from "vue";
import { ChevronForward } from "@vicons/ionicons5";
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
    return { state, res };
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
  .n-card__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
  }
  .n-card-header__main {
    border-bottom: 1px solid black;
  }
}
</style>
