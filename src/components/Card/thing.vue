<template>
  <div class="thing">
    <n-card title="参赛队伍">
      <n-thing>
        <template #avatar>
          <n-avatar>
            <n-icon>
              <People />
            </n-icon>
          </n-avatar>
        </template>
        <template #header> {{ name || "无名" }}</template>
        <template #header-extra>
          <!-- <router-link :to="{ name: 'Detail', params: { id: ID } }"> -->
          <n-button circle size="small" @click="show = true">
            <template #icon>
              <EllipsisHorizontalCircleOutline />
            </template>
          </n-button>
          <!-- </router-link> -->
        </template>
        <template #description> 需要人数：{{ num || 0 }}</template>
        {{
          describe ||
          "队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一"
        }}
        <template #footer v-if="Ispartner">
          人员名单：
          <n-space>
            <n-button
              size="small"
              v-for="(item, index) of partner"
              :key="index"
            >
              <template #icon>
                <n-icon>
                  <PersonAdd />
                </n-icon>
              </template>
              {{ item || "李灵智" }}
            </n-button>
          </n-space>
        </template>
        <template #action>
          联系方式:
          <n-space>
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <PersonAdd />
                </n-icon>
              </template>
              联系队长
            </n-button>
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <PaperPlane />
                </n-icon>
              </template>
              申请加入
            </n-button>
          </n-space>
        </template>
      </n-thing>
      <n-drawer v-model:show="show" :width="width">
        <n-drawer-content :title="name" closable>
          <n-h3> 队伍描述：</n-h3>
          <n-p> {{ describe }}</n-p>
          <n-h3> 队员需求：</n-h3>
          <n-p> {{ describe }}</n-p>
          <n-h3>需要人数:</n-h3>
          <n-p> {{ num }}</n-p>
        </n-drawer-content>
      </n-drawer>
    </n-card>
  </div>
</template>

<script>
import {
  PersonAdd,
  People,
  PaperPlane,
  EllipsisHorizontalCircleOutline,
} from "@vicons/ionicons5";
import { computed, ref } from "vue";
export default {
  name: "thing",
  props: {
    id: Number,
    num: Number,
    name: String,
    describe: String,
    partner: Array,
    Ispartner: Boolean,
  },
  components: {
    PersonAdd,
    People,
    PaperPlane,
    EllipsisHorizontalCircleOutline,
  },
  setup(props) {
    let width = ref("20%");
    function Width() {
      const win = document.body.clientWidth;
      if (win > 1500) width = "30%";
      else width = "70%";
    }
    Width();
    return {
      width,
      show: ref(false),
      ID: computed(() => parseInt(props.id)),
    };
  },
};
</script>

<style></style>
