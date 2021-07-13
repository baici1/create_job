<template>
  <div class="container">
    <n-empty description="你什么也找不到" v-if="loading">
      <template #extra>
        <n-button size="small">看看别的</n-button>
      </template>
    </n-empty>
    <n-thing v-else content-indented>
      <template #avatar>
        <div class="t_avatar">比赛简介</div>
      </template>
      <template #header>
        <h2 class="t_header">
          {{ state.match.name }}
        </h2>
      </template>
      <template #header-extra> </template>
      <template #description> 介绍 </template>
      {{ state.match.describe }}
      <template #footer> <h3>光荣区</h3> </template>
      <template #action>
        <n-space>
          <n-collapse>
            <n-collapse-item title="优秀老师" name="1">
              <div>
                <n-grid cols="1 700:2" :x-gap="12" :y-gap="8">
                  <n-grid-item
                    :span="1"
                    v-for="(item, index) of state.team"
                    :key="index"
                  >
                    <Award
                      :num="item.num"
                      :name="item.name"
                      :describe="item.describe"
                      :award="item.award"
                    ></Award>
                  </n-grid-item>
                </n-grid>
              </div>
            </n-collapse-item>
            <n-collapse-item title="优秀团队" name="2">
              <div>
                <n-grid cols="1 700:2" :x-gap="12" :y-gap="8">
                  <n-grid-item
                    :span="1"
                    v-for="(item, index) of state.team"
                    :key="index"
                  >
                    <Award
                      :num="item.num"
                      :name="item.name"
                      :describe="item.describe"
                      :award="item.award"
                    ></Award>
                  </n-grid-item>
                </n-grid>
              </div>
            </n-collapse-item>
            <n-collapse-item title="比赛成绩" name="3">
              <div>真棒</div>
            </n-collapse-item>
          </n-collapse>
        </n-space>
      </template>
    </n-thing>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { detail, team } from "@/api/home";
import Award from "./components/award.vue";
export default {
  name: "Match",
  components: {
    Award,
  },
  setup() {
    let loading = ref(true);
    const route = useRoute();
    let id = route.params.id;
    let state = reactive({
      match: "",
      team: [],
    });
    const teamdata = async () => {
      const { data } = await team();
      state.team = data;
      console.log(
        "%c 🍋 data: ",
        "font-size:20px;background-color: #3F7CFF;color:#fff;",
        data
      );
    };
    const res = async () => {
      const { data } = await detail();
      state.match = data;
      console.log(
        "%c 🥐 data: ",
        "font-size:20px;background-color: #4b4b4b;color:#fff;",
        data
      );
      loading.value = false;
    };
    onMounted(() => {
      res();
      teamdata();
    });
    return { id, loading, state };
  },
};
</script>

<style lang="less" scope>
.container {
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
