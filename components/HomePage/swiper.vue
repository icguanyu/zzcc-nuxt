<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
        <img :src="banner" />
        <div class="mask"></div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev-custom" slot="button-prev"></div>
    <div class="swiper-button-next-custom" slot="button-next"></div>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  export default {
    data() {
      return {
        banners: [
          "https://www.sokunousokudoku.net/assets/img/index/kv_img02.jpg",
          "https://www.sokunousokudoku.net/assets/img/index/kv_img03.jpg",
          "https://www.sokunousokudoku.net/assets/img/index/kv_img01.jpg",
          "https://www.sokunousokudoku.net/assets/img/index/kv_img05.jpg"
        ],
        swiperOption: {
          slidesPerView: "auto",
          // slidesPerView: "3",
          spaceBetween: 10,
          centeredSlides: true,
          loop: true,
          speed: 500,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
          },
          navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom"
          },
          breakpoints: {
            1024: {},
            640: {}
          }
        }
      };
    },
    mounted() {}
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    margin-top: 10px;
    height: 320px;
    position: relative;
    overflow: hidden;
  }
  .swiper-slide {
    width: 1280px;
    background: #fff;
    height: 320px;
    border-radius: 10px;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
    }
  }

  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    z-index: 10;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 70px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .swiper-button-prev-custom {
    left: 20px;
    background-image: url("~assets/images/icons/prev.png");
  }
  .swiper-button-next-custom {
    right: 20px;
    background-image: url("~assets/images/icons/next.png");
  }
  .swiper-pagination-bullet-active {
    background: $second !important;
  }

  @media (max-width: 960px) {
    .swiper-container {
      height: 280px;
    }
    .swiper-slide {
      width: 95%;
      height: 280px;
    }
  }
  @media (max-width: 640px) {
    .swiper-container {
      height: 220px;
    }
    .swiper-slide {
      height: 220px;
      img{
        max-width: 100%;
      }
    }
    .swiper-button-prev-custom,
    .swiper-button-next-custom {
      width: 50px;
      height: 50px;
    }
  }
</style>