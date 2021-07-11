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
        <template #description> 需要人数：{{ num || 0 }}</template>
        {{
          describe ||
          "队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一，队伍有llz是专业第一"
        }}
        <template #footer> 操作 </template>
        <template #action>
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
export default {
  name: "thing",
  props: {
    id: Number,
    num: Number,
    name: String,
    describe: String,
  },
  components: {
    PersonAdd,
    People,
    PaperPlane,
    EllipsisHorizontalCircleOutline,
  },
};
</script>

<style></style>
