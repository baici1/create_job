<template>
  <div class="top">
    <div class="top-left">
      <img src="@/assets/img/启明星工作室.jpg" alt="qmx" />
    </div>
    <div class="top-right">
      <div class="top-box">
        <router-link :to="'/home'" class="router">首页</router-link>
      </div>
      <div class="top-box">
        <router-link :to="'/team'" class="router">组队</router-link>
      </div>
      <n-divider vertical style="margin: 0" />
      <div class="top-box">登录</div>

      <!-- <n-button @click="theme = darkTheme" v-if="theme == null">
        深色
      </n-button>
      <n-button @click="theme = null" v-if="theme">浅色</n-button> -->
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { darkTheme } from "naive-ui";
export default {
  name: "Header",
  setup() {
    return {
      // darkTheme,
      // theme: ref(null),
    };
  },
};
</script>

<style lang="less" scope>
.top {
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  height: 60px;
  width: 60px;
}
.top-right {
  display: flex;
  justify-content: center;
  align-items: center;
  .top-box {
    width: 48px;
    padding: 0 15px;
    text-align: center;
  }
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: rgb(51, 112, 255);
}
</style>
