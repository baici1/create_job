<template>
  <div class="footer">
    <n-card title="联系我们" class="card">
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

<style>
.footer {
  margin-top: 20px;
  background-color: rgba(232, 233, 232, 0.3);
}
.card {
  width: 75%;
  margin: 0 auto;
}
</style>
