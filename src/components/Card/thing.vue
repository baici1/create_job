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
          <router-link :to="{ name: 'Detail', params: { id: ID } }">
            <n-button circle size="small">
              <template #icon>
                <EllipsisHorizontalCircleOutline />
              </template>
            </n-button>
          </router-link>
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
import { computed } from "@vue/runtime-core";
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
    return {
      ID: computed(() => parseInt(props.id)),
    };
  },
};
</script>

<style></style>
