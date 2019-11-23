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
          slidesPerView: 7, 
          //slidesPerColumn: 4,
          //slidesPerColumnFill : 'row',
          // grabCursor: true,
          spaceBetween: 10,
          //allowTouchMove: false,
          breakpoints: {
            960: {
              //slidesPerColumnFill : 'column',
              allowTouchMove: true,
              slidesPerView: 4, //一行显示3个
            },
            640: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            }
          }
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    //width: 250px;
    width: 100%;
    height: 100px;
    padding-right: 50px;
    overflow: hidden;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
   
    .btn {
      cursor: pointer;
      font-family: "Noto Sans TC", sans-serif;
      width: 100%;
      height: 90%;
      border-radius: 3px;
      
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
  @media (max-width: 960px) {
    .swiper-container {
      width: 100%;
      height: 100px;
      padding-right: 50px;
      padding-bottom: 0;
    }
    .swiper-slide {
      .btn {
        img {
          width: 40px;
        }
      }
    }
  }
  @media (max-width: 640px) {
    .swiper-container {
      height: 90px;
    }
    .swiper-slide {
      width: 100px !important;
    }
  }
</style>