<template>
  <div>
    <n-layout>
      <n-layout-header>
        <div>
          <Banner></Banner>
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px">平山道</n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </div>
</template>

<script>
//import { getdata } from "@/api/home";
import Banner from "@/components/Banner";
export default {
  components: {
    Banner,
  },
  setup() {
    return {};
    // getdata().then((res) => {
    //   console.log(
    //     "%c 🥡 res: ",
    //     "font-size:20px;background-color: #6EC1C2;color:#fff;",
    //     res
    //   );
    // });
  },
};
</script>

<style></style>
