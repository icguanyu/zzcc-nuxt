<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in data" :key="index">
        <div class="btn">
          <img :src="item.thumb" alt />
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "quick-btns-student",
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        swiperOption: {
          direction: "vertical",
          slidesPerView: 3, //一行显示3个
          slidesPerColumn: 2, //显示2行
          // grabCursor: true,
          //spaceBetween: 10,
          autoWidth: true,
          breakpoints: {
            640: {
              direction: "horizontal",
              slidesPerView: 2, //一行显示3个
              slidesPerColumn: 1 //显示2行
            }
          }
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 250px;
    height: 340px;
    margin: inherit;
    padding-bottom: 50px;
    overflow: hidden;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    .btn {
      cursor: pointer;
      font-family: "Noto Sans TC", sans-serif;
      width: 100%;
      height: 90%;
      border-radius: 3px;
      margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px dashed $border-dark;
      color: $black;
      font-size: 1rem;
      letter-spacing: 1px;
      img {
        width: 50px;
        margin-bottom: 5px;
      }
      &:hover {
        background: #eee;
      }
    }
  }
</style>