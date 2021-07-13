<template>
  <div class="entrance">
    <n-card
      title="系统入口"
      content-style="display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-content: center;"
    >
      <n-button>
        <n-icon>
          <Accessibility />
        </n-icon>
        系统
      </n-button>
      <n-button>
        <n-icon>
          <Accessibility />
        </n-icon>
        个人组队系统
      </n-button>
      <n-button>
        <n-icon>
          <Accessibility />
        </n-icon>
        报名系统
      </n-button>
    </n-card>
  </div>
</template>

<script>
import { Accessibility } from "@vicons/ionicons5";
export default {
  name: "entrance",
  components: {
    Accessibility,
  },
};
</script>

<style lang="less" scope>
.entrance {
  width: 100%;
  .n-button {
    margin-bottom: 20px;
    background-color: rgb(237, 237, 237);
  }
}
</style>
