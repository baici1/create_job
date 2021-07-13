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
          <n-button circle size="small">
            <template #icon>
              <EllipsisHorizontalCircleOutline />
            </template>
          </n-button>
        </template>
        <template #description> 人数：{{ num || 0 }}</template>
        {{
          describe ||
          "队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一"
        }}
        <template #footer> 获得奖项： </template>
        <template #action>
          <n-space>
            <n-button size="small" v-for="(item, index) of award" :key="index">
              <template #icon>
                <n-icon>
                  <Ribbon />
                </n-icon>
              </template>
              {{ item || "蓝桥杯省赛一等奖" }}
            </n-button>
            <!-- <n-button size="small">
              <template #icon>
                <n-icon>
                  <Ribbon />
                </n-icon>
              </template>
              蓝桥杯国赛一等奖
            </n-button> -->
          </n-space>
        </template>
      </n-thing>
    </n-card>
  </div>
</template>

<script>
import {
  People,
  EllipsisHorizontalCircleOutline,
  Ribbon,
} from "@vicons/ionicons5";
export default {
  name: "Award",
  props: {
    id: Number,
    num: Number,
    name: String,
    describe: String,
    award: Array,
  },
  components: {
    People,
    EllipsisHorizontalCircleOutline,
    Ribbon,
  },
};
</script>

<style></style>
