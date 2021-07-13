<template>
  <n-card
    title="优秀学生"
    hoverable
    content-style="display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;"
    :segmented="{
      content: 'hard',
    }"
  >
    <template #header-extra> #header-extra </template>
    <div class="person" v-for="(item, index) of state.stu" :key="index">
      <n-avatar circle :size="48" :src="item.image" />
      <br />
      {{ item.name }}
    </div>
  </n-card>
</template>

<script>
import { stu } from "@/api/home";
import { onMounted, reactive } from "vue";
import { relativeTime } from "@/utils/dayjs";
export default {
  name: "competition",
  components: {},
  setup() {
    let state = reactive({
      stu: [],
    });
    const res = async () => {
      const { data } = await stu();
      state.stu = data;
      console.log(
        "%c 🍖 data: ",
        "font-size:20px;background-color: #2EAFB0;color:#fff;",
        data
      );
    };
    onMounted(() => {
      res();
    });
    return { state, res, relativeTime };
  },
};
</script>

<style lang="less" scope>
.person {
  margin: 5px;
}
</style>
