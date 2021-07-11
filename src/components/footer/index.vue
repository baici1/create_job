<template>
  <div class="footer">
    <n-card title="联系我们">
      <p>如果页面出现bug请联系我们解决！！谢谢</p>
      <p>
        <n-icon>
          <Call />
        </n-icon>
        llz：1308964967
      </p>
    </n-card>
  </div>
</template>

<script>
import { Call } from "@vicons/ionicons5";

export default {
  name: "Footer",
  components: {
    Call,
  },
};
</script>

<style></style>
