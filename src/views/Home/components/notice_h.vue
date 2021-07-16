<template>
  <div class="notice">
    <n-card hoverable>
      <n-thing>
        <template #avatar>
          <n-avatar class="notice_avatar">
            <n-icon>
              <Trophy />
            </n-icon>
          </n-avatar>
        </template>
        <template #header>
          <h2 style="margin: 0">“互联网+”大学生创新创业大赛</h2>
        </template>
        <template #header-extra>
          <n-button circle size="small"> </n-button>
        </template>
        <template #description></template>
        中国“互联网+”大学生创新创业大赛，由教育部与政府、各高校共同主办。大赛旨在深化高等教育综合改革，激发大学生的创造力，培养造就“大众创业、万众创新”的主力军；推动赛事成果转化，促进“互联网+”新业态形成，服务经济提质增效升级；以创新引领创业、创业带动就业，推动高校毕业生更高质量创业就业。
        <template #footer>
          <div class="notice_footer">
            公告：请同学们于7/8号前完成报名组队
          </div></template
        >
        <template #action> </template>
      </n-thing>
    </n-card>
  </div>
</template>

<script>
import { Trophy } from "@vicons/ionicons5";
export default {
  name: "Notice",
  components: {
    Trophy,
  },
};
</script>

<style>
.notice_footer {
  color: red;
}
</style>
