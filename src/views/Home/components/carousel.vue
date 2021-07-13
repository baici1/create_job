<template>
  <div class="carsousel">
    <n-carousel autoplay>
      <img
        class="carousel-img"
        src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
    </n-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.carsousel {
  width: 100%;
  height: 300px;
}
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
