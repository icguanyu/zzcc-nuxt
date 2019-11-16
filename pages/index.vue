<template>
  <div class="swiper">
    <TopNews />
    <Swiper />
  </div>
</template>

<script>
  import TopNews from "@/components/HomePage/TopNews";
  import Swiper from "@/components/HomePage/swiper";
  export default {
    components: {
      Swiper,
      TopNews
    }
  };
</script>

<style lang="scss" scoped>
  .swiper {
    width: 100%;
    height: 1000px;
  }
</style>
