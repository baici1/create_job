<template>
  <div class="banner">
    <div class="banner_title">
      <h1>创新创业官网</h1>
      <h3>找出一片属于自己的天地</h3>
    </div>
    <n-input size="large" round placeholder="查询比赛" class="input">
      <template #prefix>
        <n-icon>
          <Search />
        </n-icon>
      </template>
    </n-input>
  </div>
</template>

<script>
import { Search } from "@vicons/ionicons5";
export default {
  components: {
    Search,
  },
  name: "Banner",
  setup() {
    return {};
  },
};
</script>

<style lang="less" scope>
.banner {
  width: 100%;
  height: 350px;
  background: url("https://xanadu.aerowang.cn/img/newsbanner.173f8538.jpg")
    no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    width: 46%;
  }
}
.banner_title {
  padding-bottom: 30px;
  text-align: center;
  h1 {
    margin: 0;
  }
  h3 {
    margin: 0;
    padding-top: 5px;
    font-size: 14px;
    color: #828282;
  }
}
</style>
